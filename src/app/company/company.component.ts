import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Company } from './company.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
    selector: 'app-company',
    standalone: true,
    templateUrl: './company.component.html',
    styleUrl: './company.component.css',
    imports: [CardComponent]
})
export class CompanyComponent {
  @Input({ required: true }) company!: Company;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '/assets/company/' + this.company.avatar;
  }

  onSelectCompany() {
    this.select.emit(this.company.id);
  }
}
