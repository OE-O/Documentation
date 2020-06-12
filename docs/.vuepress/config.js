module.exports = {
  theme: 'yuu',
  title: 'OE-O Documentation',
  description: 'Documentation for the OE-O public API',
  themeConfig: {
    logo: 'https://firebasestorage.googleapis.com/v0/b/oe-o-api.appspot.com/o/promotional%2Flogos%2Frounded.png?alt=media',
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Reference", link: "/reference/" },
      { text: 'Github', link: 'https://github.com/OE-O' }
    ],
    themeConfig: {
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',   // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            '/guide/',
            '/guide/getting-started',
            '/guide/api-tokens'
          ]
        },
        {
        title: 'Advanced',
        collapsable: false,
        sidebarDepth: 2,
        displayAllHeaders: true
        }
      ],
      '/reference/': [
        {
          title: 'Reference',   // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            '/reference/'
          ]
        }
      ]
    }
  }
};
