import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalActions } from './shared/actions/global.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private readonly router: Router) {}
  ngOnInit() {
    this.router.navigate(['/tv']);
    GlobalActions.setSelection({ selection: 'tv' });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
