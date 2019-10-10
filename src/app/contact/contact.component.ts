import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {

  contact: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    this.service.getContact().subscribe((result: any) => {
      this.contact = result;
      console.log('contact', this.contact);
    });
  }

}
