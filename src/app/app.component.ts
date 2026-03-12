import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { CompanyComponent } from './company/company.component';
import { COMPANY_LIST } from './company-list';
import { ProjectsComponent } from "./projects/projects.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, CompanyComponent, ProjectsComponent]
})
export class AppComponent {
  companies = COMPANY_LIST.reverse();
  selectedCompanyId?: string;

  get selectedCompany() {
    return this.companies.find((company) => company.id === this.selectedCompanyId);
  }

  onSelectCompany(id: string) {
    this.selectedCompanyId = id;
  }
}
