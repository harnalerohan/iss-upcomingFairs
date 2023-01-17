import { Component, Input, OnInit } from '@angular/core';
import { IUpcomingFairs } from 'src/app/models/upcomingFairs.interface';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
  @Input() selectedItem!:IUpcomingFairs;

  constructor() { }

  ngOnInit(): void {

  }
}
