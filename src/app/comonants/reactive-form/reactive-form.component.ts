import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  myForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  user: any = '';

  onSubmit() {
    this.formSubmitted = false;
    if (this.myForm.valid) {
      this.user = this.myForm.value;
      this.formSubmitted = true;
      console.log('Form submitted successfully:', this.myForm.value);
    } else {
      console.log('Form validation failed');
      Object.keys(this.myForm.controls).forEach(key => {
        const control = this.myForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  onReset() {
    this.myForm.reset();
    this.formSubmitted = false;
  }
}
