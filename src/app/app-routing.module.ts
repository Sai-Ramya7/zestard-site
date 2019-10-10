import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { AboutusComponent } from './company/aboutus/aboutus.component';
import { CareerComponent } from './company/career/career.component';
import { CultureComponent } from './company/culture/culture.component';
import { PartnershipComponent } from './company/partnership/partnership.component';
import { TestimonialsComponent } from './company/testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CmsComponent } from './services/cms/cms.component';
import { DigitalMarketingComponent } from './services/digital-marketing/digital-marketing.component';
import { EcommerceComponent } from './services/ecommerce/ecommerce.component';
import { HiredeveloperComponent } from './services/hiredeveloper/hiredeveloper.component';
import { JsframeworksComponent } from './services/jsframeworks/jsframeworks.component';
import { MagentoComponent } from './services/technology/magento/magento.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PortfolioComponent } from './work/portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company/about-us', component: AboutusComponent },
  { path: 'company/culture', component: CultureComponent },
  { path: 'company/career', component: CareerComponent },
  { path: 'company/testimonials', component: TestimonialsComponent },
  { path: 'company/partnership', component: PartnershipComponent },
  { path: 'services/ecommerce-development', component: EcommerceComponent },
  { path: 'services/cms-website-development', component: CmsComponent },
  { path: 'services/javascript-framework', component: JsframeworksComponent },
  { path: 'services/hire-dedicated-developer', component: HiredeveloperComponent },
  { path: 'services/digital-marketing', component: DigitalMarketingComponent },
  { path: 'services/Digital Marketing', component: DigitalMarketingComponent },
  { path: 'services/:title', component: MagentoComponent },
  { path: 'portfolio/all-portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
