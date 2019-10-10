import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { AboutusComponent } from './company/aboutus/aboutus.component';
import { CareerComponent } from './company/career/career.component';
import { CultureComponent } from './company/culture/culture.component';
import { PartnershipComponent } from './company/partnership/partnership.component';
import { TestimonialsComponent } from './company/testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { KeepHtmlPipe } from './keep-html.pipe';
import { CmsComponent } from './services/cms/cms.component';
import { DigitalMarketingComponent } from './services/digital-marketing/digital-marketing.component';
import { EcommerceComponent } from './services/ecommerce/ecommerce.component';
import { HiredeveloperComponent } from './services/hiredeveloper/hiredeveloper.component';
import { JsframeworksComponent } from './services/jsframeworks/jsframeworks.component';
import { AngularComponent } from './services/technology/angular/angular.component';
import { DrupalComponent } from './services/technology/drupal/drupal.component';
import { MagentoComponent } from './services/technology/magento/magento.component';
import { ReactComponent } from './services/technology/react/react.component';
import { ShopifyComponent } from './services/technology/shopify/shopify.component';
import { WoocommerceComponent } from './services/technology/woocommerce/woocommerce.component';
import { WordpressComponent } from './services/technology/wordpress/wordpress.component';
import { PortfolioComponent } from './work/portfolio/portfolio.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecaptchaDirective } from './recaptcha.directive';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    HomeComponent,
    CmsComponent,
    JsframeworksComponent,
    HiredeveloperComponent,
    PortfolioComponent,
    DigitalMarketingComponent,
    BlogComponent,
    CareerComponent,
    TestimonialsComponent,
    AboutusComponent,
    CultureComponent,
    KeepHtmlPipe,
    PartnershipComponent,
    BlogDetailsComponent,
    ContactComponent,
    MagentoComponent,
    ShopifyComponent,
    WoocommerceComponent,
    WordpressComponent,
    DrupalComponent,
    ReactComponent,
    AngularComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    PageNotFoundComponent,
    RecaptchaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
