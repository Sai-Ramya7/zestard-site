import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit {

  culture: any;
  cultureEvents: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getCulture();
    this.getCultureEvents();
  }

  getCulture() {
    this.service.getCulture().subscribe((result: any) => {
      this.culture = result;
      console.log('culture', this.culture);
    });
  }
  getCultureEvents() {
    this.service.getCultureEvents().subscribe((res: any) => {
      this.cultureEvents = res;
      console.log('cultureEvents', this.cultureEvents);
    });
  }
}
