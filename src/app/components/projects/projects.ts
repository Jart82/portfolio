import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  projects = [
    {
      title: 'User Management Core',
      description:
        'A responsive admin dashboard built with Angular 17 and vanilla CSS that enables teams to efficiently manage user accounts. Features include real-time search, dynamic filtering by role and join date, pagination, CSV export, and CRUD operations—all backed by a reactive in-memory data service. Designed with a clean dark-theme UI and fully responsive layout, this project demonstrates modern Angular best practices using standalone components and reactive state management—without relying on external UI libraries.',
      image: '../assets/logo-3.png',
      tech: ['Angular', 'TypeScript', 'RxJS', 'HTML/CSS'],
      github: 'https://github.com/Jart82/usermanagecore.git',
      live: 'https://usermanagecore.vercel.app/',
      showFullDescription: false,
    },
    {
      title: 'Todo List App',
      description:
        'A clean, responsive, and intuitive todo list application built with modern web technologies. Manage your tasks efficiently with features like task creation, completion tracking, filtering, and local storage persistence.',
      image: '../assets/logo-3.png',
      tech: ['Angular', 'TypeScript', 'HTML/CSS'],
      github: 'https://github.com/Jart82/todolist-app',
      live: 'https://todolist-app-sigma-flax.vercel.app/',
      showFullDescription: false,
    },
    {
      title: 'ID Card Editor',
      description:
        'A modern, responsive web application for designing and generating custom ID cards. Built with Angular, Material Design, and powerful client-side rendering tools.',
      image: '../assets/logo-3.png',
      tech: [
        'Angular',
        'Typescript',
        'HTML/CSS',
        'Angular Material',
        'html2canvas',
        'angularx-qrcode',
      ],
      github: 'https://github.com/Jart82/id-editor',
      live: 'https://id-editor-plum.vercel.app/',
      showFullDescription: false,
    },
    {
      title: 'Microblog Platform',
      description:
        'A full-stack blog application with user authentication, real-time following, and AI-powered article translation using Elasticsearch. Containerized with Docker and deployed on Azure.',
      image: '../assets/logo-3.png',
      tech: ['Flask', 'PostgreSQL', 'Elasticsearch', 'Docker', 'Azure', 'Redis'],
      github: 'https://github.com/Jart82/microblog',
      live: null, // 'or a real URL if deployed'
      showFullDescription: false,
    },
    {
      title: 'Primvilla Property Platform',
      description:
        'A responsive real estate web app allowing users to browse property listings and contact realtors. Built with Flask backend and vanilla JS frontend.',
      image: '../assets/logo-3.png',
      tech: ['Flask', 'JavaScript', 'HTML/CSS', 'SQL'],
      github: 'https://github.com/Jart82/PRIMEVILLA',
      live: null,
      showFullDescription: false,
    },
  ];

  toggleDescription(project: any) {
    project.showFullDescription = !project.showFullDescription;
  }

  isLongDescription(description: string): boolean {
    // Adjust threshold as needed (e.g., 120 chars ≈ 2–3 lines)
    return description.length > 120;
  }

  // Optional: Open links in new tab safely
  openLink(url: string | null): void {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
