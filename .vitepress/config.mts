import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "School Notes",
  description: "Een website waar ik aantekeningen maak van belangrijke examenstof.",
  head: [["script", { src: "/_vercel/insights/script.js", defer: "true" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Biologie', link: '/biologie' },
      { text: 'Natuurkunde', link: '/natuurkunde' },
      { text: 'Scheikunde', link: '/scheikunde' },
      { text: 'Samenvattingen', link: '/samenvattingen' },
    ],

    sidebar: [
      {
        text: 'Biologie',
        items: [
          { text: 'Overzicht', link: '/biologie/' },
          { text: 'Autodidactische sessie 1', link: '/biologie/sessie1' },
        ]
      },
      {
        text: 'Natuurkunde',
        items: [
          { text: 'Overzicht', link: '/natuurkunde/' },
          { text: 'Les 1', link: '/natuurkunde/les1' },
          { text: 'Les 2', link: '/natuurkunde/les2' },
        ]
      },
      {
        text: 'Scheikunde',
        items: [
          { text: 'Overzicht', link: '/scheikunde/' },
          { text: 'Les 1', link: '/scheikunde/les1' },
        ]
      },
      {
        text: 'Samenvattingen',
        items: [
          { text: 'Overzicht', link: '/samenvattingen/' },
        ]
      }
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Scientia potentia est.',
      copyright: 'Copyright © Examenjaar 2024-2025 Charley'
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/charleychen18' },
      { icon: 'github', link: 'https://github.com/charleycheno' }
    ]
  }
})
