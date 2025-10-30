import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-essentials',
    '@storybook/addon-interactions',
    "storybook-dark-mode",
    "@storybook/addon-a11y",
  ],
  framework: {
    name : '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: false,
  },

  typescript: {
    reactDocgen: false,
  },

  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });
    config.resolve!.extensions!.push('.ts', '.tsx');

    if (config.plugins) {
      config.plugins = config.plugins.filter(
        (plugin) =>
          plugin &&
          (plugin as any)?.constructor?.name !== 'ReactDocgenPlugin'
      );
    }

    return config;
  },
};
export default config;
