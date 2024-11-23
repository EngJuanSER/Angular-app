// home.component.ts
import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule], // Importar HttpClientModule aquí
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

    const maxDistance = 0.8; // Máxima distancia que los ojos pueden moverse

    const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
    const offsetX = Math.cos(angle) * maxDistance;
    const offsetY = Math.sin(angle) * maxDistance;

    const eye1 = svg.querySelector('#eye1 path');
    const eye2 = svg.querySelector('#eye2 path');

    if (eye1 && eye2) {
      this.renderer.setAttribute(eye1, 'transform', `translate(${offsetX*2.2}, ${offsetY*1.6})`);
      this.renderer.setAttribute(eye2, 'transform', `translate(${offsetX*2.5}, ${offsetY*2.3})`);
    }
  }
}