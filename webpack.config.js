const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    //точка входа
    entry: path.resolve(__dirname, 'Client/src/app.tsx'),

    //точка выхода
    output: {
        path: path.resolve(__dirname, 'Client/dist'),
        filename: "main.js"
    },

    resolve: {
        //чтобы не указывать расширения файлов
        //при подключении через import, require
        extensions: ['.ts', '.tsx', '.js', '.css', '.scss']
    },

    optimization: {
        removeEmptyChunks: true,
        //разбить на основной (js, css...) и подключенные (jquery, bootstrap...)
        splitChunks: {
            chunks: "all",
        },
    },

    module: {
        //правила обработки файлов по карте зависимостей 
        //(import и require в ts, tsx, js; url(), @fonts в css; import, url() в scss)
        rules: [
            //обработка файлов ts, tsx
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },

            //обработка файлов стилей scss и css
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            webpackImporter: false,
                        },
                    },
                ]
            },

            //обработка файлов (шрифты, картинки,...)
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: "file-loader",
                options: {
                    name: "assets/images/[name].[ext]"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    name: "assets/fonts/[name].[ext]"
                }
            },
        ]
    },

    //плагины - набор объектов, у которых вызываются специальные функции
    //для выполнения различных операция над файлов
    plugins: [
        //очищает dist
        new CleanWebpackPlugin({
            //не удалять не обработанные файлы (index.html)
            cleanStaleWebpackAssets: false             
        }),

        //копирует файлы из src в dist 
        //(файлы, которые webpack не обработал, так как они не были подключены)
        new CopyWebpackPlugin([{
            from: "./client/src/assets",
            to: "assets",
            ignore: ["*.css", "*.scss"],
        }]),

        //извлекаем css из конечного js-файла
        new MiniCssExtractPlugin({
            filename: 'style.min.css',
        }),

        //создает новый HTML в dist (или на основе шаблона)
        //и подключит в него js и css
        new HtmlWebpackPlugin({
            favicon: './client/src/assets/favicon.ico',
            template: './client/src/index.html',
        })
    ]
}