import { Component, Input } from '@angular/core';
import { Experience } from '../../../types';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
    @Input() experience!: Experience;

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

        document.querySelectorAll('.fade-experience').forEach(element => {
            observer.observe(element);
        });
    }
}
