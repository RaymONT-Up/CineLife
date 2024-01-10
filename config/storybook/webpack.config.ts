import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  // Добавление пути к исходным файлам в список модулей, которые Webpack будет искать при разрешении зависимостей
  config.resolve.modules.push(paths.src);

  // Добавление расширений файлов .ts и .tsx в список расширений, которые Webpack будет обрабатывать
  config.resolve.extensions.push('.ts', '.tsx');

  // Для обработки файлов SVG с использованием @svgr/webpack
  // Исключаем стандартный обработчик для SVG и добавляем новый
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/,
    exclude: /swiper\.css$/,
    use: ['@svgr/webpack'],
  });

  //   Добавляем css loader
  config.module.rules.push(buildCssLoader(true));

  config.module.rules.push({
    test: /swiper\.css$/,
    use: ['style-loader', 'sass-loader'],
  });

  config.plugins.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
    }),
  );
  return config;
};
