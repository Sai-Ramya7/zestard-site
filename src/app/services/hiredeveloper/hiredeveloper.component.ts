import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-hiredeveloper',
  templateUrl: './hiredeveloper.component.html',
  styleUrls: ['./hiredeveloper.component.scss']
})
export class HiredeveloperComponent implements OnInit {

  hireDevelopers: any;
  services: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getHireDevelopers();
  }
  getHireDevelopers() {
    this.service.getHireDeveloper().subscribe((result: any) => {
      this.hireDevelopers = result;
      console.log('hiredevelopers', this.hireDevelopers);
      this.services = result.acf.sl_content_module;
      console.log('services', this.services);
    });
  }

}
