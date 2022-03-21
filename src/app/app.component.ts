import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'my-app',
  template: `<div>
                  <router-outlet></router-outlet>
             </div>`
})
export class AppComponent {
  constructor() {
    console.log(environment.production);
  }
}
