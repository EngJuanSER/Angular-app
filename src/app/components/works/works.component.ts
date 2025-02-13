import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectCardAppComponent } from '../project-card-app/project-card-app.component';

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
  imports: [CommonModule, ProjectCardComponent, ProjectCardAppComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit {
  projectsweb: Project[] = [];
  projectsapp: Project[] = [];
  
  ngOnInit(): void {
    this.cargarProyectosWeb();
    this.cargarProyectosApp();
  }
  cargarProyectosWeb(): void {
    fetch('projectsweb.json')
      .then(response => response.json())
      .then(data => {
        this.projectsweb = data;
        console.log(this.projectsweb);
      })
      .catch(error => {
        console.error('Error al cargar los proyectos:', error);
      });
  }
  cargarProyectosApp(): void {
    fetch('projectsapp.json')
      .then(response => response.json())
      .then(data => {
        this.projectsapp = data;
        console.log(this.projectsapp);
      })
      .catch(error => {
        console.error('Error al cargar los proyectos:', error);
      });
  }
}
