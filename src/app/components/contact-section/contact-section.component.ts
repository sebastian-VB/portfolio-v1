import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {

  infoContact = [
    {
      urlImg : '../../../assets/icons/logo-gmail.svg',
      urlContact: ''
    },
    {
      urlImg : '../../../assets/icons/logo-whatsapp.svg',
      urlContact: ''
    },
    {
      urlImg : '../../../assets/icons/logo-linkedin.svg',
      urlContact: ''
    },
  ]

}
