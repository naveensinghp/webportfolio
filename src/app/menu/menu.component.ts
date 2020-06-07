import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  showIcon : boolean = false;

  ngOnInit(): void {
  }

  

}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./menu.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  showIcon : boolean = false;

  ngOnInit(): void {
  }
}