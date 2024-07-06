import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
    animations = ['wave1', 'wave2', 'wave3'];

    randomIndex = 0;

    // select one of three random animations
    getRandomAnimation(): string {
      return this.animations[this.randomIndex];
    }

    @Input() title: string = '';
    
    ngOnInit() {
      this.randomIndex = Math.floor(Math.random() * this.animations.length);
    }
}
