import { Component } from '@angular/core';

import { products } from '../products';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  analyticsTrack(event, pageName, contentName, btnName, dataObject){
    console.log(event, pageName, contentName, btnName, dataObject);
    /this.analyticsTrack("event","pagename","contentName","btnName","dataObject");
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/