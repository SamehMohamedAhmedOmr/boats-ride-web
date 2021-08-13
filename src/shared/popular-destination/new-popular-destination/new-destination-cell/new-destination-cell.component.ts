import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-destination-cell',
  templateUrl: './new-destination-cell.component.html',
  styleUrls: ['./new-destination-cell.component.css']
})
export class NewDestinationCellComponent implements OnInit {

  @Input() image: string = '';
  @Input() name: string = '';
  @Input() reviews: number = 0;
  @Input() rate: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
