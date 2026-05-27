App.UI = (function() {
  var eb = App.EventBus;
  var State = App.State;
  var U = App.Utils;
  var sortable = null;
  var skipPropsRender = false;
  var lastSelectedIndex = -1;

  function getInputValue(el) {
    if (el.type === 'checkbox') return el.checked;
    if (el.type === 'number' || el.type === 'range') return el.type === 'number' ? parseInt(el.value) || 0 : el.value;
    return el.value;
  }

  function renderAll() {
    var s = State.getState();
    renderCanvas();
    renderPreview();
    if (!skipPropsRender || s.selectedIndex !== lastSelectedIndex) {
      renderProperties();
    }
    lastSelectedIndex = s.selectedIndex;
  }

  function renderPalette() {
    var container = document.getElementById('palette-list');
    if (!container) return;
    var html = '';
    var order = ['title','about','badges','stats','streak','toplangs','trophy','social','visitor','quote','divider','repos'];
    order.forEach(function(type) {
      var def = App.SectionRegistry[type];
      if (!def) return;
      html += '<div class="palette-item" data-section-type="' + type + '">';
      html += '<span class="palette-item-icon">' + def.icon + '</span>';
      html += '<span class="palette-item-label">' + def.label + '</span>';
      html += '</div>';
    });
    container.innerHTML = html;
  }

  function renderCanvas() {
    var list = document.getElementById('canvas-list');
    var empty = document.getElementById('canvas-empty');
    if (!list) return;
    var s = State.getState();
    var sections = s.sections;
    var selected = s.selectedIndex;

    if (sections.length === 0) {
      list.innerHTML = '';
      list.appendChild(empty);
      if (sortable) { sortable.destroy(); sortable = null; }
      return;
    }

    if (empty.parentNode) empty.remove();

    var html = '';
    sections.forEach(function(section, i) {
      var def = App.SectionRegistry[section.type];
      if (!def) return;
      html += '<div class="canvas-section' + (i === selected ? ' selected' : '') + '" data-index="' + i + '" data-id="' + section.id + '">';
      html += '<button class="canvas-section-delete" data-action="delete-canvas-section" data-index="' + i + '">✕</button>';
      html += '<div class="canvas-section-header">';
      html += '<span class="canvas-section-icon">' + def.icon + '</span>';
      html += '<span class="canvas-section-type">' + def.label + '</span>';
      html += '</div>';
      html += '<div class="canvas-section-preview">' + def.renderPreview(section.config) + '</div>';
      html += '</div>';
    });

    list.innerHTML = html;
    setupSortable();
  }

  function setupSortable() {
    var list = document.getElementById('canvas-list');
    if (!list) return;
    if (sortable) { try { sortable.destroy(); } catch(e) {} sortable = null; }
    if (State.getState().sections.length === 0) return;
    sortable = new Sortable(list, {
      animation: 150,
      handle: '.canvas-section',
      ghostClass: 'drag-over',
      draggable: '.canvas-section',
      onEnd: function(evt) {
        if (evt.oldIndex !== evt.newIndex) {
          skipPropsRender = true;
          State.reorderSections(evt.oldIndex, evt.newIndex);
          skipPropsRender = false;
        }
      }
    });
  }

  function renderProperties() {
    var body = document.getElementById('properties-body');
    if (!body) return;
    var section = State.getSelected();
    if (!section) {
      body.innerHTML = '<div class="properties-empty">Select a section to edit its properties</div>';
      return;
    }
    var def = App.SectionRegistry[section.type];
    if (!def) {
      body.innerHTML = '<div class="properties-empty">Unknown section type</div>';
      return;
    }
    body.innerHTML = def.renderForm(section.config);
  }

  function assembleMarkdown() {
    var sections = State.getState().sections;
    var md = '';
    sections.forEach(function(section) {
      var def = App.SectionRegistry[section.type];
      if (def && def.getMarkdown) {
        var part = def.getMarkdown(section.config);
        if (part) md += part;
      }
    });
    return md.trim();
  }

  function renderPreview() {
    var visual = document.getElementById('preview-visual');
    var raw = document.getElementById('preview-raw');
    var md = assembleMarkdown();
    if (raw) raw.textContent = md || 'Your README is empty. Add sections from the left panel.';
    if (visual) {
      if (md) {
        try {
          if (typeof marked !== 'undefined') {
            visual.innerHTML = marked.parse(md, { breaks: true, gfm: true });
          } else {
            visual.innerHTML = '<p style="color:var(--danger)">Markdown renderer not loaded</p>';
          }
        } catch (e) {
          visual.innerHTML = '<p style="color:var(--danger)">Error rendering preview</p>';
        }
      } else {
        visual.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px">👋 Your README preview will appear here</p>';
      }
    }
  }

  function renderTemplates() {
    var menu = document.getElementById('templates-menu');
    if (!menu) return;
    var html = '';
    (App.Templates || []).forEach(function(tmpl) {
      html += '<button class="dropdown-item" data-action="apply-template" data-template-index="' + App.Templates.indexOf(tmpl) + '">';
      html += '<div class="dropdown-item-name">' + U.escapeHtml(tmpl.name) + '</div>';
      html += '<div class="dropdown-item-desc">' + U.escapeHtml(tmpl.description) + '</div>';
      html += '</button>';
    });
    menu.innerHTML = html;
  }

  function applyTemplate(index) {
    var tmpl = App.Templates[index];
    if (!tmpl) return;
    if (State.getState().sections.length > 0) {
      if (!confirm('This will replace your current README. Continue?')) return;
    }
    skipPropsRender = true;
    State.clearAll();
    tmpl.sections.forEach(function(s) {
      State.addSection(s.type, s.config);
    });
    skipPropsRender = false;
    State.setSelected(0);
    U.showToast('Template "' + tmpl.name + '" applied', 'success');
  }

  function handlePropUpdate(prop, value) {
    var s = State.getState();
    if (s.selectedIndex < 0) return;
    State.updateConfig(s.selectedIndex, prop, value);
  }

  function toggleBadge(badgeKey) {
    var s = State.getState();
    var section = s.sections[s.selectedIndex];
    if (!section || section.type !== 'badges') return;
    var selected = (section.config.selectedBadges || []).slice();
    var idx = selected.indexOf(badgeKey);
    if (idx !== -1) {
      selected.splice(idx, 1);
    } else {
      selected.push(badgeKey);
    }
    skipPropsRender = true;
    State.updateConfig(s.selectedIndex, 'selectedBadges', selected);
    skipPropsRender = false;
    renderProperties();
  }

  function addRepo() {
    var s = State.getState();
    var section = s.sections[s.selectedIndex];
    if (!section || section.type !== 'repos') return;
    var repos = (section.config.repos || []).slice();
    repos.push({ name: '', desc: '', url: '', language: '', stars: '' });
    skipPropsRender = true;
    State.updateConfig(s.selectedIndex, 'repos', repos);
    skipPropsRender = false;
    renderProperties();
  }

  function deleteRepo(index) {
    var s = State.getState();
    var section = s.sections[s.selectedIndex];
    if (!section || section.type !== 'repos') return;
    var repos = (section.config.repos || []).slice();
    repos.splice(index, 1);
    skipPropsRender = true;
    State.updateConfig(s.selectedIndex, 'repos', repos);
    skipPropsRender = false;
    renderProperties();
  }

  function setupEvents() {
    document.getElementById('palette-list').addEventListener('click', function(e) {
      var item = e.target.closest('.palette-item');
      if (!item) return;
      var type = item.dataset.sectionType;
      if (type && App.SectionRegistry[type]) {
        State.addSection(type);
      }
    });

    document.getElementById('canvas-list').addEventListener('click', function(e) {
      var deleteBtn = e.target.closest('[data-action="delete-canvas-section"]');
      if (deleteBtn) {
        e.stopPropagation();
        State.removeSection(parseInt(deleteBtn.dataset.index));
        return;
      }
      var sectionEl = e.target.closest('.canvas-section');
      if (!sectionEl) return;
      State.setSelected(parseInt(sectionEl.dataset.index));
    });

    var propsBody = document.getElementById('properties-body');
    propsBody.addEventListener('input', function(e) {
      if (!e.target.dataset.prop) return;
      if (e.target.type === 'checkbox' || e.target.type === 'select-one' || e.target.tagName === 'SELECT') return;
      skipPropsRender = true;
      handlePropUpdate(e.target.dataset.prop, getInputValue(e.target));
      skipPropsRender = false;
    });

    propsBody.addEventListener('change', function(e) {
      if (!e.target.dataset.prop) return;
      handlePropUpdate(e.target.dataset.prop, getInputValue(e.target));
    });

    propsBody.addEventListener('click', function(e) {
      var action = e.target.dataset.action;
      if (!action) return;
      e.preventDefault();
      switch (action) {
        case 'toggle-badge': toggleBadge(e.target.dataset.badge); break;
        case 'add-repo': addRepo(); break;
        case 'delete-repo': deleteRepo(parseInt(e.target.dataset.repoIndex)); break;
        case 'delete-section':
          if (confirm('Delete this section?')) {
            var idx = State.getState().selectedIndex;
            State.removeSection(idx);
          }
          break;
      }
    });

    document.getElementById('btn-theme').addEventListener('click', function() {
      var current = State.getState().theme;
      State.setTheme(current === 'dark' ? 'light' : 'dark');
    });

    document.getElementById('btn-templates').addEventListener('click', function(e) {
      e.stopPropagation();
      var menu = document.getElementById('templates-menu');
      menu.classList.toggle('visible');
    });

    document.addEventListener('click', function() {
      document.getElementById('templates-menu').classList.remove('visible');
    });

    document.getElementById('templates-menu').addEventListener('click', function(e) {
      e.stopPropagation();
      var item = e.target.closest('[data-action="apply-template"]');
      if (!item) return;
      applyTemplate(parseInt(item.dataset.templateIndex));
      document.getElementById('templates-menu').classList.remove('visible');
    });

    document.getElementById('btn-save').addEventListener('click', function() {
      if (State.save()) {
        U.showToast('Saved to browser storage', 'success');
      } else {
        U.showToast('Failed to save', 'error');
      }
    });

    document.getElementById('btn-load').addEventListener('click', function() {
      if (State.load()) {
        U.showToast('Loaded from browser storage', 'success');
      } else {
        U.showToast('No saved data found', 'error');
      }
    });

    document.querySelectorAll('.preview-tab').forEach(function(tab) {
      tab.addEventListener('click', function() {
        var mode = tab.dataset.tab;
        document.querySelectorAll('.preview-tab').forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        document.querySelectorAll('.preview-pane').forEach(function(p) { p.classList.remove('active'); });
        if (mode === 'visual') document.getElementById('preview-visual').classList.add('active');
        else document.getElementById('preview-raw').classList.add('active');
        State.setPreviewMode(mode);
      });
    });

    document.getElementById('btn-copy').addEventListener('click', function() {
      var md = assembleMarkdown();
      if (!md) { U.showToast('Nothing to copy', 'error'); return; }
      U.copyToClipboard(md).then(function() {
        U.showToast('Copied to clipboard', 'success');
      }).catch(function() {
        U.showToast('Failed to copy', 'error');
      });
    });

    document.getElementById('btn-download').addEventListener('click', function() {
      var md = assembleMarkdown();
      if (!md) { U.showToast('Nothing to download', 'error'); return; }
      U.downloadFile('README.md', md);
      U.showToast('README.md downloaded', 'success');
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA' || document.activeElement.tagName === 'SELECT')) return;
        var idx = State.getState().selectedIndex;
        if (idx >= 0) State.removeSection(idx);
      }
    });
  }

  function init() {
    renderPalette();
    renderTemplates();
    setupEvents();
    State.load();
    renderAll();
  }

  return { renderAll: renderAll, init: init };
})();

document.addEventListener('DOMContentLoaded', function() {
  if (App.UI && App.UI.init) App.UI.init();
});
