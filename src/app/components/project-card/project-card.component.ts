import { Component, Input } from '@angular/core';
import { Project } from '../../../types';
import { IconLinkComponent } from '../icon-link/icon-link.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [IconLinkComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})

export class ProjectCardComponent {
    @Input() project!: Project;

    ngOnInit(){
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Ensures the animation only happens once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-right').forEach(element => {
            observer.observe(element);
        });
    }
}
