import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-jsframeworks',
  templateUrl: './jsframeworks.component.html',
  styleUrls: ['./jsframeworks.component.scss']
})
export class JsframeworksComponent implements OnInit {

  jsFrameworks: any;
  services: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getJsFrameworks();
  }

  getJsFrameworks() {
    this.service.getJsFrameworks().subscribe((result: any) => {
      this.jsFrameworks = result;
      console.log('jsFrameworks', this.jsFrameworks);
      this.services = result.acf.sl_content_module;
      console.log('services', this.services);
    });
  }
}
