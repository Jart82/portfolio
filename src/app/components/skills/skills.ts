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
  { name: 'Angular', level: 65 },
  { name: 'TypeScript', level: 75 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 80 },
  { name: 'SCSS', level: 85 },
  { name: 'RxJS', level: 75 }
];
}
