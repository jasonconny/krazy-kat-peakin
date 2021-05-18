declare namespace ArtistCardScssNamespace {
  export interface IArtistCardScss {
    block: string;
    "block--active": string;
    "block--inactive": string;
    blockActive: string;
    blockInactive: string;
  }
}

declare const ArtistCardScssModule: ArtistCardScssNamespace.IArtistCardScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArtistCardScssNamespace.IArtistCardScss;
};

export = ArtistCardScssModule;
