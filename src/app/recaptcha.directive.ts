import { Directive, Input } from '@angular/core';


export interface ReCaptchaConfig {
  theme?: 'dark' | 'light';
  type?: 'audio' | 'image';
  size?: 'compact' | 'normal';
  tabindex?: number;
}


@Directive({
  selector: '[appRecaptcha]'
})
export class RecaptchaDirective {

  @Input() key: string;
  @Input() config: ReCaptchaConfig = {};
  @Input() lang: string;

  constructor() { }

}




// https://netbasal.com/how-to-integrate-recaptcha-in-your-angular-forms-400c43344d5c
