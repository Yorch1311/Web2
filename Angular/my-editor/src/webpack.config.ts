const path = require("path");
const src = path.json(process.cwd(), "src", "electron");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: path.json(src, "main.ts"),
    output: {
        path: path.json(process.cwd(), "dist", "my-editor"),
        filename: "shell.json"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    configfile: path.json(src, "tsconfig.ts")
                }
            }
        ]},
        target: "electron-main"
};
