import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const observable = of(1, 2, 3);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SignUp';
}
