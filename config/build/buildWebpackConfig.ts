import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options
    const isDev = mode === 'development';

    return {
        mode: mode ?? "development",
        entry: paths.entry,
        output:
            {
                path: paths.dist,
                filename: "[name].[contenthash].js",
                clean: true
            },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}