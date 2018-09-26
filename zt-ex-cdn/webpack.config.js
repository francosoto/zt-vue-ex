const path = require('path');
//const webpack = require('webpack');

module.exports = {
   resolve: {
       alias: {
           'vue$': 'vue/dist/vue.js'
       }
   },
   entry: './src/index.js',
   // entry: {
   //     configLicencias : './dist/configuracion.licencias.js',
   //     solicitarLicencia : './dist/solicitar.licencia.js',
   //     gestionLicencias : './dist/gestion.licencias.js'
   // },
   output: {
       path: path.resolve(__dirname, 'dist'),
       filename: '[name].bundle.js'
   },
   module:{
       rules:[
           {
               test:/\.css$/,
               use:['style-loader','css-loader']
           }
      ]
   },
//    plugins: [
//        new webpack.ProvidePlugin({
//          Vue: ['vue/dist/vue.js', 'default'],
//          jQuery: 'jquery',
//          'window.jQuery': 'jquery',
//          $: 'jquery',
//          moment: 'moment'
//        }),
//    ]
};