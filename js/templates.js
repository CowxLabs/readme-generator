App.Templates = [
  {
    name: 'Minimal Dev',
    description: 'Clean and simple: title, about, a few skills, and social links',
    sections: [
      { type: 'title', config: { name: '', role: 'Software Developer', alignment: 'center' } },
      { type: 'about', config: { text: 'I\'m a passionate developer who loves building clean, efficient solutions.', imageUrl: '' } },
      { type: 'badges', config: { selectedBadges: ['javascript', 'typescript', 'react', 'nodejs', 'python', 'git', 'vscode', 'docker'], style: 'for-the-badge' } },
      { type: 'divider', config: { style: 'simple' } },
      { type: 'social', config: { twitter: '', linkedin: '', github: '', website: '' } }
    ]
  },
  {
    name: 'Full Stack Developer',
    description: 'Comprehensive profile with stats, badges, trophies, and more',
    sections: [
      { type: 'title', config: { name: '', role: 'Full Stack Developer', alignment: 'center' } },
      { type: 'about', config: { text: 'Full stack developer passionate about creating seamless user experiences and scalable backend systems. I love working with modern web technologies and contributing to open source projects.', imageUrl: '' } },
      { type: 'badges', config: { selectedBadges: ['javascript', 'typescript', 'react', 'nextjs', 'tailwind', 'nodejs', 'express', 'postgres', 'mongodb', 'redis', 'docker', 'aws', 'graphql', 'git', 'githubactions'], style: 'for-the-badge' } },
      { type: 'stats', config: { username: '', theme: 'dark', showIcons: true, countPrivate: false, hideRank: false } },
      { type: 'streak', config: { username: '', theme: 'dark', hideTotal: false, hideCurrent: false } },
      { type: 'toplangs', config: { username: '', theme: 'dark', layout: 'compact', langsCount: 8, hideLangs: '' } },
      { type: 'trophy', config: { username: '', theme: 'darkhub', rows: 2, columns: 4 } },
      { type: 'divider', config: { style: 'rainbow' } },
      { type: 'repos', config: { repos: [], style: 'list' } },
      { type: 'social', config: { twitter: '', linkedin: '', devto: '', website: '', email: '' } }
    ]
  },
  {
    name: 'Student / Junior',
    description: 'Focused on learning journey, skills in progress, and education',
    sections: [
      { type: 'title', config: { name: '', role: 'CS Student & Aspiring Developer', alignment: 'center' } },
      { type: 'about', config: { text: 'Currently pursuing a degree in Computer Science. Passionate about learning new technologies and building projects that solve real-world problems.', imageUrl: '' } },
      { type: 'badges', config: { selectedBadges: ['html5', 'css3', 'javascript', 'python', 'react', 'git', 'vscode', 'figma'], style: 'for-the-badge' } },
      { type: 'stats', config: { username: '', theme: 'gruvbox', showIcons: true, countPrivate: false, hideRank: false } },
      { type: 'streak', config: { username: '', theme: 'gruvbox', hideTotal: false, hideCurrent: false } },
      { type: 'quote', config: { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs', style: 'blockquote' } },
      { type: 'social', config: { twitter: '', linkedin: '', email: '' } }
    ]
  },
  {
    name: 'Open Source Maintainer',
    description: 'Showcase open source contributions, stats, and pinned projects',
    sections: [
      { type: 'title', config: { name: '', role: 'Open Source Enthusiast', alignment: 'center' } },
      { type: 'about', config: { text: 'I love contributing to open source projects and building tools that help other developers. Always looking for interesting projects to collaborate on.', imageUrl: '' } },
      { type: 'badges', config: { selectedBadges: ['rust', 'go', 'python', 'typescript', 'react', 'docker', 'kubernetes', 'linux', 'git', 'github', 'terraform', 'prometheus'], style: 'for-the-badge' } },
      { type: 'stats', config: { username: '', theme: 'tokyonight', showIcons: true, countPrivate: true, hideRank: false } },
      { type: 'streak', config: { username: '', theme: 'tokyonight', hideTotal: false, hideCurrent: false } },
      { type: 'toplangs', config: { username: '', theme: 'tokyonight', layout: 'compact', langsCount: 6, hideLangs: '' } },
      { type: 'trophy', config: { username: '', theme: 'onedark', rows: 2, columns: 4 } },
      { type: 'divider', config: { style: 'gradient' } },
      { type: 'repos', config: { repos: [{ name: 'my-awesome-tool', desc: 'A powerful CLI tool for developers', url: '', language: 'Rust', stars: '120' }, { name: 'dotfiles', desc: 'My personal development environment configs', url: '', language: 'Shell', stars: '45' }], style: 'list' } },
      { type: 'visitor', config: { username: '', label: 'Profile Views', color: '0e75b6', style: 'flat' } },
      { type: 'social', config: { twitter: '', devto: '', mastodon: '' } }
    ]
  },
  {
    name: 'Designer / Creative',
    description: 'Design-focused with visual elements, creative tools, and portfolio links',
    sections: [
      { type: 'title', config: { name: '', role: 'Designer & Creative Developer', alignment: 'center' } },
      { type: 'about', config: { text: 'Design-minded developer who believes great products start with great user experiences. I specialize in crafting beautiful, accessible interfaces.', imageUrl: '' } },
      { type: 'badges', config: { selectedBadges: ['figma', 'react', 'svelte', 'tailwind', 'sass', 'css3', 'html5', 'vue', 'typescript', 'vite', 'nextjs'], style: 'for-the-badge' } },
      { type: 'divider', config: { style: 'rainbow' } },
      { type: 'quote', config: { text: 'Design is not just what it looks like and feels like. Design is how it works.', author: 'Steve Jobs', style: 'callout' } },
      { type: 'divider', config: { style: 'stars' } },
      { type: 'repos', config: { repos: [{ name: 'ui-component-library', desc: 'Accessible, beautiful React components', url: '', language: 'TypeScript', stars: '300' }], style: 'cards' } },
      { type: 'social', config: { twitter: '', linkedin: '', website: '', email: '' } }
    ]
  }
];
