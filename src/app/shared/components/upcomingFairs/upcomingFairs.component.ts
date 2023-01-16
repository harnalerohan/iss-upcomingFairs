import { Component, Input, OnInit } from '@angular/core';
import { IUpcomingFairs } from 'src/app/models/upcomingFairs.interface';

@Component({
  selector: 'app-upcomingFairs',
  templateUrl: './upcomingFairs.component.html',
  styleUrls: ['././upcomingFairs.component.scss'],
})
export class UpcomingFairs implements OnInit{
  @Input() upcomingFairs!: IUpcomingFairs[];
  selectedItem!: IUpcomingFairs
  backgroundString!: string;
  ngOnInit(){
    this.selectedItem = this.upcomingFairs[0];
    this.backgroundString = `linear-gradient(180deg,rgba(226, 226, 226, 0.318),rgba(63, 71, 79, 0.821)), url(${this.selectedItem.bannerUrl})`
  }

  findCard = (cardId: String):void => {
    this.selectedItem = this.upcomingFairs.filter(fair => {
      return fair.fairId == cardId;
    })[0];
    this.backgroundString = `linear-gradient(180deg,rgba(226, 226, 226, 0.318),rgba(63, 71, 79, 0.821)), url(${this.selectedItem.bannerUrl})`
  }
  constructor() {}
}
