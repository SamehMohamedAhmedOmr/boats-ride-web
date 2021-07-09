import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WaterSport} from '../../../Models/water-sport';
import {WaterSportService} from '../../../core/services/water-sport.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public waterSports : WaterSport [] = [];
  constructor(private waterService:WaterSportService,private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getWaterSports();
  }
  getWaterSports(){
    this.waterService.getWaterSports().subscribe(data =>{
      this.waterSports = data;
      console.log(this.waterSports);
      this.cdr.markForCheck();
    })
  }
}
