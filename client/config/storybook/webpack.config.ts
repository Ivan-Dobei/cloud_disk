import path from 'path';
import webpack, {RuleSetRule} from 'webpack';
import {cssLoader} from '../build/loaders/cssLoader';
import {BuildPaths} from '../build/types/config';

export default ({config}: {config: webpack.Configuration}) => {

   const paths: BuildPaths = {
      entry: '',
      html: '',
      build: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
   };

   config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
      if(/svg/.test(rule.test as string)) {
         return {...rule, exclude: /\.svg$/i};
      }

      return rule;
   });

   config!.module!.rules!.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
   });

   config.module.rules.push(cssLoader(true));
   config.resolve.extensions.push('.tsx', '.ts', '.js');
   config.resolve.modules.push(paths.src, 'node_modules');

   return config;
};
