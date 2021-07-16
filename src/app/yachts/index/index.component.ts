import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Yacht} from '../../../Models/yacht';
import {YachtService} from '../../../core/services/yacht.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public yachts: Yacht [] = [];

  constructor(private yachtService: YachtService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getYachts();
  }

  getYachts() {
    this.yachtService.getYachts().subscribe(data => {
      this.yachts = data;
      this.cdr.markForCheck();
    });
  }

}
