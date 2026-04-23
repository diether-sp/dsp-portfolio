import { Component } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

interface SkillCategory {
  title: string;
  highlight: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Languages & APIs',
      highlight: 'Core building blocks',
      items: ['Java', 'REST', 'SQL', 'PostgresQL', 'TypeScript']
    },
    {
      title: 'Frameworks & Platforms',
      highlight: 'Backend expertise',
      items: ['Spring Boot', 'Spring Security', 'Keycloak', 'Hibernate', 'Angular', 'Node.js']
    },
    {
      title: 'Infrastructure & Tools',
      highlight: 'Production-ready delivery',
      items: ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Agile']
    }
  ];
}
