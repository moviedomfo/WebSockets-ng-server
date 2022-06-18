const path = require("path");
module.exports = {
  target : 'node',
  mode: "production",
  entry: {
    app: path.resolve(__dirname, "src", "server.js"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
     clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      // {
      //   //test: /\.(ts|tsx)$/i, // que archivos vas a soportar . Expresion regular
      //   test: /\.tsx?$/,
      //   exclude: /node_modules/,
      //   use: "ts-loader",
      // },
    ],
  },
  resolve :{
    fallback: { 
      "path": false
    }
   
  },
  
  
  externals: {
    bufferutil: "bufferutil",
    "utf-8-validate": "utf-8-validate",
  }
};
