import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack, {HotModuleReplacementPlugin} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

   return [
      new HTMLWebpackPlugin({
         template: paths.html,
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin(),
      new HotModuleReplacementPlugin(),
   ];
}
