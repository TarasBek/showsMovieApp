export type ApplicationPart = 'photos' | 'favorites';


export interface Content {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface Contents {
  items: Content[] | null;
}
