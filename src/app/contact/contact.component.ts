import { Component, OnInit } from '@angular/core';
//import { PortfolioService } from '../portfolio.service';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  siteKey: any;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.siteKey = '6LeRQvkcAAAAANQ9kIKBhXsJsJ5cCDw7TKX6Q_39';
  }

  ngOnInit(): void {}

  newContact(postData: {
    email: string;
    name: string;
    message: string;
    captcha: string;
  }) {
    this.http
      .post(
        ' https://myportfolio-35e7b-default-rtdb.firebaseio.com/contact.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
    // this.contact = new Contact();
  }
  // save() {
  //   this.portfolioService.createContact(this.contact);
  //   this.contact = new Contact('sushma@gmail.com', 'sushma', 'Hi');
  // }
  // onSubmit() {
  //   this.submitted = true;
  //   // this.save();
  // }
}
