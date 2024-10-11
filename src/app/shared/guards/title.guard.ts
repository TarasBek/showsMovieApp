import { Injectable } from '@angular/core';
import {
  CanActivateChildFn,
  Router,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleRenderer {
  constructor(private titleService: Title) {}

  canActivateChild: CanActivateChildFn = (
    currentRoute: ActivatedRouteSnapshot
  ): boolean => {
    this.titleService.setTitle(currentRoute.data['title']);
    return true;
  };
}
