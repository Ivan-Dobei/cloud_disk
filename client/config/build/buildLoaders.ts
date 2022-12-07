import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {cssLoader} from './loaders/cssLoader';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
   const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   };

   const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
   };

   const fileLoader = {
      test: /\.(png|jpe?g|gif)$/i,
      loader: 'file-loader',
      options: {
         name: '[path][name].[ext]',
      },
   };

   const babelLoader = {
      test: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
      use: {
         loader: 'babel-loader',
         options: {
            presets: ['@babel/preset-env'],
         },
      },
   };

   const styleLoader = cssLoader(isDev);

   return [
      babelLoader,
      typescriptLoader,
      styleLoader,
      svgLoader,
      fileLoader,
   ];
}
