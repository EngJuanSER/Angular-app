import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Project {
  id: number;
  name: string;
  images: [string];
  description: string;
  githubLink: string;
  demoLink: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() project!: Project;
  isModalOpen = false;
  currentImage = 0;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  nextImage() {
    if (this.currentImage < this.project.images.length - 1) {
      this.currentImage++;
    } else {
      this.currentImage = 0;
    }
  }

  prevImage() {
    if (this.currentImage > 0) {
      this.currentImage--;
    } else {
      this.currentImage = this.project.images.length - 1;
    }
  }
}