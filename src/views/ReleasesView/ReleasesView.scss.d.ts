declare namespace ReleasesViewScssNamespace {
  export interface IReleasesViewScss {
    list: string;
    "list-item": string;
    listItem: string;
  }
}

declare const ReleasesViewScssModule: ReleasesViewScssNamespace.IReleasesViewScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ReleasesViewScssNamespace.IReleasesViewScss;
};

export = ReleasesViewScssModule;
