import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  name: string;
  images: [string];
  description: string;
  githubLink: string;
  demoLink: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [];
  maxProjects: number = this.projects.length;
  ngOnInit(): void {
    this.cargarProyectos();
  }
  cargarProyectos(): void {
    fetch('fprojects.json')
      .then(response => response.json())
      .then(data => {
        this.projects = data;
        this.maxProjects = this.projects.length;
        console.log('Proyectos cargados:', this.projects);
      })
      .catch(error => {
        console.error('Error al cargar los proyectos:', error);
      });
  }
}
