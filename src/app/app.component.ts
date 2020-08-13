import { Component,Inject } from '@angular/core';
import { WINDOW } from "./window.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

constructor(@Inject(WINDOW) public window: Window) {
    //console.log(window);
    //window.analyticsTrack();
  }


}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/