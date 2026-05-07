import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name = 'Diether San Pedro';
  tagline = 'Java Spring Boot | REST API | Agile | 8+ Years | Basic Docker, Kubernetes, Angular';
  email = 'diether.sp@gmail.com';
  phoneNumber = '09176953943';
  linkedinUrl = 'https://www.linkedin.com/in/diether-san-pedro-a5677816a/';

  isLightboxOpen = false;

  openLightbox() {
    this.isLightboxOpen = true;
  }

  closeLightbox() {
    this.isLightboxOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEscKey() {
    this.closeLightbox();
  }
}