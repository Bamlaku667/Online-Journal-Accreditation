import { Component, OnInit } from '@angular/core';
import { Journal } from '../journal-submission/journal';
import { JournalsService } from '../journal-submission/services/journals.service';

@Component({
  selector: 'app-published-journals',
  templateUrl: './published-journals.component.html',
  styleUrls: ['./published-journals.component.scss'],
})
export class PublishedJournalsComponent implements OnInit {
  constructor(private journalService: JournalsService) {}
 
  journals: Journal[] = []


  ngOnInit(): void {
    this.journalService
      .getJournals()
      .subscribe((data) => (
        this.journals = data));
  }

  selectJournal(journal: Journal) {
    console.log(journal.id);
  }
}
