import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"

export const buildPlugins = (
  paths: BuildPaths
): webpack.WebpackPluginInstance[] => {
  return [
    // генерирует HTML-файлы, вставляет ссылки на бандлы JavaScript
    new HtmlWebpackPlugin({
      template: paths.html,
    }),

    // Показывает прогресс webpack cfg в консоли
    new webpack.ProgressPlugin(),

    // Разбивает css на отдельные css files 
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),

    // При изменениях в css мы будем менять сразу, а не перезагружать стр
    new webpack.HotModuleReplacementPlugin(),

    // Анализ размера bundle
    new BundleAnalyzerPlugin({
      // Автоматически в браузере открываться не будет
      // Но в cmd будет ссылка по типу http://127.0.0.1:8888/
      openAnalyzer: false,
    })
  ];
};
