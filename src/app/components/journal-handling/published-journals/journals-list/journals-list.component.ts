import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Journal } from '../../journal-submission/journal';

@Component({
  selector: 'app-journals-list',
  templateUrl: './journals-list.component.html',
  styleUrls: ['./journals-list.component.scss']
})
export class JournalsListComponent {
  @Input() journals: Journal[] = []
  @Output() selectedJournal = new EventEmitter<Journal>();

  selectJournal(journal: Journal) {
    this.selectedJournal.emit(journal)
  }

}
