import { Component } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  show = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      lastName: fb.control('', [Validators.required], [])
    });
  }
  save(form: NgForm) {
    console.log('save', form.value);
  }

  save2() {
    console.log('save 2', this.myForm.value);
  }
}
