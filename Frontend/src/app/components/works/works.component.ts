import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

interface Language {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  languages: Language[];
  githubLink: string;
  demoLink: string;
}

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit {
  projects: Project[] = [];
  maxProjects: number = this.projects.length;
  ngOnInit(): void {
    this.cargarProyectos();
  }
  cargarProyectos(): void {
    fetch('projects.json')
      .then(response => response.json())
      .then(data => {
        this.projects = data;
      })
      .catch(error => {
        console.error('Error al cargar los proyectos:', error);
      });
  }
}
