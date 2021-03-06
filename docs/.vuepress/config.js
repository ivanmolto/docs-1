module.exports = {
  title: "Platform Docs", // 🎉
  description: "Docs",
  themeConfig: {
    nav: [{ text: "ujomusic.com", link: "https://ujomusic.com" }],
    sidebar: [
      {
        title: "Introduction",
        collapsable: false,
        children: ["/"]
      },
      {
        title: "Ujo Portal",
        collapsable: false,
        children: [
          "/getting-started/",
          "/collectibles/",
          "/licensing/",
          "/ip/",
          "/registry/",
          "/oracle/"
        ]
      },
      {
        title: "Charts",
        collapsable: false,
        children: [
          "/charts/",
        ]
      },
      {
        title: "Smart-Licensing",
        collapsable: false,
        children: [
          "/smart-licensing/",
        ]
      },
      {
        title: "Web3",
        collapsable: false,
        children: ["/truffle/", "/infura/", "/metamask/", "/uport/", "/ipfs/"]
      }
      // add new top level sections here...
    ],
    algolia: {
      apiKey: "<todo>",
      indexName: "Ujo"
    },
    logo: "/gradient.png",
    repo: "ujoteam/docs",
    docsDir: "docs",
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page"
  }
};
