import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../config.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {

  contact: any;
  contactForm;
  click = false;
  phoneRegEx = '^[0-9]{10,12}$';

  constructor(private service: ConfigService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.getContact();
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern(this.phoneRegEx)])],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      captcha: new FormControl(),
    });
  }

  getContact() {
    this.service.getContact().subscribe((result: any) => {
      this.contact = result;
      console.log('contact', this.contact);
    });
  }

  clickbtn() {
    this.click = true;
    // if (this.contactForm.status === 'INVALID') {
    //   this.click = false;
    // }
  }
}
