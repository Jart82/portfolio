import { Component, viewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements AfterViewInit {
  isMenuOpen = false;

  // Get reference to mobile menu for focus management
  menu = viewChild<ElementRef<HTMLElement>>('navMenu');

  ngAfterViewInit() {
    // Optional: Add click outside listener
    document.addEventListener('click', this.onClickOutside.bind(this));
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu open:', this.isMenuOpen);

    if (this.isMenuOpen && this.menu()) {
      // Focus first link for accessibility
      const firstLink = this.menu()?.nativeElement.querySelector('a');
      setTimeout(() => {
        firstLink?.focus();
      }, 100); // Small delay to ensure animation completes
    }
  }

  scrollToSection(sectionId: string): void {
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Close menu when clicking outside
  onClickOutside(event: MouseEvent) {
    if (!this.isMenuOpen) return;

    const target = event.target as HTMLElement;
    const clickedInsideNavbar = target.closest('.navbar');
    if (!clickedInsideNavbar) {
      this.isMenuOpen = false;
    }
  }


 
}