var App = window.App || {};

App.EventBus = (function() {
  var events = {};
  return {
    on: function(event, callback) {
      if (!events[event]) events[event] = [];
      events[event].push(callback);
    },
    off: function(event, callback) {
      if (!events[event]) return;
      events[event] = events[event].filter(function(cb) { return cb !== callback; });
    },
    emit: function(event, data) {
      if (!events[event]) return;
      events[event].forEach(function(cb) { cb(data); });
    }
  };
})();

App.State = (function() {
  var STORAGE_KEY = 'readme-generator-state';

  var state = {
    sections: [],
    selectedIndex: -1,
    theme: 'dark',
    previewMode: 'visual'
  };

  var eb = App.EventBus;

  function notify() {
    eb.emit('state-changed', state);
    saveDebounced();
  }

  function addSection(type, config, index) {
    var sectionDef = App.SectionRegistry && App.SectionRegistry[type];
    var cfg = config || (sectionDef ? sectionDef.defaultConfig() : {});
    var section = {
      id: generateId(),
      type: type,
      config: JSON.parse(JSON.stringify(cfg))
    };
    if (typeof index === 'number' && index >= 0 && index <= state.sections.length) {
      state.sections.splice(index, 0, section);
      state.selectedIndex = index;
    } else {
      state.sections.push(section);
      state.selectedIndex = state.sections.length - 1;
    }
    notify();
    return section;
  }

  function removeSection(index) {
    if (index < 0 || index >= state.sections.length) return;
    state.sections.splice(index, 1);
    if (state.selectedIndex >= state.sections.length) {
      state.selectedIndex = state.sections.length - 1;
    }
    if (state.sections.length === 0) state.selectedIndex = -1;
    notify();
  }

  function updateConfig(index, prop, value) {
    if (index < 0 || index >= state.sections.length) return;
    var cfg = state.sections[index].config;

    if (prop.includes('.')) {
      var parts = prop.split('.');
      var target = cfg;
      for (var i = 0; i < parts.length - 1; i++) {
        var p = parts[i];
        if (i < parts.length - 2 && !target[p]) target[p] = {};
        if (i === parts.length - 2 && !target[p]) target[p] = [];
        target = target[p];
      }
      target[parts[parts.length - 1]] = value;
    } else {
      cfg[prop] = value;
    }
    notify();
  }

  function setSelected(index) {
    state.selectedIndex = index;
    notify();
  }

  function reorderSections(oldIndex, newIndex) {
    var item = state.sections.splice(oldIndex, 1)[0];
    state.sections.splice(newIndex, 0, item);
    if (state.selectedIndex === oldIndex) state.selectedIndex = newIndex;
    else if (oldIndex < state.selectedIndex && newIndex >= state.selectedIndex) state.selectedIndex--;
    else if (oldIndex > state.selectedIndex && newIndex <= state.selectedIndex) state.selectedIndex++;
    notify();
  }

  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    notify();
  }

  function setPreviewMode(mode) {
    state.previewMode = mode;
    notify();
  }

  function getState() { return state; }

  function getSelected() {
    return state.selectedIndex >= 0 ? state.sections[state.selectedIndex] : null;
  }

  function save() {
    try {
      var data = {
        sections: state.sections,
        theme: state.theme
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      return false;
    }
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      var data = JSON.parse(raw);
      if (data.sections && Array.isArray(data.sections)) {
        state.sections = data.sections;
        state.selectedIndex = state.sections.length > 0 ? 0 : -1;
      }
      if (data.theme) setTheme(data.theme);
      notify();
      return true;
    } catch (e) {
      return false;
    }
  }

  function clearAll() {
    state.sections = [];
    state.selectedIndex = -1;
    notify();
  }

  var saveTimer = null;
  function saveDebounced() {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 500);
  }

  function generateId() {
    return 'sec-' + Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 6);
  }

  return {
    addSection: addSection,
    removeSection: removeSection,
    updateConfig: updateConfig,
    setSelected: setSelected,
    reorderSections: reorderSections,
    setTheme: setTheme,
    setPreviewMode: setPreviewMode,
    getState: getState,
    getSelected: getSelected,
    save: save,
    load: load,
    clearAll: clearAll
  };
})();

App.Utils = {
  escapeHtml: function(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  },

  copyToClipboard: function(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return Promise.resolve();
    } catch (e) {
      document.body.removeChild(textarea);
      return Promise.reject(e);
    }
  },

  downloadFile: function(filename, content) {
    var blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  showToast: function(message, type) {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = 'toast ' + (type || '') + ' visible';
    setTimeout(function() {
      toast.classList.remove('visible');
    }, 2000);
  },

  debounce: function(fn, delay) {
    var timer;
    return function() {
      var context = this;
      var args = arguments;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() { fn.apply(context, args); }, delay);
    };
  }
};

App.init = function() {
  App.EventBus.on('state-changed', function() {
    if (App.UI && App.UI.renderAll) {
      App.UI.renderAll();
    }
  });

  var state = App.State.getState();
  document.documentElement.setAttribute('data-theme', state.theme);
};
