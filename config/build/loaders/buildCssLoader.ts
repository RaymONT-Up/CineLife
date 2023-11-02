import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    use: [
      // miniCss... создает отдельные файлы css а style-loader пишет css в js
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,

      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        // style.module.scss = {settings}
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },

      // Compiles Sass to CSS
      "sass-loader",
    ],
  }
)