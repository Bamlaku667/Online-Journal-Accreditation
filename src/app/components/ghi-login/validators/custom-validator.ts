import { AbstractControl } from '@angular/forms';

export class CustomValidator {
  static ValidateEmail(control: AbstractControl) {
    const value = control.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(value)
      ? null
      : {invalidEmail: true};
  }
}
