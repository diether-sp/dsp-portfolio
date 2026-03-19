import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proj-desc',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './proj-desc.component.html',
  styleUrl: './proj-desc.component.css'
})
export class ProjDescComponent {
  @Input() isOpen = false;
  @Input() title!: string; 
  @Input() desc!: string; 
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  handleEscape() {
    this.closeModal();
  }

  // Click on backdrop or close button
  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }
}
