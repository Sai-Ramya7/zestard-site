import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {

  ecommerceDetails: any;
  services: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getEcommerce();
  }

  getEcommerce() {
    this.service.getEcommerce().subscribe((result: any) => {
      this.ecommerceDetails = result;
      console.log('ecommerce', this.ecommerceDetails);
      this.services = result.acf.sl_content_module;
      console.log('services', this.services);
    });
  }
}
