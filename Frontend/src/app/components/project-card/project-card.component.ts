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
  demoLink: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
