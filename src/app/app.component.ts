import { Component, OnInit, HostListener } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { CompanyComponent } from './company/company.component';
import { COMPANY_LIST } from './company-list';
import { ProjectsComponent } from "./projects/projects.component";
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsService } from './projects/projects.service';

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
  isDropdownOpen = false;

  constructor(private projectsService: ProjectsService) {}

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

  getProjectCount(companyId: string): number {
    return this.projectsService.getCompanyProjects(companyId).length;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onSelectCompany(id: string) {
    if (this.selectedCompanyId === id) {
      this.selectedCompanyId = undefined;
    } else {
      this.selectedCompanyId = id;
    }

    this.isDropdownOpen = false;

    setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const selector = document.getElementById('mobile-selector');
        if (selector) {
          selector.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 50);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}