import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skills = [
  { name: 'Frontend', level: 75, items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'] },
  { name: 'Backend', level: 55, items: ['NestJS', 'Python (Flask)', 'RESTful APIs'] },
  { name: 'Databases', level: 50, items: ['PostgreSQL', 'SQL', 'Redis'] },
  { name: 'DevOps & Cloud', level: 45, items: ['Docker', 'Nginx', 'Azure'] },
  { name: 'Tools & Practices', level: 75, items: ['Git/GitHub', 'Agile/Scrum', 'JIRA', 'Postman'] }
];
}
