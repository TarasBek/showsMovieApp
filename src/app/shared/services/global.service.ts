import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Content, Contents, ItemDetail } from '../models/global.types';
import { TransformService } from './transform.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private apiKey = '5fc02e4d4b5937e4eb46d524a499d2f2';

  constructor(
    private http: HttpClient,
    private transformService: TransformService
  ) {}

  getTopRatedContent(path: string): Observable<Contents> {
    return this.http
      .get<any>(
        `https://api.themoviedb.org/3/${path}/top_rated?api_key=${this.apiKey}`
      )
      .pipe(
        map((response) => {
          const slicedResults = response.results.slice(0, 10);

          const transformedResults =
            this.transformService.transformContentResponse({
              results: slicedResults,
            });

          return transformedResults;
        })
      );
  }

  getImage(path: string[]): Observable<string[]> {
    return this.http.get<string[]>(`https://image.tmdb.org/t/p/w500${path}`);
  }
  searchContent(path: string, content: string): Observable<Contents> {
    return this.http
      .get<any>(
        `https://api.themoviedb.org/3/search/${path}?query=${content}&api_key=${this.apiKey}`
      )
      .pipe(
        map((fullShow: any) =>
          this.transformService.transformContentResponse(fullShow)
        )
      );
  }

  openDetail(path: string, id: number): Observable<ItemDetail> {
    return this.http
      .get<ItemDetail>(
        `https://api.themoviedb.org/3/${path}/${id}?api_key=${this.apiKey}`
      )
      .pipe(
        map((fullShow: any) =>
          this.transformService.transformDetailResponce(fullShow)
        )
      );
  }
}
