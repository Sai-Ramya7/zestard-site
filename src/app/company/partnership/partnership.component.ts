import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit {

  partnership: any;
  offshore: any;
  reseller: any;
  referral: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getPartnership();
  }

  getPartnership() {
    this.service.getPartnership().subscribe((result: any) => {
      this.partnership = result;
      console.log('partnership', this.partnership);
      this.offshore = result.acf.gen_content_modules[0];
      console.log('offshore', this.offshore);
      this.reseller = result.acf.gen_content_modules[1];
      console.log('reseller', this.reseller);
      this.referral = result.acf.gen_content_modules[2];
      console.log('referral', this.referral);
    });
  }
}
