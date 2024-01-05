import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  entity = { name: '', email: '', message: '' ,phone:'',firstname:'',company:'', site:''};
  @ViewChild('formRef') formRef: NgForm | undefined;

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.formRef?.valid) {
      this.http.post('https://csi-backend-service.onrender.com/api/contact', this.entity)
        .subscribe(
          (response) => {
            console.log('Email sent successfully!', response);
  
            this.entity = {
              name: '',
              firstname:'',
              email: '',
              message: '',
              phone: '',
              company:'',
              site:''
            };
          },
          (error) => {
            console.error('Error sending email:', error);
          }
        );
  
      window.alert('Votre message a été envoyé avec succès ! Vous allez recevoir un mail de confirmation dans quelques instants. (Regardez bien vos spams) Nous recontacterons sous 24h pour la confirmation du rendez-vous');
      window.location.reload();
    } else {
      window.alert('Veuillez remplir correctement tous les champs du formulaire.');
    }
  }
  ngOnInit() {
    
    const input = document.querySelector("#phone");
    if (input) {
      intlTelInput(input, {
        initialCountry: 'fr',
        separateDialCode: true,
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js'
      });
    }
  
  
  }
  
     
    }
