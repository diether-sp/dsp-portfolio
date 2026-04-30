import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { CompanyComponent } from './company/company.component';
import { COMPANY_LIST } from './company-list';
import { ProjectsComponent } from "./projects/projects.component";
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, SkillsComponent, CompanyComponent, ProjectsComponent, AboutMeComponent, FooterComponent]
})
export class AppComponent implements OnInit {
  companies: typeof COMPANY_LIST = [];
  selectedCompanyId?: string;

  ngOnInit() {
    this.companies = [...COMPANY_LIST].reverse();
    // if (this.companies.length > 0) {
    //   this.selectedCompanyId = this.companies[0].id;
    // }
  }

  get selectedCompany() {
    return this.companies.find((company) => company.id === this.selectedCompanyId);
  }

  onSelectCompany(id: string) {
    // Clicking the active company deselects it (returns to fallback)
    if (this.selectedCompanyId === id) {
      this.selectedCompanyId = undefined;
      return;
    }

    this.selectedCompanyId = id;

    // Scroll to projects section after content updates
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  }
}