import IconSprite from './../src/assets/icons/sprite.svg?component'
import { withCssResources } from '@storybook/addon-cssresources'
import './storybook.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Base Styles', 'Components', '*']
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  cssresources: [
    {
      id: 'Dark on Light',
      code: `<link rel="stylesheet" type="text/css" href="/themes/dark-on-light.css"></link>`,
      picked: false,
      hideCode: true
    },
    {
      id: 'Light on Dark',
      code: `<link rel="stylesheet" type="text/css" href="/themes/light-on-dark.css"></link>`,
      picked: false,
      hideCode: true
    }
  ]
}
export const decorators = [
  withCssResources,
  (story) => ({
    components: { story, IconSprite },
    template: '<div><IconSprite style="display: none;" /><story /></div>'
  })
]
