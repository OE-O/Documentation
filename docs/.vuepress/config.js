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
        title: 'Guide',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: [
          '/guide/',
          '/guide/getting-started',
          '/guide/api-tokens'
        ]
      },
      {
        title: 'Full Documentation',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        displayAllHeaders: true,
      }
    ]
  }
};
