import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  position: TooltipPosition = 'below';
  
  constructor() { }

  ngOnInit(): void {
  }

}
