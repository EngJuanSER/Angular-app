import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Language {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  image: string
  languages: Language[];
  githubLink: string;
}

@Component({
  selector: 'app-project-card-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card-app.component.html',
  styleUrl: './project-card-app.component.css'
})
export class ProjectCardAppComponent {
  @Input() project!: Project;
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
