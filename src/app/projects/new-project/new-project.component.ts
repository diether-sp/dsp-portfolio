import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.css',
})
export class NewProjectComponent {
  @Input({ required: true }) companyId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private projectsService = inject(ProjectsService);

  // onCancel() {
  //   this.close.emit();
  // }

  // onSubmit() {
  //   this.projectsService.addProject(
  //     {
  //       title: this.enteredTitle,
  //       summary: this.enteredSummary,
  //       date: this.enteredDate,
  //     },
  //     this.companyId
  //   );
  //   this.close.emit();
  // }
}
