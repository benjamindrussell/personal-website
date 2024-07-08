import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { Experience } from '../../../types';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [SectionHeaderComponent, ExperienceCardComponent],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    experiences: Experience[] = [
        {
            name: "Riverside Research",
            position: "Software Engineering Intern",
            logoPath: "assets/riverside-logo.jpeg",
            url: "https://www.riversideresearch.org/",
            startDate: "May 2024",
            endDate: "August 2024",
            descriptions: [
                "Built data visualization dashboard on AWS with Python for US Space Force contract involving Space Domain Awareness"
            ]
        },
        {
            name: "Flyer Enterprises",
            position: "Software Developer",
            logoPath: "assets/fe-logo.png",
            url: "https://www.flyerenterprises.com/",
            startDate: "April 2024",
            endDate: "Present",
            descriptions: [
                "Facilitated the transfer of Flyer Enterprises codebase from Bitbucket to GitHub to reduce expenses",
                "Developing mobile ordering web app with Angular and Express.js"
            ]
        }
    ]
}
