declare namespace MainNavBarScssNamespace {
  export interface IMainNavBarScss {
    block: string;
    link: string;
    "link--active": string;
    linkActive: string;
    list: string;
    "list-item": string;
    listItem: string;
  }
}

declare const MainNavBarScssModule: MainNavBarScssNamespace.IMainNavBarScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MainNavBarScssNamespace.IMainNavBarScss;
};

export = MainNavBarScssModule;
