import { Injectable } from '@angular/core';
import { Content, Contents } from '../models/global.types';

@Injectable({
  providedIn: 'root',
})
export class TransformService {
  transformContentResponse(response: any): Contents {
    return {
      items: response.results.map((item: any) => ({
        id: item.id,
        author: item.author,
        width: item.width,
        height: item.height,
        url: item.url,
        download_url: item.download_url,
      })),
    } as Contents;
  }
}
