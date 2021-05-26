declare namespace ReleaseCardScssNamespace {
  export interface IReleaseCardScss {
    block: string;
    header: string;
    image: string;
  }
}

declare const ReleaseCardScssModule: ReleaseCardScssNamespace.IReleaseCardScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ReleaseCardScssNamespace.IReleaseCardScss;
};

export = ReleaseCardScssModule;
