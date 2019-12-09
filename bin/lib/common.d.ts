/** Which registry to publish to */
export declare enum Registry {
    NPM = 0,
    Github = 1
}
/** Settings that may be determined dynamically. */
export interface Options {
    /**
     * e.g. '../DefinitelyTyped'
     * This is overridden to `cwd` when running the tester, as that is run from within DefinitelyTyped.
     * If undefined, downloads instead.
     */
    readonly definitelyTypedPath: string | undefined;
    /** Whether to show progress bars. Good when running locally, bad when running on travis / azure. */
    readonly progress: boolean;
    /** Disabled on azure since it has problems logging errors from other processes. */
    readonly parseInParallel: boolean;
}
export declare namespace Options {
    /** Options for running locally. */
    const defaults: TesterOptions;
    const azure: Options;
}
export interface TesterOptions extends Options {
    readonly definitelyTypedPath: string;
}
export declare function readDataFile(generatedBy: string, fileName: string): Promise<object>;
/** If a file doesn't exist, warn and tell the step it should have been generated by. */
export declare function readFileAndWarn(generatedBy: string, filePath: string): Promise<object>;
export declare function writeDataFile(filename: string, content: {}, formatted?: boolean): Promise<void>;
export declare function dataFilePath(filename: string): string;
