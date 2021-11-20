//引入包
const path = require("path");

//webpack所有配置信息都写在此
module.exports = {

    //入口文件
    entry: "./src/index.ts",
    //指定打包文件输出路径
    output: {
        //指定输出的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后的文件名
        filename: "bundle.js",

    },
    //webpack打包时候用到的module  不同模块需要的规则和loader
    module: {

        //指定加载的规则
        rules: [{ //对哪些文件生效（正则表示匹配的文件）
            test: /\.ts$/,
            use: 'ts-loader',
            //要排除的文件
            exclude: /node-modules/,

        }]
    }

}