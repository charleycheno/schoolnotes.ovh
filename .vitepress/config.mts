import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "schoolnotes.ovh",
  description: "Een website waar ik aantekeningen maak van belangrijke examenstof.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lessen', link: '/lessen' },
      { text: 'Samenvattingen', link: '/samenvattingen' },
    ],

    sidebar: [
      {
        text: 'Lessen',
        items: [
          { text: 'Scheikunde', link: '/scheikunde' },
          { text: 'Natuurkunde', link: '/natuurkunde' },
        ]
      },
      {
        text: 'Samenvattingen',
        items: [
          { text: 'Scheikunde', link: '/scheikunde' },
          { text: 'Natuurkunde', link: '/natuurkunde' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/charleychen18' },
      { icon: 'github', link: 'https://github.com/charleycheno' }
    ]
  }
})
