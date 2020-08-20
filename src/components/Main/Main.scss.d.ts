declare namespace MainScssNamespace {
  export interface IMainScss {
    block: string;
  }
}

declare const MainScssModule: MainScssNamespace.IMainScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MainScssNamespace.IMainScss;
};

export = MainScssModule;
