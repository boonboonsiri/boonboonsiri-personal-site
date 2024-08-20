// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */


const config = {
  title: 'Boon Boonsiri',
  tagline: 'Software Engineer',
  favicon: 'img/favicon.png',

  url: 'https://boonboonsiri.github.io',
  staticDirectories: ['static'],

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/`,

  plugins: ['docusaurus-plugin-sass'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'boonboonsiri', // Usually your GitHub org/user name.
  projectName: 'boonboonsiri.github.io', // Usually your repo name.
  trailingSlash: false,


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:'https://github.com/boonboonsiri/boonboonsiri-personal-site',
          path: 'home',
          routeBasePath: 'photography',
          breadcrumbs: false,

        },
        theme: {
          // customCss: './src/css/custom.css',
          customCss: require.resolve('./src/css/custom.scss'),

        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card

      themeConfig: {
        // other theme configurations...
        metadata: [
          {name: 'description', content: 'A personal site for Boon Boonsiri'},
        ],
      },

      navbar: {
        title: 'Boon Boonsiri',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/favicon.png',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'photographySidebar',
            position: 'left',
            label: 'Photography',
          },
          {to: 'blog', label: 'Blog', position: 'left'}, // or position: 'right'
          // {
          //   href: 'https://github.com/boonboonsiri/boonboonsiri-personal-site',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
    }),
};

export default config;
