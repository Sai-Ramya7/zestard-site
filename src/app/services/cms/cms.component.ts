import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {

  cmsWebsites: any;
  services: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getCmsWebsites();
  }

  getCmsWebsites() {
    this.service.getCms().subscribe((result: any) => {
      this.cmsWebsites = result;
      console.log('cms', this.cmsWebsites);
      this.services = result.acf.sl_content_module;
      console.log('services', this.services);
    });
  }
}
