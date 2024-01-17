import ImageMinimizerPlugin  from 'image-minimizer-webpack-plugin';
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolve";
import { buildDevServer } from "./buildDevServer";


// Function to build webpack configuration based on provided options
export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { isDev, paths, mode } = options;

  return {
    // Set the build mode: development or production (optimizes the code)
    mode: mode,

    // Entry point of the application
    entry: paths.entry,
    
    // Output configuration
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      publicPath: '/', // Public path for assets and fix error for page with lazy load like catalog/:id. If we restart page we got error "HTML MITE TYPE... and cant load file[pagebundle]"
      clean: true, // Clean the output directory before each build
    },

    module: {
      // Rules for processing files beyond JavaScript, such as images, SVG, TypeScript, CSS, etc.
      // buildLoaders returns an array of loaders
      rules: buildLoaders(options),
    },

    // Specify file extensions for which we don't need to provide when importing
    // e.g., "import component from "./component"
    resolve: buildResolvers(options),

    // Plugins configuration
    // buildPlugins function returns an array of plugins
    plugins: buildPlugins(options),

    // Source map configuration for debugging (see documentation for details)
    devtool: isDev ? "inline-source-map" : undefined,

    // DevServer settings
    devServer: isDev ? buildDevServer(options) : undefined,

    optimization: {
      minimize: !isDev,
      minimizer: [
        new ImageMinimizerPlugin({
          
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              // Lossless optimization with custom option
              // Feel free to experiment with options for better result for you
              plugins: [
                ["gifsicle", { interlaced: true }],
                ["jpegtran", { progressive: true }],
                ["optipng", { optimizationLevel: 5 }],
                // Svgo configuration here https://github.com/svg/svgo#configuration
                [
                  "svgo",
                  {
                    plugins: [
                      {
                        name: "preset-default",
                        params: {
                          overrides: {
                            removeViewBox: false,
                            addAttributesToSVGElement: {
                              params: {
                                attributes: [
                                  { xmlns: "http://www.w3.org/2000/svg" },
                                ],
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                ],
              ],
            },
          },
        }),
      ],
    },
  };
};