import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;


  // Babel
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  // Позволяет импортировать svg
  // import logo from "/shared/assets/icons/logo"
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  // Позволяет импортировать файлы/картинки
  // import heroBg from... <img src=heroBg/>
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  // Важен порядок лоадеров
  // Для работы с scss/css
  const cssLoader = buildCssLoader(isDev)
  // Для работы с ts
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  //   Обратить внимание - порядок лоадеров имеет значение
  return [
    babelLoader,
    fileLoader,
    svgLoader,
    typescriptLoader,
    cssLoader,
  ];
};
