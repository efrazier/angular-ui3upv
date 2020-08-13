import { Component,Inject } from '@angular/core';
import { WINDOW } from "./window.service";
import { GoogleTagManagerService } from 'angular-google-tag-manager';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

constructor(@Inject(WINDOW) public window: Window,private gtmService: GoogleTagManagerService,) {
    //console.log(window);
    //window.analyticsTrack();
       
  
  }

  public analyticsTrack(event, pageName, contentName, btnName, dataObject){
    console.log(event, pageName, contentName, btnName, dataObject);
  
   //window.analyticsTrack("event","pagename","contentName","btnName","dataObject");
  }




}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/