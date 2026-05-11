import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerAiModelsData, footerCompanyLinksData, footerIntegrationsData, footerLanguagesData, footerResourcesData, footerSocialLinksData } from '../../data';

@Component({
  selector: 'saas-v5-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Footer {
  footerCompanyLinksData = footerCompanyLinksData;
  footerSocialLinksData = footerSocialLinksData;
  footerLanguagesData = footerLanguagesData;
  footerAiModelsData = footerAiModelsData;
  footerIntegrationsData = footerIntegrationsData;
  footerResourcesData = footerResourcesData;
}
