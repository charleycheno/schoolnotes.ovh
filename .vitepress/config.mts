import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "School Notes",
  description: "Een website waar ik aantekeningen maak van belangrijke examenstof.",
  head: [["script", { src: "/_vercel/insights/script.js", defer: "true" }]],
  markdown: {
    math: true
  },
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
          { text: 'Les 3', link: '/natuurkunde/les3' },
          { text: 'Les 4', link: '/natuurkunde/les4' },
          { text: 'Les 5', link: '/natuurkunde/les5' },
          { text: 'Les 6', link: '/natuurkunde/les6' },
          { text: 'Les 7', link: '/natuurkunde/les7' },
          { text: 'Les 8', link: '/natuurkunde/les8' },
          { text: 'Les 9', link: '/natuurkunde/les9' },
          { text: 'Les 10', link: '/natuurkunde/les10' },
          { text: 'Les 11', link: '/natuurkunde/les11' },
        ]
      },
      {
        text: 'Scheikunde',
        items: [
          { text: 'Overzicht', link: '/scheikunde/' },
          { text: 'Les 1', link: '/scheikunde/les1' },
          { text: 'Les 2', link: '/scheikunde/les2' },
          { text: 'Les 3', link: '/scheikunde/les3' },
          { text: 'Les 4', link: '/scheikunde/les4' },
          { text: 'Les 5', link: '/scheikunde/les5' },
          { text: 'Les 6', link: '/scheikunde/les6' },
          { text: 'Les 7', link: '/scheikunde/les7' },
          { text: 'Les 8', link: '/scheikunde/les8' },
          { text: 'Les 9', link: '/scheikunde/les9' },
          { text: 'Les 10', link: '/scheikunde/les10' },
        ]
      },
      {
        text: 'Samenvattingen',
        items: [
          { text: 'Overzicht', link: '/samenvattingen/' },
          { text: 'Frans', link: '/samenvattingen/frans' },
          { text: 'Wiskunde', link: '/samenvattingen/wiskunde-b' },
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
