import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit  {
  ngAfterViewInit() {
    const eyes = document.querySelectorAll('.eye');
    document.addEventListener('mousemove', (event: MouseEvent) => {
      const { clientX, clientY } = event;
      eyes.forEach((eye: any) => {
        const rect = eye.getBoundingClientRect();
        const x = clientX - rect.left - rect.width / 2;
        const y = clientY - rect.top - rect.height / 2;
        eye.style.transform = `translate(${x / 10}px, ${y / 10}px)`;
      });
    });
  }
}
