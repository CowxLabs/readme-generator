App.UI = (function() {
  var eb = App.EventBus;
  var State = App.State;
  var U = App.Utils;
  var sortable = null;
  var skipPropsRender = false;
  var lastSelectedIndex = -1;
  var emptyTemplateHtml = null;

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
    if (!list) return;
    var s = State.getState();
    var sections = s.sections;
    var selected = s.selectedIndex;

    if (sections.length === 0) {
      list.innerHTML = emptyTemplateHtml || '';
      if (sortable) { try { sortable.destroy(); } catch(e) {} sortable = null; }
      return;
    }

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
    if (typeof Sortable === 'undefined') return;
    try {
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
    } catch(e) {
      sortable = null;
    }
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
    if (!visual && !raw) return;
    var md = assembleMarkdown();
    if (raw) raw.textContent = md || 'Your README is empty. Add sections from the left panel.';
    if (visual) {
      if (md) {
        try {
          if (typeof marked !== 'undefined' && typeof marked.parse === 'function') {
            visual.innerHTML = marked.parse(md, { breaks: true, gfm: true });
          } else {
            visual.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px">📝 Markdown preview — Raw output available in the "Raw Markdown" tab</p>';
          }
        } catch (e) {
          visual.innerHTML = '<p style="color:var(--danger)">Error rendering preview: ' + U.escapeHtml(e.message) + '</p>';
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

  function safeOn(el, event, handler) {
    if (el) el.addEventListener(event, handler);
  }

  function setupEvents() {
    var paletteList = document.getElementById('palette-list');
    safeOn(paletteList, 'click', function(e) {
      var item = e.target.closest('.palette-item');
      if (!item) return;
      var type = item.dataset.sectionType;
      if (type && App.SectionRegistry[type]) {
        State.addSection(type);
      }
    });

    var canvasList = document.getElementById('canvas-list');
    safeOn(canvasList, 'click', function(e) {
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
    safeOn(propsBody, 'input', function(e) {
      if (!e.target.dataset.prop) return;
      if (e.target.type === 'checkbox' || e.target.type === 'select-one' || e.target.tagName === 'SELECT') return;
      skipPropsRender = true;
      handlePropUpdate(e.target.dataset.prop, getInputValue(e.target));
      skipPropsRender = false;
    });

    safeOn(propsBody, 'change', function(e) {
      if (!e.target.dataset.prop) return;
      handlePropUpdate(e.target.dataset.prop, getInputValue(e.target));
    });

    safeOn(propsBody, 'click', function(e) {
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

    safeOn(document.getElementById('btn-theme'), 'click', function() {
      var current = State.getState().theme;
      State.setTheme(current === 'dark' ? 'light' : 'dark');
    });

    safeOn(document.getElementById('btn-templates'), 'click', function(e) {
      e.stopPropagation();
      var menu = document.getElementById('templates-menu');
      if (menu) menu.classList.toggle('visible');
    });

    document.addEventListener('click', function() {
      var menu = document.getElementById('templates-menu');
      if (menu) menu.classList.remove('visible');
    });

    safeOn(document.getElementById('templates-menu'), 'click', function(e) {
      e.stopPropagation();
      var item = e.target.closest('[data-action="apply-template"]');
      if (!item) return;
      applyTemplate(parseInt(item.dataset.templateIndex));
      var menu = document.getElementById('templates-menu');
      if (menu) menu.classList.remove('visible');
    });

    safeOn(document.getElementById('btn-save'), 'click', function() {
      if (State.save()) {
        U.showToast('Saved to browser storage', 'success');
      } else {
        U.showToast('Failed to save', 'error');
      }
    });

    safeOn(document.getElementById('btn-load'), 'click', function() {
      if (State.load()) {
        U.showToast('Loaded from browser storage', 'success');
      } else {
        U.showToast('No saved data found', 'error');
      }
    });

    var previewTabs = document.querySelectorAll('.preview-tab');
    previewTabs.forEach(function(tab) {
      safeOn(tab, 'click', function() {
        var mode = tab.dataset.tab;
        document.querySelectorAll('.preview-tab').forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        document.querySelectorAll('.preview-pane').forEach(function(p) { p.classList.remove('active'); });
        var targetPane = mode === 'visual' ? document.getElementById('preview-visual') : document.getElementById('preview-raw');
        if (targetPane) targetPane.classList.add('active');
        State.setPreviewMode(mode);
      });
    });

    safeOn(document.getElementById('btn-copy'), 'click', function() {
      var md = assembleMarkdown();
      if (!md) { U.showToast('Nothing to copy', 'error'); return; }
      U.copyToClipboard(md).then(function() {
        U.showToast('Copied to clipboard', 'success');
      }).catch(function() {
        U.showToast('Failed to copy', 'error');
      });
    });

    safeOn(document.getElementById('btn-download'), 'click', function() {
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
    var emptyEl = document.getElementById('canvas-empty');
    if (emptyEl) {
      emptyTemplateHtml = emptyEl.outerHTML;
    } else {
      emptyTemplateHtml = '<div class="canvas-empty" id="canvas-empty"><div class="empty-icon">📝</div><div class="empty-title">Your README is empty</div><div class="empty-hint">Click a section from the left panel to get started</div></div>';
    }
    renderPalette();
    renderTemplates();
    setupEvents();
    State.load();
    renderAll();
  }

  return { init: init, renderAll: renderAll };
})();
