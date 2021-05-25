declare namespace AllScssNamespace {
  export interface IAllScss {
    "krazy-kat-peakin": string;
    krazyKatPeakin: string;
  }
}

declare const AllScssModule: AllScssNamespace.IAllScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AllScssNamespace.IAllScss;
};

export = AllScssModule;
