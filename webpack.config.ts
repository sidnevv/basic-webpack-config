import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/types";

interface Env {
    mode: 'development' | 'production';
    port: number;
    analyzer?: boolean
}

export default (env: Env) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, "dist"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    }

    const config: webpack.Configuration = buildWebpackConfig({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer
    })

    return config
}