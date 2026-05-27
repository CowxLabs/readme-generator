App.SectionRegistry = {};

App.BADGE_CATALOG = {
  languages: [
    { key: 'javascript', name: 'JavaScript', color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
    { key: 'typescript', name: 'TypeScript', color: '3178C6', logo: 'typescript', logoColor: 'white' },
    { key: 'python', name: 'Python', color: '3776AB', logo: 'python', logoColor: 'white' },
    { key: 'java', name: 'Java', color: 'ED8B00', logo: 'openjdk', logoColor: 'white' },
    { key: 'cpp', name: 'C++', color: '00599C', logo: 'cplusplus', logoColor: 'white' },
    { key: 'csharp', name: 'C#', color: '239120', logo: 'csharp', logoColor: 'white' },
    { key: 'go', name: 'Go', color: '00ADD8', logo: 'go', logoColor: 'white' },
    { key: 'rust', name: 'Rust', color: '000000', logo: 'rust', logoColor: 'white' },
    { key: 'ruby', name: 'Ruby', color: 'CC342D', logo: 'ruby', logoColor: 'white' },
    { key: 'php', name: 'PHP', color: '777BB4', logo: 'php', logoColor: 'white' },
    { key: 'swift', name: 'Swift', color: 'F05138', logo: 'swift', logoColor: 'white' },
    { key: 'kotlin', name: 'Kotlin', color: '7F52FF', logo: 'kotlin', logoColor: 'white' },
    { key: 'dart', name: 'Dart', color: '0175C2', logo: 'dart', logoColor: 'white' },
    { key: 'scala', name: 'Scala', color: 'DC322F', logo: 'scala', logoColor: 'white' },
    { key: 'lua', name: 'Lua', color: '2C2D72', logo: 'lua', logoColor: 'white' }
  ],
  frontend: [
    { key: 'react', name: 'React', color: '61DAFB', logo: 'react', logoColor: 'black' },
    { key: 'vue', name: 'Vue.js', color: '4FC08D', logo: 'vue.js', logoColor: 'white' },
    { key: 'angular', name: 'Angular', color: 'DD0031', logo: 'angular', logoColor: 'white' },
    { key: 'svelte', name: 'Svelte', color: 'FF3E00', logo: 'svelte', logoColor: 'white' },
    { key: 'nextjs', name: 'Next.js', color: '000000', logo: 'next.js', logoColor: 'white' },
    { key: 'nuxtjs', name: 'Nuxt.js', color: '00DC82', logo: 'nuxt.js', logoColor: 'white' },
    { key: 'tailwind', name: 'Tailwind CSS', color: '06B6D4', logo: 'tailwindcss', logoColor: 'white' },
    { key: 'bootstrap', name: 'Bootstrap', color: '7952B3', logo: 'bootstrap', logoColor: 'white' },
    { key: 'sass', name: 'Sass', color: 'CC6699', logo: 'sass', logoColor: 'white' },
    { key: 'html5', name: 'HTML5', color: 'E34F26', logo: 'html5', logoColor: 'white' },
    { key: 'css3', name: 'CSS3', color: '1572B6', logo: 'css3', logoColor: 'white' },
    { key: 'redux', name: 'Redux', color: '764ABC', logo: 'redux', logoColor: 'white' },
    { key: 'vite', name: 'Vite', color: '646CFF', logo: 'vite', logoColor: 'white' },
    { key: 'webpack', name: 'Webpack', color: '8DD6F9', logo: 'webpack', logoColor: 'black' },
    { key: 'graphql', name: 'GraphQL', color: 'E10098', logo: 'graphql', logoColor: 'white' }
  ],
  backend: [
    { key: 'nodejs', name: 'Node.js', color: '339933', logo: 'node.js', logoColor: 'white' },
    { key: 'express', name: 'Express', color: '000000', logo: 'express', logoColor: 'white' },
    { key: 'django', name: 'Django', color: '092E20', logo: 'django', logoColor: 'white' },
    { key: 'flask', name: 'Flask', color: '000000', logo: 'flask', logoColor: 'white' },
    { key: 'fastapi', name: 'FastAPI', color: '009688', logo: 'fastapi', logoColor: 'white' },
    { key: 'spring', name: 'Spring Boot', color: '6DB33F', logo: 'spring', logoColor: 'white' },
    { key: 'laravel', name: 'Laravel', color: 'FF2D20', logo: 'laravel', logoColor: 'white' },
    { key: 'rails', name: 'Rails', color: 'CC0000', logo: 'rubyonrails', logoColor: 'white' },
    { key: 'dotnet', name: '.NET', color: '512BD4', logo: '.net', logoColor: 'white' },
    { key: 'nestjs', name: 'NestJS', color: 'E0234E', logo: 'nestjs', logoColor: 'white' },
    { key: 'prisma', name: 'Prisma', color: '2D3748', logo: 'prisma', logoColor: 'white' },
    { key: 'apollo', name: 'Apollo', color: '311C87', logo: 'apollographql', logoColor: 'white' }
  ],
  databases: [
    { key: 'postgres', name: 'PostgreSQL', color: '4169E1', logo: 'postgresql', logoColor: 'white' },
    { key: 'mysql', name: 'MySQL', color: '4479A1', logo: 'mysql', logoColor: 'white' },
    { key: 'mongodb', name: 'MongoDB', color: '47A248', logo: 'mongodb', logoColor: 'white' },
    { key: 'redis', name: 'Redis', color: 'DC382D', logo: 'redis', logoColor: 'white' },
    { key: 'sqlite', name: 'SQLite', color: '003B57', logo: 'sqlite', logoColor: 'white' },
    { key: 'firebase', name: 'Firebase', color: 'DD2C00', logo: 'firebase', logoColor: 'white' },
    { key: 'supabase', name: 'Supabase', color: '3ECF8E', logo: 'supabase', logoColor: 'white' },
    { key: 'dynamodb', name: 'DynamoDB', color: '4053D6', logo: 'amazondynamodb', logoColor: 'white' },
    { key: 'neo4j', name: 'Neo4j', color: '4581C3', logo: 'neo4j', logoColor: 'white' },
    { key: 'elasticsearch', name: 'Elasticsearch', color: '005571', logo: 'elasticsearch', logoColor: 'white' }
  ],
  devops: [
    { key: 'docker', name: 'Docker', color: '2496ED', logo: 'docker', logoColor: 'white' },
    { key: 'kubernetes', name: 'Kubernetes', color: '326CE5', logo: 'kubernetes', logoColor: 'white' },
    { key: 'aws', name: 'AWS', color: 'FF9900', logo: 'amazonaws', logoColor: 'black' },
    { key: 'azure', name: 'Azure', color: '0078D4', logo: 'microsoftazure', logoColor: 'white' },
    { key: 'gcp', name: 'Google Cloud', color: '4285F4', logo: 'googlecloud', logoColor: 'white' },
    { key: 'vercel', name: 'Vercel', color: '000000', logo: 'vercel', logoColor: 'white' },
    { key: 'netlify', name: 'Netlify', color: '00C7B7', logo: 'netlify', logoColor: 'white' },
    { key: 'heroku', name: 'Heroku', color: '430098', logo: 'heroku', logoColor: 'white' },
    { key: 'githubactions', name: 'GitHub Actions', color: '2088FF', logo: 'githubactions', logoColor: 'white' },
    { key: 'jenkins', name: 'Jenkins', color: 'D24939', logo: 'jenkins', logoColor: 'white' },
    { key: 'terraform', name: 'Terraform', color: '7B42BC', logo: 'terraform', logoColor: 'white' },
    { key: 'nginx', name: 'Nginx', color: '009639', logo: 'nginx', logoColor: 'white' },
    { key: 'linux', name: 'Linux', color: 'FCC624', logo: 'linux', logoColor: 'black' },
    { key: 'prometheus', name: 'Prometheus', color: 'E6522C', logo: 'prometheus', logoColor: 'white' },
    { key: 'grafana', name: 'Grafana', color: 'F46800', logo: 'grafana', logoColor: 'white' }
  ],
  tools: [
    { key: 'git', name: 'Git', color: 'F05032', logo: 'git', logoColor: 'white' },
    { key: 'github', name: 'GitHub', color: '181717', logo: 'github', logoColor: 'white' },
    { key: 'gitlab', name: 'GitLab', color: 'FC6D26', logo: 'gitlab', logoColor: 'white' },
    { key: 'vscode', name: 'VS Code', color: '007ACC', logo: 'visualstudiocode', logoColor: 'white' },
    { key: 'figma', name: 'Figma', color: 'F24E1E', logo: 'figma', logoColor: 'white' },
    { key: 'postman', name: 'Postman', color: 'FF6C37', logo: 'postman', logoColor: 'white' },
    { key: 'notion', name: 'Notion', color: '000000', logo: 'notion', logoColor: 'white' },
    { key: 'obsidian', name: 'Obsidian', color: '7C3AED', logo: 'obsidian', logoColor: 'white' },
    { key: 'jira', name: 'Jira', color: '0052CC', logo: 'jira', logoColor: 'white' },
    { key: 'npm', name: 'npm', color: 'CB3837', logo: 'npm', logoColor: 'white' }
  ],
  mobile: [
    { key: 'reactnative', name: 'React Native', color: '61DAFB', logo: 'react', logoColor: 'black' },
    { key: 'flutter', name: 'Flutter', color: '02569B', logo: 'flutter', logoColor: 'white' },
    { key: 'swift-m', name: 'Swift', color: 'F05138', logo: 'swift', logoColor: 'white' },
    { key: 'kotlin-m', name: 'Kotlin', color: '7F52FF', logo: 'kotlin', logoColor: 'white' },
    { key: 'expo', name: 'Expo', color: '000020', logo: 'expo', logoColor: 'white' }
  ]
};

function lookupBadge(key) {
  for (var cat in App.BADGE_CATALOG) {
    var found = App.BADGE_CATALOG[cat].find(function(b) { return b.key === key; });
    if (found) return found;
  }
  return null;
}

function esc(s) { return App.Utils.escapeHtml(s); }

function checkbox(prop, label, checked) {
  return '<label class="form-check"><input type="checkbox" data-prop="' + prop + '"' + (checked ? ' checked' : '') + '><span>' + esc(label) + '</span></label>';
}

function input(prop, label, value, placeholder) {
  return '<div class="form-group"><label class="form-label">' + esc(label) + '</label><input class="form-input" data-prop="' + prop + '" value="' + esc(value || '') + '" placeholder="' + esc(placeholder || '') + '"></div>';
}

function textarea(prop, label, value, placeholder) {
  return '<div class="form-group"><label class="form-label">' + esc(label) + '</label><textarea class="form-textarea" data-prop="' + prop + '" placeholder="' + esc(placeholder || '') + '">' + esc(value || '') + '</textarea></div>';
}

function select(prop, label, value, options) {
  var html = '<div class="form-group"><label class="form-label">' + esc(label) + '</label><select class="form-select" data-prop="' + prop + '">';
  options.forEach(function(opt) {
    html += '<option value="' + esc(opt.value) + '"' + (value === opt.value ? ' selected' : '') + '>' + esc(opt.label) + '</option>';
  });
  html += '</select></div>';
  return html;
}

function colorInput(prop, label, value) {
  return '<div class="form-group"><label class="form-label">' + esc(label) + '</label><div class="form-row"><input type="color" class="form-color" data-prop="' + prop + '" value="#' + esc(value || '000000') + '"><input class="form-input" data-prop="' + prop + '" value="' + esc(value || '') + '" placeholder="Hex color"></div></div>';
}

function deleteButton() {
  return '<button class="btn-delete-section" data-action="delete-section">🗑 Delete Section</button>';
}

App.SectionRegistry.title = {
  type: 'title',
  label: 'Title & Tagline',
  icon: '👋',
  defaultConfig: function() {
    return { name: '', role: '', alignment: 'center' };
  },
  renderForm: function(config) {
    return input('name', 'Name', config.name, 'Your Name') +
      input('role', 'Role / Tagline', config.role, 'Full Stack Developer') +
      select('alignment', 'Alignment', config.alignment, [
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' }
      ]) +
      deleteButton();
  },
  renderPreview: function(config) {
    var name = config.name || '...';
    var role = config.role || '...';
    return '<div style="text-align:' + (config.alignment || 'center') + '"><strong style="font-size:15px">👋 Hi, I\'m ' + esc(name) + '</strong><br><span style="color:var(--text-muted)">' + esc(role) + '</span></div>';
  },
  getMarkdown: function(config) {
    var md = '# Hi, I\'m ' + (config.name || 'Your Name') + ' \ud83d\udc4b\n';
    if (config.role) md += '### ' + config.role + '\n';
    return md;
  }
};

App.SectionRegistry.about = {
  type: 'about',
  label: 'About Me',
  icon: '🙋',
  defaultConfig: function() {
    return { text: '', imageUrl: '' };
  },
  renderForm: function(config) {
    return textarea('text', 'About Text', config.text, 'I\'m a passionate developer who loves building things...') +
      input('imageUrl', 'Image URL (optional)', config.imageUrl, 'https://...') +
      deleteButton();
  },
  renderPreview: function(config) {
    var text = config.text || 'About me text...';
    return '<strong>🙋 About Me</strong><br><span style="color:var(--text-muted)">' + esc(text.substring(0, 80)) + (text.length > 80 ? '...' : '') + '</span>';
  },
  getMarkdown: function(config) {
    var md = '## 🙋 About Me\n\n';
    if (config.imageUrl) md += '![' + (config.name || 'Avatar') + '](' + config.imageUrl + ')\n\n';
    if (config.text) md += config.text + '\n';
    return md;
  }
};

App.SectionRegistry.badges = {
  type: 'badges',
  label: 'Skill Badges',
  icon: '🛠️',
  defaultConfig: function() {
    return { selectedBadges: [], style: 'for-the-badge' };
  },
  renderForm: function(config) {
    var selected = config.selectedBadges || [];
    var html = select('style', 'Badge Style', config.style || 'for-the-badge', [
      { value: 'for-the-badge', label: 'For the Badge (large)' },
      { value: 'flat', label: 'Flat' },
      { value: 'flat-square', label: 'Flat Square' },
      { value: 'plastic', label: 'Plastic' },
      { value: 'social', label: 'Social' }
    ]);
    html += '<div class="badge-categories">';
    var categories = [
      { key: 'languages', label: 'Languages' },
      { key: 'frontend', label: 'Frontend' },
      { key: 'backend', label: 'Backend' },
      { key: 'databases', label: 'Databases' },
      { key: 'devops', label: 'DevOps & Cloud' },
      { key: 'tools', label: 'Tools' },
      { key: 'mobile', label: 'Mobile' }
    ];
    categories.forEach(function(cat) {
      html += '<details class="badge-category" open>';
      html += '<summary>' + cat.label + '</summary>';
      html += '<div class="badge-grid">';
      (App.BADGE_CATALOG[cat.key] || []).forEach(function(badge) {
        var isChecked = selected.indexOf(badge.key) !== -1;
        html += '<label class="badge-option">';
        html += '<input type="checkbox" data-action="toggle-badge" data-badge="' + badge.key + '"' + (isChecked ? ' checked' : '') + '>';
        html += esc(badge.name);
        html += '</label>';
      });
      html += '</div></details>';
    });
    html += '</div>';
    html += deleteButton();
    return html;
  },
  renderPreview: function(config) {
    var selected = config.selectedBadges || [];
    if (selected.length === 0) return '<strong>🛠️ Skill Badges</strong><br><span style="color:var(--text-muted)">No skills selected</span>';
    var names = selected.slice(0, 6).map(function(k) {
      var b = lookupBadge(k);
      return b ? b.name : k;
    });
    return '<strong>🛠️ Skills</strong><br><span style="color:var(--text-muted)">' + esc(names.join(', ')) + (selected.length > 6 ? ' +' + (selected.length - 6) + ' more' : '') + '</span>';
  },
  getMarkdown: function(config) {
    var selected = config.selectedBadges || [];
    if (selected.length === 0) return '';
    var style = config.style || 'for-the-badge';
    var md = '## 🛠 Skills\n\n';
    selected.forEach(function(key) {
      var badge = lookupBadge(key);
      if (badge) {
        md += '![' + badge.name + '](https://img.shields.io/badge/' + badge.name.replace(/-/g, '--').replace(/ /g, '%20') + '-' + badge.color + '?style=' + style + '&logo=' + badge.logo + '&logoColor=' + badge.logoColor + ')\n';
      }
    });
    return md + '\n';
  }
};

App.SectionRegistry.stats = {
  type: 'stats',
  label: 'GitHub Stats Card',
  icon: '📊',
  defaultConfig: function() {
    return { username: '', theme: 'dark', showIcons: true, countPrivate: false, hideRank: false };
  },
  renderForm: function(config) {
    return input('username', 'GitHub Username', config.username, 'octocat') +
      select('theme', 'Theme', config.theme || 'dark', [
        { value: 'dark', label: 'Dark' }, { value: 'radical', label: 'Radical' },
        { value: 'merko', label: 'Merko' }, { value: 'gruvbox', label: 'Gruvbox' },
        { value: 'tokyonight', label: 'Tokyo Night' }, { value: 'onedark', label: 'One Dark' },
        { value: 'cobalt', label: 'Cobalt' }, { value: 'synthwave', label: 'Synthwave' },
        { value: 'highcontrast', label: 'High Contrast' }, { value: 'dracula', label: 'Dracula' },
        { value: 'prussian', label: 'Prussian' }, { value: 'monokai', label: 'Monokai' },
        { value: 'vue', label: 'Vue' }, { value: 'vue-dark', label: 'Vue Dark' },
        { value: 'shades-of-purple', label: 'Shades of Purple' }, { value: 'nightowl', label: 'Night Owl' },
        { value: 'buefy', label: 'Buefy' }, { value: 'blue-green', label: 'Blue Green' },
        { value: 'algolia', label: 'Algolia' }, { value: 'great-gatsby', label: 'Great Gatsby' },
        { value: 'solarized-dark', label: 'Solarized Dark' }, { value: 'solarized-light', label: 'Solarized Light' },
        { value: 'chartreuse-dark', label: 'Chartreuse Dark' }, { value: 'nord', label: 'Nord' },
        { value: 'gotham', label: 'Gotham' }, { value: 'material-palenight', label: 'Material Palenight' },
        { value: 'graywhite', label: 'Gray White' }, { value: 'vision-friendly-dark', label: 'Vision Friendly Dark' },
        { value: 'ayu-mirage', label: 'Ayu Mirage' }, { value: 'midnight-purple', label: 'Midnight Purple' },
        { value: 'calm', label: 'Calm' }, { value: 'flag-india', label: 'Flag India' },
        { value: 'omni', label: 'Omni' }, { value: 'react', label: 'React' },
        { value: 'jolly', label: 'Jolly' }, { value: 'maroongold', label: 'Maroon Gold' },
        { value: 'yeblu', label: 'Ye Blu' }, { value: 'blueberry', label: 'Blueberry' },
        { value: 'slateorange', label: 'Slate Orange' }, { value: 'kacho-ga', label: 'Kacho Ga' },
        { value: 'outrun', label: 'Outrun' }, { value: 'ocean-dark', label: 'Ocean Dark' },
        { value: 'city-lights', label: 'City Lights' }, { value: 'github-dark', label: 'GitHub Dark' },
        { value: 'github-dark-dimmed', label: 'GitHub Dark Dimmed' }, { value: 'discord-old', label: 'Discord Old' },
        { value: 'aura', label: 'Aura' }, { value: 'panda', label: 'Panda' },
        { value: 'noctis-minimus', label: 'Noctis Minimus' }, { value: 'cobalt2', label: 'Cobalt2' },
        { value: 'swift', label: 'Swift' }, { value: 'aura-dark', label: 'Aura Dark' },
        { value: 'apprentice', label: 'Apprentice' }, { value: 'moltack', label: 'Moltack' },
        { value: 'codeSTACKr', label: 'CodeSTACKr' }, { value: 'rose-pine', label: 'Rose Pine' },
        { value: 'catppuccin-mocha', label: 'Catppuccin Mocha' }, { value: 'catppuccin-latte', label: 'Catppuccin Latte' },
        { value: 'catppuccin-frappe', label: 'Catppuccin Frappe' }, { value: 'catppuccin-macchiato', label: 'Catppuccin Macchiato' },
        { value: 'transparent', label: 'Transparent' }
      ]) +
      checkbox('showIcons', 'Show Icons', config.showIcons !== false) +
      checkbox('countPrivate', 'Count Private Contributions', config.countPrivate === true) +
      checkbox('hideRank', 'Hide Rank', config.hideRank === true) +
      deleteButton();
  },
  renderPreview: function(config) {
    var user = config.username || 'username';
    return '<strong>📊 GitHub Stats</strong><br><span style="color:var(--text-muted);font-size:11px">github-readme-stats for <strong>' + esc(user) + '</strong> &bull; ' + esc(config.theme || 'dark') + '</span>';
  },
  getMarkdown: function(config) {
    if (!config.username) return '';
    var params = '?username=' + encodeURIComponent(config.username);
    params += '&show_icons=' + (config.showIcons !== false);
    params += '&theme=' + (config.theme || 'dark');
    params += '&count_private=' + (config.countPrivate === true);
    params += '&hide_rank=' + (config.hideRank === true);
    return '![GitHub Stats](https://github-readme-stats.vercel.app/api' + params + ')\n';
  }
};

App.SectionRegistry.streak = {
  type: 'streak',
  label: 'GitHub Streak Stats',
  icon: '🔥',
  defaultConfig: function() {
    return { username: '', theme: 'dark', hideTotal: false, hideCurrent: false };
  },
  renderForm: function(config) {
    return input('username', 'GitHub Username', config.username, 'octocat') +
      select('theme', 'Theme', config.theme || 'dark', [
        { value: 'dark', label: 'Dark' }, { value: 'radical', label: 'Radical' },
        { value: 'merko', label: 'Merko' }, { value: 'gruvbox', label: 'Gruvbox' },
        { value: 'tokyonight', label: 'Tokyo Night' }, { value: 'onedark', label: 'One Dark' },
        { value: 'cobalt', label: 'Cobalt' }, { value: 'synthwave', label: 'Synthwave' },
        { value: 'highcontrast', label: 'High Contrast' }, { value: 'dracula', label: 'Dracula' },
        { value: 'nord', label: 'Nord' }, { value: 'monokai', label: 'Monokai' },
        { value: 'vue', label: 'Vue' }, { value: 'prussian', label: 'Prussian' },
        { value: 'transparent', label: 'Transparent' }
      ]) +
      checkbox('hideTotal', 'Hide Total Contributions', config.hideTotal === true) +
      checkbox('hideCurrent', 'Hide Current Streak', config.hideCurrent === true) +
      deleteButton();
  },
  renderPreview: function(config) {
    var user = config.username || 'username';
    return '<strong>🔥 Streak Stats</strong><br><span style="color:var(--text-muted);font-size:11px">github-readme-streak-stats for <strong>' + esc(user) + '</strong></span>';
  },
  getMarkdown: function(config) {
    if (!config.username) return '';
    var params = '?user=' + encodeURIComponent(config.username);
    params += '&theme=' + (config.theme || 'dark');
    if (config.hideTotal) params += '&hide_total_contributions=true';
    if (config.hideCurrent) params += '&hide_current_streak=true';
    return '![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/' + params + ')\n';
  }
};

App.SectionRegistry.toplangs = {
  type: 'toplangs',
  label: 'Top Languages',
  icon: '📈',
  defaultConfig: function() {
    return { username: '', theme: 'dark', layout: 'compact', langsCount: 8, hideLangs: '' };
  },
  renderForm: function(config) {
    return input('username', 'GitHub Username', config.username, 'octocat') +
      select('theme', 'Theme', config.theme || 'dark', [
        { value: 'dark', label: 'Dark' }, { value: 'radical', label: 'Radical' },
        { value: 'tokyonight', label: 'Tokyo Night' }, { value: 'onedark', label: 'One Dark' },
        { value: 'dracula', label: 'Dracula' }, { value: 'nord', label: 'Nord' },
        { value: 'transparent', label: 'Transparent' }
      ]) +
      select('layout', 'Layout', config.layout || 'compact', [
        { value: 'compact', label: 'Compact' }, { value: 'normal', label: 'Normal' },
        { value: 'donut', label: 'Donut' }, { value: 'pie', label: 'Pie' },
        { value: 'donut-vertical', label: 'Donut Vertical' }
      ]) +
      input('langsCount', 'Number of Languages', config.langsCount || '8', '1-10') +
      input('hideLangs', 'Hide Languages (comma-separated)', config.hideLangs || '', 'html,css') +
      deleteButton();
  },
  renderPreview: function(config) {
    var user = config.username || 'username';
    return '<strong>📈 Top Languages</strong><br><span style="color:var(--text-muted);font-size:11px">Top ' + esc(config.langsCount || '8') + ' languages for <strong>' + esc(user) + '</strong></span>';
  },
  getMarkdown: function(config) {
    if (!config.username) return '';
    var params = '?username=' + encodeURIComponent(config.username);
    params += '&theme=' + (config.theme || 'dark');
    params += '&layout=' + (config.layout || 'compact');
    params += '&langs_count=' + (config.langsCount || '8');
    if (config.hideLangs) params += '&hide=' + encodeURIComponent(config.hideLangs);
    return '![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/' + params + ')\n';
  }
};

App.SectionRegistry.trophy = {
  type: 'trophy',
  label: 'GitHub Trophy',
  icon: '🏆',
  defaultConfig: function() {
    return { username: '', theme: 'darkhub', rows: 2, columns: 4 };
  },
  renderForm: function(config) {
    return input('username', 'GitHub Username', config.username, 'octocat') +
      select('theme', 'Theme', config.theme || 'darkhub', [
        { value: 'flat', label: 'Flat' }, { value: 'onedark', label: 'One Dark' },
        { value: 'darkhub', label: 'Dark Hub' }, { value: 'discord', label: 'Discord' },
        { value: 'algolia', label: 'Algolia' }, { value: 'monokai', label: 'Monokai' },
        { value: 'nord', label: 'Nord' }, { value: 'radical', label: 'Radical' },
        { value: 'gruvbox', label: 'Gruvbox' }, { value: 'dracula', label: 'Dracula' },
        { value: 'tokyonight', label: 'Tokyo Night' }
      ]) +
      select('rows', 'Rows', String(config.rows || 2), [
        { value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }
      ]) +
      select('columns', 'Columns', String(config.columns || 4), [
        { value: '3', label: '3' }, { value: '4', label: '4' }, { value: '5', label: '5' }, { value: '6', label: '6' }
      ]) +
      deleteButton();
  },
  renderPreview: function(config) {
    var user = config.username || 'username';
    return '<strong>🏆 Trophy</strong><br><span style="color:var(--text-muted);font-size:11px">github-profile-trophy for <strong>' + esc(user) + '</strong></span>';
  },
  getMarkdown: function(config) {
    if (!config.username) return '';
    var params = '?username=' + encodeURIComponent(config.username);
    params += '&theme=' + (config.theme || 'darkhub');
    params += '&row=' + (config.rows || 2);
    params += '&column=' + (config.columns || 4);
    return '![Trophies](https://github-profile-trophy.vercel.app/' + params + ')\n';
  }
};

App.SectionRegistry.social = {
  type: 'social',
  label: 'Social Badges',
  icon: '🔗',
  defaultConfig: function() {
    return {
      twitter: '', linkedin: '', discord: '', devto: '',
      medium: '', youtube: '', website: '', email: '', mastodon: ''
    };
  },
  renderForm: function(config) {
    return input('twitter', 'Twitter Username', config.twitter, 'jack') +
      input('linkedin', 'LinkedIn Username', config.linkedin, 'john-doe') +
      input('discord', 'Discord (e.g. username#0000)', config.discord) +
      input('devto', 'Dev.to Username', config.devto) +
      input('medium', 'Medium Username', config.medium) +
      input('youtube', 'YouTube Channel ID', config.youtube) +
      input('mastodon', 'Mastodon URL', config.mastodon) +
      input('website', 'Website URL', config.website, 'https://example.com') +
      input('email', 'Email', config.email, 'hello@example.com') +
      deleteButton();
  },
  renderPreview: function(config) {
    var count = 0;
    var fields = ['twitter','linkedin','discord','devto','medium','youtube','website','email','mastodon'];
    fields.forEach(function(f) { if (config[f]) count++; });
    return '<strong>🔗 Social Links</strong><br><span style="color:var(--text-muted)">' + count + ' link' + (count !== 1 ? 's' : '') + ' configured</span>';
  },
  getMarkdown: function(config) {
    var badges = {
      twitter: { name: 'Twitter', color: '1DA1F2', logo: 'twitter', prefix: 'https://twitter.com/' },
      linkedin: { name: 'LinkedIn', color: '0A66C2', logo: 'linkedin', prefix: 'https://linkedin.com/in/' },
      discord: { name: 'Discord', color: '5865F2', logo: 'discord', prefix: '' },
      devto: { name: 'Dev.to', color: '0A0A0A', logo: 'dev.to', prefix: 'https://dev.to/' },
      medium: { name: 'Medium', color: '000000', logo: 'medium', prefix: 'https://medium.com/@' },
      youtube: { name: 'YouTube', color: 'FF0000', logo: 'youtube', prefix: 'https://youtube.com/@' },
      mastodon: { name: 'Mastodon', color: '6364FF', logo: 'mastodon', prefix: '' },
      website: { name: 'Website', color: '4285F4', logo: 'googlechrome', prefix: '' },
      email: { name: 'Email', color: 'EA4335', logo: 'gmail', prefix: 'mailto:' }
    };
    var md = '';
    var hasLinks = false;
    for (var key in badges) {
      if (config[key]) {
        if (!hasLinks) { md = '## 🔗 Connect with me\n\n'; hasLinks = true; }
        var b = badges[key];
        var url = b.prefix ? b.prefix + config[key] : config[key];
        md += '[![' + b.name + '](https://img.shields.io/badge/' + b.name + '-' + b.color + '?style=for-the-badge&logo=' + b.logo + '&logoColor=white)](' + url + ')\n';
      }
    }
    return hasLinks ? md + '\n' : '';
  }
};

App.SectionRegistry.visitor = {
  type: 'visitor',
  label: 'Visitor Counter',
  icon: '👀',
  defaultConfig: function() {
    return { username: '', label: 'Profile Views', color: '0e75b6', style: 'flat' };
  },
  renderForm: function(config) {
    return input('username', 'GitHub Username', config.username, 'octocat') +
      input('label', 'Counter Label', config.label, 'Profile Views') +
      input('color', 'Color', config.color, '0e75b6') +
      select('style', 'Style', config.style || 'flat', [
        { value: 'flat', label: 'Flat' }, { value: 'flat-square', label: 'Flat Square' },
        { value: 'plastic', label: 'Plastic' }, { value: 'for-the-badge', label: 'For the Badge' },
        { value: 'social', label: 'Social' }
      ]) +
      deleteButton();
  },
  renderPreview: function(config) {
    var user = config.username || 'username';
    return '<strong>👀 Visitor Counter</strong><br><span style="color:var(--text-muted);font-size:11px">komarev.com/ghpvc for <strong>' + esc(user) + '</strong></span>';
  },
  getMarkdown: function(config) {
    if (!config.username) return '';
    return '![Visitors](https://komarev.com/ghpvc/?username=' + encodeURIComponent(config.username) + '&label=' + encodeURIComponent(config.label || 'Profile%20Views') + '&color=' + (config.color || '0e75b6') + '&style=' + (config.style || 'flat') + ')\n';
  }
};

App.SectionRegistry.quote = {
  type: 'quote',
  label: 'Quote',
  icon: '💬',
  defaultConfig: function() {
    return { text: '', author: '', style: 'blockquote' };
  },
  renderForm: function(config) {
    return textarea('text', 'Quote Text', config.text, 'The best way to predict the future is to create it.') +
      input('author', 'Author', config.author, 'Peter Drucker') +
      select('style', 'Style', config.style || 'blockquote', [
        { value: 'blockquote', label: 'Blockquote' },
        { value: 'callout', label: 'Callout Box' }
      ]) +
      deleteButton();
  },
  renderPreview: function(config) {
    var text = config.text || 'Your quote here...';
    return '<strong>💬 Quote</strong><br><span style="color:var(--text-muted);font-style:italic">"' + esc(text.substring(0, 60)) + (text.length > 60 ? '...' : '') + '"</span>';
  },
  getMarkdown: function(config) {
    if (!config.text) return '';
    if (config.style === 'callout') {
      var md = '> **"' + config.text + '"**\n';
      if (config.author) md += '> — *' + config.author + '*\n';
      return md + '\n';
    }
    var md = '> "' + config.text + '"';
    if (config.author) md += ' — ' + config.author;
    return md + '\n\n';
  }
};

App.SectionRegistry.divider = {
  type: 'divider',
  label: 'Divider',
  icon: '➖',
  defaultConfig: function() {
    return { style: 'simple', customEmoji: '' };
  },
  renderForm: function(config) {
    return select('style', 'Divider Style', config.style || 'simple', [
      { value: 'simple', label: 'Simple Line' },
      { value: 'stars', label: 'Star Divider ⭐' },
      { value: 'rainbow', label: 'Rainbow' },
      { value: 'dots', label: 'Animated Dots' },
      { value: 'gradient', label: 'Gradient Bar' },
      { value: 'custom', label: 'Custom Emoji' }
    ]) +
      (config.style === 'custom' ? input('customEmoji', 'Emoji or Text', config.customEmoji, '⚡') : '') +
      deleteButton();
  },
  renderPreview: function(config) {
    var styles = {
      simple: '───────',
      stars: '⭐ ⭐ ⭐',
      rainbow: '🌈 ─────',
      dots: '• • • • •',
      gradient: '▀▀▀▀▀▀▀',
      custom: config.customEmoji || '⚡'
    };
    return '<div style="text-align:center;color:var(--text-muted)">' + esc(styles[config.style] || '───────') + '</div>';
  },
  getMarkdown: function(config) {
    switch (config.style) {
      case 'stars': return '<p align="center">⭐ ⭐ ⭐</p>\n\n';
      case 'rainbow': return '<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />\n\n';
      case 'dots': return '<p align="center">⣿⣿⣿⣿⣿⣿⣿⣿</p>\n\n';
      case 'gradient': return '<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png" width="100%" />\n\n';
      case 'custom': return '<p align="center">' + (config.customEmoji || '⚡') + ' ' + (config.customEmoji || '⚡') + ' ' + (config.customEmoji || '⚡') + '</p>\n\n';
      default: return '---\n\n';
    }
  }
};

App.SectionRegistry.repos = {
  type: 'repos',
  label: 'Repository Showcase',
  icon: '📌',
  defaultConfig: function() {
    return { repos: [], style: 'list' };
  },
  renderForm: function(config) {
    var repos = config.repos || [];
    var html = select('style', 'Layout', config.style || 'list', [
      { value: 'list', label: 'List' },
      { value: 'cards', label: 'Cards' }
    ]);
    html += '<div id="repos-container">';
    repos.forEach(function(repo, i) {
      html += '<div class="repo-entry">';
      html += '<div class="repo-entry-header">';
      html += '<span class="repo-entry-title">Repository ' + (i + 1) + '</span>';
      html += '<button class="repo-entry-delete" data-action="delete-repo" data-repo-index="' + i + '">✕</button>';
      html += '</div>';
      html += '<div class="form-group"><label class="form-label">Name</label><input class="form-input" data-prop="repos.' + i + '.name" value="' + esc(repo.name || '') + '" placeholder="awesome-project"></div>';
      html += '<div class="form-group"><label class="form-label">Description</label><input class="form-input" data-prop="repos.' + i + '.desc" value="' + esc(repo.desc || '') + '" placeholder="A short description..."></div>';
      html += '<div class="form-group"><label class="form-label">URL</label><input class="form-input" data-prop="repos.' + i + '.url" value="' + esc(repo.url || '') + '" placeholder="https://github.com/user/repo"></div>';
      html += '<div class="form-row"><div class="form-group"><label class="form-label">Language</label><input class="form-input" data-prop="repos.' + i + '.language" value="' + esc(repo.language || '') + '" placeholder="JavaScript"></div>';
      html += '<div class="form-group"><label class="form-label">Stars</label><input class="form-input" data-prop="repos.' + i + '.stars" value="' + esc(repo.stars || '') + '" placeholder="42"></div></div>';
      html += '</div>';
    });
    html += '</div>';
    html += '<button class="btn btn-secondary" data-action="add-repo" style="width:100%;margin-top:4px">+ Add Repository</button>';
    html += deleteButton();
    return html;
  },
  renderPreview: function(config) {
    var repos = config.repos || [];
    if (repos.length === 0) return '<strong>📌 Repository Showcase</strong><br><span style="color:var(--text-muted)">No repos added</span>';
    return '<strong>📌 Pinned Repos</strong><br><span style="color:var(--text-muted)">' + repos.length + ' repos: ' + esc(repos.slice(0, 3).map(function(r) { return r.name || '...'; }).join(', ')) + (repos.length > 3 ? '...' : '') + '</span>';
  },
  getMarkdown: function(config) {
    var repos = config.repos || [];
    if (repos.length === 0) return '';
    var md = '## 📌 Pinned Repositories\n\n';
    repos.forEach(function(repo) {
      if (config.style === 'cards') {
        md += '### [' + (repo.name || 'repo') + '](' + (repo.url || '#') + ')\n';
        if (repo.desc) md += repo.desc + '\n\n';
        if (repo.language) md += '![Language](https://img.shields.io/badge/' + encodeURIComponent(repo.language) + '-blue?style=flat) ';
        if (repo.stars) md += '![Stars](https://img.shields.io/badge/⭐_' + repo.stars + '-yellow?style=flat)';
        md += '\n\n';
      } else {
        md += '- [**' + (repo.name || 'repo') + '**](' + (repo.url || '#') + ')';
        if (repo.desc) md += ' — ' + repo.desc;
        if (repo.language || repo.stars) {
          md += '\n  ';
          if (repo.language) md += '![' + repo.language + '](https://img.shields.io/badge/' + encodeURIComponent(repo.language) + '-blue?style=flat) ';
          if (repo.stars) md += '![Stars](https://img.shields.io/badge/⭐_' + repo.stars + '-yellow?style=flat) ';
        }
        md += '\n';
      }
    });
    return md + '\n';
  }
};
