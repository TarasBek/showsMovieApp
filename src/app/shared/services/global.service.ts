import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Contents } from '../models/global.types';
import { TransformService } from './transform.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private baseUrl = 'https://picsum.photos/v2/list';

  constructor(
    private http: HttpClient,
    private transformService: TransformService
  ) {}

  getImages(): Observable<Contents> {
    console.log(this.baseUrl);
    return this.http.get<any>(this.baseUrl).pipe(
      map((response) => {
        const transformedResults =
          this.transformService.transformContentResponse({
            results: response,
          });

        return transformedResults;
      })
    );
  }
  getMoreImages(page: number): Observable<Contents> {
    const randomPage = Math.floor(Math.random() * 500) + 1;
    const paginatedUrl = `${this.baseUrl}?page=${randomPage}&limit=5`;
    return this.http.get<any>(paginatedUrl).pipe(
      map((response) => {
        const transformedResults =
          this.transformService.transformContentResponse({
            results: response,
          });

        return transformedResults;
      })
    );
  }
}
