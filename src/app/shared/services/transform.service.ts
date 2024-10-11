import { Injectable } from '@angular/core';
import { Content, Contents, ItemDetail } from '../models/global.types';

@Injectable({
  providedIn: 'root',
})
export class TransformService {
  transformDetailResponce(response: any): ItemDetail {
    return {
      id: response.id,
      title: response.title || response.name,
      name: response.name || response.title,
      overview: response.overview,
      poster_path: response.poster_path,
      vote_average: response.vote_average,
      vote_count: response.vote_count,
      release_date: response.release_date || response.first_air_date,
      genres: response.genres.map((genre: any) => ({
        id: genre.id,
        name: genre.name,
      })),
      first_air_date: response.first_air_date,
      type: response.type,
      number_of_seasons: response.number_of_seasons,
    };
  }
  transformContentResponse(response: any): Contents {
    return {
      items: response.results.map((item: any) => ({
        id: item.id,
        title: item.title || item.name,
        releaseDate: item.release_date || item.first_air_date,
        posterPath: item.poster_path,
        voteAverage: item.vote_average,
        genres: item.genre_ids.map((genreId: number) => ({
          id: genreId,
          name: '',
        })),
      })),
    } as Contents;
  }
}
