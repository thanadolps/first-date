import {Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {take, tap} from 'rxjs/operators';
import {Message} from './struct/message';
import {Contractor} from './struct/contractor';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CU INTANIA FIRST DATE 2020';

  message$: Observable<Message>;
  loaded = false;
  loading = false;
  emailSnapShot: string;
  validity = false;


  contractors: Contractor[] = [
    {
      name: '[REDACTED]',
      facebook: '[REDACTED]',
      line: '[REDACTED]',
      facebookLink: '[REDACTED]',
    },
    {
      name: '[REDACTED]',
      facebook: '[REDACTED]',
      line: '[REDACTED]',
      facebookLink: '[REDACTED]',
     }
  ];

  constructor(private db: AngularFireDatabase) {}



  submitEmail(email: string) {
    const emailTransformed = email.replace(/\./g, '□');

    this.loaded = false;

    if (email === '') {return; }

    this.loading = true;

    this.message$ = this.db.object<Message>(emailTransformed).valueChanges().pipe(
      take(1),
      tap({
        next: (val) => {
          this.loaded = true;
          this.loading = false;
          this.emailSnapShot = email;
        },
        error: (err) => {
          console.error(err);
          alert(err);
        }
      })
    );
  }

  updateValidation(emailInput: HTMLInputElement) {
    if (emailInput.value === '') {
      this.validity = false;
      return;
    }

    this.validity = emailInput.checkValidity();
  }
}
