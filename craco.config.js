const CracoAlias = require("craco-alias");
const CracoLessPlugin = require('craco-less')
const CracoAntDesignPlugin = require('@mrbatman/craco-antd')


module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: "./src",
        /* tsConfigPath should point to the file where "baseUrl" and "paths" 
        are specified*/
        tsConfigPath: "./tsconfig.path.json"
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@font-family': 'Roboto, sans-serif',
              '@primary-color': '#0055CC',
              '@text-color': '#000000',
              '@normal-color': '#D5DCE0',
              '@info-color': '@primary-color',
              '@success-color': '#8BC34A',
              '@processing-color': '@primary-color',
              '@error-color': '#F89191',
              '@warning-color': '#FFAA00',
              // '@icon-color': '#A1A1A1',
              '@border-color-base': '#D5DCE0',
              '@select-item-selected-bg': '#F6F8F9',
              '@disabled-bg': '#F6F6F9',
              '@item-hover-bg': '#EBEDF0',
              '@item-active-bg': '#EBEDF0',
              '@border-radius-base': '4px',
              '@table-selected-row-bg': '#ebedf0',
              '@table-row-hover-bg': '#f6f8f9',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    { plugin: CracoAntDesignPlugin }
  ]
};