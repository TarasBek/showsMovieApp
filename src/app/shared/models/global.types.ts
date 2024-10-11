
export type MediaType = 'movie' | 'tv';

export interface ItemDetail {
  id: number;
  title: string;
  name: string;
  first_air_date: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  type: MediaType;
  number_of_seasons: number;
  genres: { id: number; name: string }[];

}

export interface Content {
  id: number;
  title: string;
  releaseDate:string
  posterPath: string;
  voteAverage:string
  genres: { id: number; name: string }[];

}
export interface Contents {
  items: Content[] | null;
}

