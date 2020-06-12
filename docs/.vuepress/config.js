module.exports = {
  title: 'OE-O Documentation',
  description: 'Documentation for the OE-O public API',
  themeConfig: {
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
        title: 'Advanced',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        displayAllHeaders: true,
      }
    ]
  }
};
