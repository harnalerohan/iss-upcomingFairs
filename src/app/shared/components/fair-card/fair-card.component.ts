import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUpcomingFairs } from 'src/app/models/upcomingFairs.interface';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
  @Input() upcomingFairs!: IUpcomingFairs[];
  selectedItem!: IUpcomingFairs
  @Output(`emitSelectedCard`) selectedItemEvent: EventEmitter<IUpcomingFairs> = new EventEmitter<IUpcomingFairs>();
  constructor() { }

  ngOnInit(): void {}

  findCard = (cardId: String):void => {
    this.selectedItem = this.upcomingFairs.filter(fair => {
      return fair.fairId == cardId;
    })[0];
    this.selectedItem['backgroundString'] = `linear-gradient(180deg,rgba(226, 226, 226, 0.318),rgba(63, 71, 79, 0.821)), url(${this.selectedItem.bannerUrl})`
    this.selectedItemEvent.emit(this.selectedItem);
  }
}
