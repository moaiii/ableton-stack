import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'stack-signup',
  templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit{
  myForm: FormGroup;

  onSubmit() {
    console.log(this.myForm);
    this.myForm.reset();
  } // dont have to pass the form from html as its data driven approach

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      artistName: new FormControl('', Validators.required),
      profilePicture: new FormControl(''),
      genre: new FormControl('', Validators.required),
      soundcloudUrl: new FormControl(''),
      dropboxUrl: new FormControl(''),
      websiteUrl: new FormControl(''),
      dateJoined: new FormControl(''),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$')
      ]),
      password: new FormControl('', Validators.required)
    });
  }
}
