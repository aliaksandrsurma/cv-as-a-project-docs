import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const simplePlantUML = require('@akebifiky/remark-simple-plantuml')

import semver from 'semver';
import packageJson from './package.json';


const appVersion = packageJson.version;
const formattedVersion = semver.clean(appVersion);

const config: Config = {
  title: 'CV-as-a-project',
  tagline: 'Software design is cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.alexsurma.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aliaksandrsurma', // Usually your GitHub org/user name.
  projectName: 'cv-as-a-project-docs', // Usually your repo name.

  // recommended for GitHub Pages deployments by Docusaurus documentaton
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [simplePlantUML],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aliaksandrsurma/cv-as-a-project-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'TODO: img/docusaurus-social-card.jpg',
    navbar: {
      title: 'CV AS A PROJECT',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'personalSidebar',
          position: 'left',
          label: 'Solution Architect KB',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {
          href: 'https://github.com/aliaksandrsurma/cv-as-a-project-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style:'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/tutorial/intro',
            },
          ],
        },
        {
          title: 'References',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
            {
              label: 'OpenAPI',
              href: 'https://openapis.org',
            },
            {
              label: 'Spring Boot',
              href: 'https://spring.io/projects/spring-boot/',
            },
          ],
        },
        {
          title: 'CV-as-a-project sources (GitHub)',
          items: [
            {
              label: 'Documentation',
              href: 'https://github.com/aliaksandrsurma/cv-as-a-project-docs',
            },
            {
              label: 'UI',
              href: 'https://github.com/aliaksandrsurma/cv-as-a-project-ui',
            },
            {
              label: 'API',
              href: 'https://github.com/aliaksandrsurma/cv-as-a-project-api',
            },
            {
              label: 'API Spec',
              href: 'https://github.com/aliaksandrsurma/cv-as-a-project-api-spec',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alex Surma. CV-as-a-project-docs v${formattedVersion} <br/> Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        indexBaseUrl: true,
        highlightResult: true,
        languages: ['en'],
        excludeRoutes: ['/docs/tutorial'],
      },
    ]
  ]
};

export default config;
