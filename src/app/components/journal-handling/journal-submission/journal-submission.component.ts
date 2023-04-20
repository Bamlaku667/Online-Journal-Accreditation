import { Component, OnInit } from '@angular/core';
import { Journal } from './journal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-journal-submission',
  templateUrl: './journal-submission.component.html',
  styleUrls: ['./journal-submission.component.scss']
})

export class JournalSubmissionComponent implements OnInit{

submission_form!: FormGroup;
constructor(private fb: FormBuilder) {

}

ngOnInit(): void {
  this.submission_form = this.fb.group({
    journal_title: ['', Validators.required],
    journal_description: ['', Validators.required, Validators.minLength(5)],
    letter_of_app: [''],
    journal_file: [''],
    contributor_info: this.fb.group({
      name: [''],
      email: [''],
      department: [''],
      institute: [''],
      img_url: ['']

    })
  }) 
    
}

onSubmit() {
  console.log(this.submission_form.value);
}


}
