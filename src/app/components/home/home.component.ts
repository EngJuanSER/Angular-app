// home.component.ts
import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProjectsComponent } from '../projects/projects.component';
import { CommonModule } from '@angular/common';
import { LenguagesComponent } from '../lenguages/lenguages.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectsComponent,HttpClientModule, CommonModule, LenguagesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  svgContent: SafeHtml | null = null;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.loadSVG();
  }

  loadSVG() {
    this.http.get('face.svg', { responseType: 'text' }).subscribe(
      data => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
      },
      error => {
        console.error('Error al cargar el SVG:', error);
      }
    );
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.svgContent) return;

    const svg: SVGSVGElement | null = this.el.nativeElement.querySelector('svg');
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const maxDistance = 0.8; 

    const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
    const offsetX = Math.cos(angle) * maxDistance;
    const offsetY = Math.sin(angle) * maxDistance;

    const eye1 = svg.querySelector('#eye1 path');
    const eye2 = svg.querySelector('#eye2 path');

    if (eye1 && eye2) {
      this.renderer.setAttribute(eye1, 'transform', `translate(${offsetX*2.2}, ${offsetY*1.6})`);
      this.renderer.setAttribute(eye2, 'transform', `translate(${offsetX*2.5}, ${offsetY*2.3})`);
    }

    // Animation hair
    if (mouseY < rect.top + rect.height / 3 && mouseY > rect.top && mouseX > rect.left && mouseX < rect.right) {
      const hairPaths = Array.from(svg.querySelectorAll('[inkscape\\:label="brillos"] path')).filter(path => path.id !== 'path862');
      hairPaths.forEach(path => {
      const randomX = (Math.random() - 0.1) * -1; 
      const randomY = (Math.random() - 0.1) * 1; 
      const randomRotate = (Math.random() - 0.5) * 0.5; 

      this.renderer.setAttribute(path, 'transform', `translate(${randomX}, ${randomY}) rotate(${randomRotate})`);
      });
    }


    // Animation t-shirt

    if (mouseY > rect.top + (2.4 * rect.height) / 3 && mouseY < rect.bottom && mouseX > rect.left && mouseX < rect.right) {
      const hairPaths = Array.from(svg.querySelectorAll('[inkscape\\:label="sombras"] path')).filter(path => {
      const idNumber = parseInt(path.id.replace('path', ''), 10);
      return idNumber >= 394 && idNumber <= 411;
      });
      hairPaths.forEach(path => {
      const randomX = (Math.random() - 0.1) * -0.4; 
      const randomY = (Math.random() - 0.1) * 0.4; 
      const randomRotate = (Math.random() - 0.5) * 0.4; 

      this.renderer.setAttribute(path, 'transform', `translate(${randomX}, ${randomY}) rotate(${randomRotate})`);
      });
    }

    // Animation glases
    if (mouseY > rect.top + rect.height / 3 && mouseY < rect.top + (1.6 * rect.height) / 3 && mouseX > (1.03*rect.left) && mouseX < (0.92*rect.right)) {
      const sketchPaths = Array.from(svg.querySelectorAll('[inkscape\\:label="boceto"] path')).filter(path => {
      const idNumber = parseInt(path.id.replace('path', ''), 10);
      return idNumber >= 78 && idNumber <= 92;
      });
      sketchPaths.forEach(path => {
      const randomX = (Math.random() - 0.1) * -0.3; 
      const randomY = (Math.random() - 0.1) * 0.3;
      const randomRotate = (Math.random() - 0.5) * 0.2; 

      this.renderer.setAttribute(path, 'transform', `translate(${randomX}, ${randomY}) rotate(${randomRotate})`);
      });
    }

    //Animation mouth
    if (mouseY > rect.top + (1.6 * rect.height) / 3 && mouseY < rect.top + (2.3 * rect.height) / 3 && mouseX > (1.1*rect.left) && mouseX < (0.9*rect.right)) {
      const sketchPaths = Array.from(svg.querySelectorAll('[inkscape\\:label="boceto"] path')).filter(path => {
      const idNumber = parseInt(path.id.replace('path', ''), 10);
      return [71, 73, 74, 75, 76, 77, 114, 115, 130, 180, 181].includes(idNumber);
      });
      sketchPaths.forEach(path => {
      const randomX = (Math.random() - 0.1) * -0.2; 
      const randomY = (Math.random() - 0.1) * 0.2; 
      const randomRotate = (Math.random() - 0.5) * 0.2; 

      this.renderer.setAttribute(path, 'transform', `translate(${randomX}, ${randomY}) rotate(${randomRotate})`);
      });

      const shadowPaths = Array.from(svg.querySelectorAll('[inkscape\\:label="sombras"] path')).filter(path => {
      const idNumber = parseInt(path.id.replace('path', ''), 10);
      return (idNumber >= 364 && idNumber <= 370) || (idNumber >= 385 && idNumber <= 387) || (idNumber >= 491 && idNumber <= 565);
      });
      shadowPaths.forEach(path => {
      const randomX = (Math.random() - 0.1) * -0.2; 
      const randomY = (Math.random() - 0.1) * 0.2; 
      const randomRotate = (Math.random() - 0.5) * 0.2; 

      this.renderer.setAttribute(path, 'transform', `translate(${randomX}, ${randomY}) rotate(${randomRotate})`);
      });
    }

  }

}