import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  projects = [
    {
      title: 'Microblog Platform',
      description: 'A full-stack blog application with user authentication, real-time following, and AI-powered article translation using Elasticsearch. Containerized with Docker and deployed on Azure.',
      image: '../assets/logo.png',
      tech: ['Flask', 'PostgreSQL', 'Elasticsearch', 'Docker', 'Azure', 'Redis'],
      github: 'https://github.com/Jart82/microblog',
      live: null // 'or a real URL if deployed'
    },
    {
      title: 'Primvilla Property Platform',
      description: 'A responsive real estate web app allowing users to browse property listings and contact realtors. Built with Flask backend and vanilla JS frontend.',
      image: '../assets/logo.png',
      tech: ['Flask', 'JavaScript', 'HTML/CSS', 'SQL'],
      github: 'https://github.com/Jart82/PRIMEVILLA',
      live: null
    },
    {
      title: 'Todo List App',
      description: 'A clean, responsive, and intuitive todo list application built with modern web technologies. Manage your tasks efficiently with features like task creation, completion tracking, filtering, and local storage persistence.',
      image: '../assets/logo.png',
      tech: ['Angular', 'TypeScript', 'HTML/CSS'],
      github: 'https://github.com/Jart82/todolist-app',
      live: 'https://todolist-app-sigma-flax.vercel.app/'
    }
  ];

  // Optional: Open links in new tab safely
  openLink(url: string | null): void {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}