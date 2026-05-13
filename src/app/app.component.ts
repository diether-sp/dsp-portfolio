import { Component, OnInit, HostListener } from '@angular/core';

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
  showFab = false;

  ngOnInit() {
    this.companies = [...COMPANY_LIST].reverse();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.showFab = window.scrollY > 300;
  }

  get selectedCompany() {
    return this.companies.find((company) => company.id === this.selectedCompanyId);
  }

  onSelectCompany(id: string) {
    if (this.selectedCompanyId === id) {
      this.selectedCompanyId = undefined;
      return;
    }

    this.selectedCompanyId = id;

    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}