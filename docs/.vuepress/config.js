module.exports = {
  theme: 'yuu',
  title: 'OE-O Documentation',
  description: 'Documentation for the OE-O public API',
  themeConfig: {
    logo: 'https://firebasestorage.googleapis.com/v0/b/oe-o-api.appspot.com/o/promotional%2Flogos%2Frounded.png?alt=media',
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: 'Github', link: 'https://github.com/OE-O' }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/getting-started',
          '/guide/api-tokens'
        ]
      },
      {
        title: 'Full Documentation',
        collapsable: false,
        sidebarDepth: 2,
        displayAllHeaders: true
      }
    ]
  }
};
