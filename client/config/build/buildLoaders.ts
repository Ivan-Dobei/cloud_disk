import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';

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

   const styleLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
                  localIdentName: isDev
                     ? '[path][name]--[local]'
                     : '[hash:base64:8]',
               },
            },
         },
         'sass-loader',
      ],
   };

   return [
      babelLoader,
      typescriptLoader,
      styleLoader,
      svgLoader,
      fileLoader,
   ];
}
