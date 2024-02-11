module.exports = {
    title: 'DataChief Documentation',
    description: 'Documentation for DataChief',
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: 'https://avatars.githubusercontent.com/u/159700595?s=400&u=93dc021c25a05117788aa32f96b46719a70e0f44&v=4' }],
      ['meta', { name: 'og:type', content: 'website' }],
      ['meta', { name: 'og:title', content: 'docs.datachief.co' }],
      ['meta', { name: 'og:description', content: 'DataChief Documentation — Connected to data, anywhere, anytime' }],
      ['meta', { name: 'og:image', content: 'https://avatars.githubusercontent.com/u/159700595?s=400&u=93dc021c25a05117788aa32f96b46719a70e0f44&v=4' }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'twitter:title', content: 'docs.datachief.co' }],
      ['meta', { name: 'twitter:description', content: 'DataChief Documentation — Connected to data, anywhere, anytime' }],
      ['meta', { name: 'twitter:image', content: 'https://avatars.githubusercontent.com/u/159700595?s=400&u=93dc021c25a05117788aa32f96b46719a70e0f44&v=4' }],
      ['meta', { name: 'theme-color', content: '#150910' }]
    ],
    themeConfig: {
      nav: [
        { text: 'Docs', link: '/' },
        { text: 'Website', link: 'https://datachief.co' },
        {
          text: 'Links',
          items: [
            { text: 'Discord', link: '#' },
          ],
        },
        { text: 'GitHub', link: 'https://github.com/datachiefco' },
      ],
      sidebar: [
        {
          title: 'Documentation',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      logo: 'https://avatars.githubusercontent.com/u/159700595?s=400&u=93dc021c25a05117788aa32f96b46719a70e0f44&v=4',
      docsRepo: 'datachiefco/docs',
      docsDir: 'docs',
      editLinks: true,
      editLinkText: 'Help to improve this page on GitHub!'
    }
  }