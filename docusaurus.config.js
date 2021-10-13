const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  // 网站标题
  title: '卢先生',
  // 网站标语/子标题
  tagline: '卢先生的个人网站',
  // 如果要将网站部署到 https://xxx.github.io/repository-name
  // 应该设置为 https://xxx.github.io
  url: 'https://xxx.com',
  // 如果要将网站部署到 https://xxx.github.io/repository-name
  // /repository-name/
  baseUrl: '/',
  // GitHub 用户名或组织
  // organizationName: "username",
  // GitHub 仓库名称
  // projectName: "repository-name",
  // 如果要将网站部署到 GitHub Pages
  // 建议设置成 true 或 false
  // trailingSlash: undefined,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      'zh-cn': {
        label: '中文（中国）',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // 文档侧边栏
          sidebarPath: require.resolve('./sidebars.js'),
          // 文档底部的编辑此页
          editUrl: 'https://github.com/lucodestation/luxiansheng/blob/main/',
        },
        blog: {
          // 显示阅读时间
          showReadingTime: true,
          // 博客底部的编辑此页
          editUrl: 'https://github.com/lucodestation/luxiansheng/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: '卢先生',
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },
      items: [
        // 文档
        {
          type: 'doc',
          // 文档 ID ，必须项。
          // 当点击导航栏上的“文档”时默认显示的页面
          docId: 'document1',
          position: 'left',
          label: '文档',
        },
        // 博客
        { to: '/blog', label: '博客', position: 'left' },
        // 独立页面
        {
          to: '/about',
          label: '关于我们',
          position: 'left',
        },
        {
          href: 'https://github.com/lucodestation/luxiansheng',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '文档1',
              to: '/docs/document1',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lucodestation/luxiansheng',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Powered by <a href="https://docusaurus.io/zh-CN/" target="_blank">Docusaurus</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  // 自定义配置
  customFields: {},
};
