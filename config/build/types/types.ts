export interface BuildPaths {
    entry: string
    html: string
    output: string
    src: string
}

export interface BuildOptions {
    port: number
    paths: BuildPaths
    mode: 'development' | 'production';
    analyzer?: boolean
}