import { Component } from '@angular/core';
import { Test } from './models/test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-console';
  test: Test;

  constructor() {
    this.test = new Test();
  }
}
