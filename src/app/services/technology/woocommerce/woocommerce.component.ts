import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-woocommerce',
  templateUrl: './woocommerce.component.html',
  styleUrls: ['./woocommerce.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WoocommerceComponent implements OnInit {

  woocommerce: any;
  developmentDesc: any;
  developmentService: any;
  developmentProject: any;
  developmentbenefits: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getWoocommerce();
  }

  getWoocommerce() {
    this.service.getWoocommerce().subscribe((result: any) => {
      this.woocommerce = result;
      console.log('woocommerce', this.woocommerce);
      this.developmentDesc = result.acf.technology_content_modules[0];
      console.log('developmentDesc', this.developmentDesc);
      this.developmentService = result.acf.technology_content_modules[1];
      console.log('developmentService', this.developmentService);
      this.developmentProject = result.acf.technology_content_modules[2];
      console.log('developmentProject', this.developmentProject);
      this.developmentbenefits = result.acf.technology_content_modules[3];
      console.log('developmentbenefits', this.developmentbenefits);
    });
  }
}
