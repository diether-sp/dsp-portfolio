import { Component } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { NgClass } from '@angular/common';

interface SkillCategory {
  title: string;
  icon: string;
  cssClass: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardComponent, NgClass],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  selectedCard: string | null = null;

  skillCategories: SkillCategory[] = [
    {
      title: 'Languages & APIs',
      icon: '☕',
      cssClass: 'skills-card--languages',
      items: ['Java', 'REST', 'SQL', 'PostgreSQL', 'TypeScript']
    },
    {
      title: 'Frameworks & Platforms',
      icon: '🧩',
      cssClass: 'skills-card--frameworks',
      items: ['Spring Boot', 'Spring Security', 'Keycloak', 'Hibernate', 'Angular', 'Node.js']
    },
    {
      title: 'Infrastructure & Tools',
      icon: '🐳',
      cssClass: 'skills-card--infrastructure',
      items: ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Agile']
    }
  ];

  onCardTap(title: string) {
    // Toggle off if same card tapped again, otherwise select new card
    this.selectedCard = this.selectedCard === title ? null : title;
  }
}