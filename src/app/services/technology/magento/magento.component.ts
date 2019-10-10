import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-magento',
  templateUrl: './magento.component.html',
  styleUrls: ['./magento.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MagentoComponent implements OnInit {

  magento: any;
  developmentDesc: any;
  developmentService: any;
  developmentProject: any;
  developmentbenefits: any;

  constructor(private service: ConfigService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getMagento();
    this.getService();
  }

  getService() {
    const ser = this.route.snapshot.paramMap.get('title');
    console.log('ser', ser);
    if (ser === 'magento-development') {
      this.getMagento();
    }
    if (ser === 'shopify-development') {
      this.getShopify();
    }
    if (ser === 'woocommerce-development') {
      this.getWoocommerce();
    }
    if (ser === 'wordpress-avatar') {
      this.getWordpress();
    }
    if (ser === 'drupal-avatar') {
      this.getDrupal();
    }
    if (ser === 'react-avatar') {
      this.getReact();
    }
    if (ser === 'angular-avatar') {
      this.getAngular();
    }
  }

  getMagento() {
    this.service.getMagento().subscribe((result: any) => {
      this.magento = result;
      console.log('magento', this.magento);
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

  getShopify() {
    this.service.getShopify().subscribe((result: any) => {
      this.magento = result;
      console.log('magento', this.magento);
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

  getWoocommerce() {
    this.service.getWoocommerce().subscribe((result: any) => {
      this.magento = result;
      console.log('magento', this.magento);
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

  getWordpress() {
    this.service.getWordpress().subscribe((result: any) => {
      this.magento = result;
      console.log('magento', this.magento);
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

  getDrupal() {
    this.service.getDrupal().subscribe((result: any) => {
      this.magento = result;
      console.log('magento', this.magento);
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

  getReact() {
    this.service.getReact().subscribe((result: any) => {
      this.magento = result;
      console.log('magento', this.magento);
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

  getAngular() {
    this.service.getAngular().subscribe((result: any) => {
      this.magento = result;
      console.log('magento', this.magento);
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
