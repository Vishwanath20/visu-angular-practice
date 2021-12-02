import { Component, OnInit, VERSION } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    pass: new FormControl(''),
    cpass: new FormControl('')
  });
  loginForm = new FormGroup({
    lname: new FormControl(''),
    lpass: new FormControl('')
  });
  userData: any = [];
  ngOnInit() {}

  registration(): any {
    console.log('Form Data is::' + this.profileForm.value);
    // let uName = this.profileForm.value.name;
    // let uPass = this.profileForm.value.pass;
    // let uCPass = this.profileForm.value.cpass;
    this.userData.push(this.profileForm.value);
    console.log('userData as Array::' + JSON.stringify(this.userData));
    localStorage.setItem('UserName', JSON.stringify(this.userData));
    console.log('Data stored in local storage');
    console.log('------Start fetching user data ------');
    // let storedData = localStorage.getItem('UserName');

    let formValue = JSON.parse(localStorage.getItem('UserName'));
    console.log(formValue);
    for (let data in formValue) {
      //console.log(data.name)
    }
  }

  login() {
    let uName = this.loginForm.value.lname;
    let uPass = this.loginForm.value.lpass;
    let storedData = localStorage.getItem('UserName');
    console.log('stored data is::' + storedData);
    if (
      uName == this.profileForm.value.name &&
      uPass == this.profileForm.value.pass
    ) {
      alert('Login successfull!!');
    } else {
      alert('Invalide Credientails..');
    }
  }
}
