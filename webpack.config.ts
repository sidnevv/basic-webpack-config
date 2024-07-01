import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/types";

interface Env {
    mode?: 'development' | 'production';
    port?: number;
    analyzer?: boolean;
    platform?: 'mobile' | 'desktop'
}

export default (env: Env) => {
    const paths: BuildPaths = {
        dist: path.resolve(__dirname, "dist"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
        public: path.resolve(__dirname, "public"),
    }

    return buildWebpackConfig({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer ?? false,
        platform: env.platform ?? 'desktop'
    })
}