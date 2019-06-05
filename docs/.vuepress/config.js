module.exports = {
  title: 'work plan',
  description: 'project for plan and study',
  base: '/workplan/',
  markdown: {
    lineNumber: true,
    externalLinks: {
      default: { target: '_blank', rel: 'noopener noreferrer' }
    }
  },
  themeConfig: {
    // repo: 'workplan/docs',
    docsDir: 'docs',
    // editLinks: true,
    nav: [
      {
        text: 'vue',
        link: '/vue/'
      },
      {
        text: 'react',
        link: '/react/'
      },
      {
        text: 'typescript',
        link: '/typescript/'
      },
      {
        text: 'rxjs',
        link: '/rxjs/'
      },
      {
        text: 'taro',
        link: '/taro/'
      },
      {
        text: 'javascript',
        link: '/javascript/'
      }
    ],
    sidebar: {
      '/vue/': [
        {
          title: 'vue',
          collapsable: false,
          children: ['']
        }
      ],
      '/react/': [
        {
          title: 'react',
          collapsable: false,
          children: ['', 'component', 'typescript','hooks']
        }
      ],
      '/typescript/': [
        {
          title: 'typescript',
          collapsable: false,
          children: ['']
        }
      ],
      '/rxjs/': [
        {
          title: 'rxjs',
          collapsable: false,
          children: ['']
        }
      ],
      '/taro/': [
        {
          title: 'taro',
          collapsable: false,
          children: ['']
        }
      ],
      '/javascript/': [
        {
          title: 'javascript',
          collapsable: false,
          children: [
            '',
            'base',
            'prototype',
            'scope',
            'execution',
            'grammar',
            'htmlandcss',
            'write',
            'computerBase',
            'arithmetic',
            'environment',
            'frame',
            'project',
            'service'
          ]
        }
      ]
    }
  }
}
