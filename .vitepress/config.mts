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
          { text: 'Overzicht', link: '/lessen/' },
        ]
      },
      {
        text: 'Natuurkunde',
        items: [
          { text: 'Overzicht', link: '/lessen/natuurkunde/' },
          { text: 'Les 2', link: '/lessen/natuurkunde/les2' },
        ]
      },
      {
        text: 'Scheikunde',
        items: [
          { text: 'Overzicht', link: '/lessen/scheikunde/' },
          { text: 'Les 1', link: '/lessen/scheikunde/les1' },
        ]
      },
      {
        text: 'Samenvattingen',
        items: [
          { text: 'Overzicht', link: '/samenvattingen/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/charleychen18' },
      { icon: 'github', link: 'https://github.com/charleycheno' }
    ]
  }
})
