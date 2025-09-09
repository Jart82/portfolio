import { Component, viewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements AfterViewInit {
  projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'Admin dashboard built with Angular Material and Firebase.',
      image: 'https://via.placeholder.com/400x250/4a89dc/ffffff?text=Project+1',
      demo: '#',
      code: '#'
    },
    {
      title: 'Task Manager App',
      description: 'Drag-and-drop task manager with real-time sync.',
      image: 'https://via.placeholder.com/400x250/5cb85c/ffffff?text=Project+2',
      demo: '#',
      code: '#'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather app using OpenWeather API.',
      image: 'https://via.placeholder.com/400x250/f0ad4e/ffffff?text=Project+3',
      demo: '#',
      code: '#'
    }
  ];

  // ✅ Get all project cards for animation or intersection observer
  projectCards = viewChildren<ElementRef<HTMLDivElement>>('projectCard');

  ngAfterViewInit() {
    // Example: Log all cards
    this.projectCards().forEach((card, i) => {
      console.log(`Card ${i + 1}:`, card.nativeElement);
    });
  }

  onCardHover(index: number, isHovered: boolean) {
    // You could trigger animations or analytics here
    console.log(`Project ${index + 1} hovered:`, isHovered);
  }
}