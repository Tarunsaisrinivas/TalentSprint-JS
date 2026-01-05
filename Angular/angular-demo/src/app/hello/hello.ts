import { Component, forwardRef } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class hello {}

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './hello.css',
})
export class header {}

@Component({
  selector: 'app-binding',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './binding.html',
  styleUrl: './hello.css',
})
export class binding {
  userval = '';
  submittedValue: string | null = null;

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.submittedValue = this.userval;
  }

  showvalue(value: string) {
    this.userval = value;
  }
}
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './hello.css',
})
export class footer {}
