import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolve";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { isDev, paths, mode } = options;

  return {
    // development || production(оптимизирует код)
    mode: mode,

    // стартовая точка приложения
    entry: paths.entry,
    // выходная точка приложения
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },

    module: {
      // rules предназначен для обработки файлов, которые выходят за рамки js -> по типу png svg ts, css и т.д
      // buildLoaders возвращает массив loaders
      rules: buildLoaders(options),
    },

    // указываем расширения тех файлов для которых при импорте не будем указывать расширение
    // "import component from "./component"
    resolve: buildResolvers(options),

    // плагины
    // Функция buildPlugins возвращает массив плагинов
    plugins: buildPlugins(options),

    // карта исходных кодов для отладки(в доке подробнее)
    devtool: isDev ? "inline-source-map" : undefined,
    // настройки для devServer
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
