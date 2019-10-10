import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PrivacyPolicyComponent implements OnInit {

  privacy: any[];
  privacyDetails: any[];

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getPrivacy();
    this.getPrivacyDetails();
  }

  getPrivacy() {
    this.service.getPrivacy().subscribe((result: any) => {
      this.privacy = result;
      console.log('privacy', this.privacy);
    });
  }

  getPrivacyDetails() {
    this.service.getPrivacyDetails().subscribe((res: any) => {
      this.privacyDetails = res;
      console.log('privacydetails', this.privacyDetails);
    });
  }

}
