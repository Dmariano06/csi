import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  entity = { name: '', email: '', message: '' ,phone:''};
  @ViewChild('formRef') formRef: NgForm | undefined;

  constructor(private http: HttpClient) {}

    onSubmit() {
      this.http.post('https://csi-backend-service.onrender.com/api/contact', this.entity)
        .subscribe((response) => {
          console.log('Email sent successfully!', response);
  
          this.entity= {
            name: '',
            email: '',
            message: '',
            phone:''
          };
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
      window.alert('Votre message a été envoyé avec succès ! Vous allez recevoir un mail de confirmation dans quelques instants. (Regardez bien vos spams) Nous recontacterons sous 24h pour la confirmation du rendez-vous');
      window.location.reload();
    }
    }
