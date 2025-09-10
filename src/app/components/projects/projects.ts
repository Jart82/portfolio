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
    title: 'Microblog Platform',
    description: 'A full-stack blog application with user authentication, real-time following, and AI-powered article translation using Elasticsearch. Containerized with Docker and deployed on Azure.',
    image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Microblog',
    tech: ['Angular', 'Flask', 'PostgreSQL', 'Elasticsearch', 'Docker', 'Azure', 'Redis'],
    github: 'https://github.com/Jart82/microblog',
    live: '#' // Add if you deploy it
  },
  {
    title: 'Primvilla Property Platform',
    description: 'A responsive real estate web app allowing users to browse property listings and contact realtors. Built with Flask backend and vanilla JS frontend.',
    image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Primvilla',
    tech: ['Flask', 'JavaScript', 'HTML/CSS', 'SQL'],
    github: 'https://github.com/Jart82/PRIMEVILLA.git',
    live: '#'
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