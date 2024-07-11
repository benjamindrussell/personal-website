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
}
