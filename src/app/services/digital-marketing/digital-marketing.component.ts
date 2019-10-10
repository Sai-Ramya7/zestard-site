import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DigitalMarketingComponent implements OnInit {

  digitalMarketing: any;
  developmentDesk: any;
  developmentService: any;
  developmentbenefits: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getDigitalMarketing();
  }
  getDigitalMarketing() {
    this.service.getDigitalMarketing().subscribe((result: any) => {
      this.digitalMarketing = result;
      console.log('digitalMarketing', this.digitalMarketing);
      this.developmentDesk = result.acf.technology_content_modules[0];
      console.log('developmentDesk', this.developmentDesk);
      this.developmentService = result.acf.technology_content_modules[1];
      console.log('developmentService', this.developmentService);
      this.developmentbenefits = result.acf.technology_content_modules[2];
      console.log('developmentbenefits', this.developmentbenefits);
    });
  }

}
