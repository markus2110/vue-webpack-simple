const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = function(env, args){

    const IS_PRODUCTION = (env==="prod");

    

    var config = {

        mode: 'development',

        entry: {
            app : './src/main.js',

            vue : [
                'vue',
                'vuex',
                'vue-router',
                'vue-resource',
            ]
        },

        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: 'dist/',
            filename: 'js/[name].js',
            chunkFilename: 'js/[name].js',
            jsonpFunction : "_mjp_"
        },

        plugins: [
            new VueLoaderPlugin()
        ],


        module: {
            rules: [

                // VUE
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                        }
                        // other vue-loader options go here
                    }
                },

                {{#less}}
                // LESS
                {
                    test: /\.less$/,
                    use: [{
                            loader: "style-loader" // creates style nodes from JS strings
                        }, {
                            loader: "css-loader" // translates CSS into CommonJS
                        }, {
                            loader: "less-loader" // compiles Less to CSS
                        }]
                },
                {{/less}}

                
                // FileLoader for Fonts
                {
                    test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|gif)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }                    
                },

                // this will apply to both plain `.css` files
                // AND `<style>` blocks in `.vue` files                
                {
                    test: /\.css$/,
                    use: [
                      'vue-style-loader',
                      'css-loader'
                    ]
                }                

            ]
        },

        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                "~" : path.resolve(__dirname, 'src/'),
                "@" : path.resolve(__dirname, 'src/')
            }
      },


        devServer: {
            historyApiFallback: true,
            noInfo: false,
            overlay: true
        },

        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },          

        performance: {
            hints: false
        },


        devtool: '#eval-source-map'
    }


    if(IS_PRODUCTION){
        config.mode =       'production';
        config.devtool =    '#source-map';
    };


    return config;
}