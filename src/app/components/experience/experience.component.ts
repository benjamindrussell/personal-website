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
            name: "Flyer Enterprises",
            position: "Software Developer",
            logoPath: "assets/fe-logo.png",
            url: "https://www.flyerenterprises.com/",
            startDate: "April 2024",
            endDate: "Present",
            descriptions: [
                "Building Flyer Enterprises’ mobile ordering website with Angular, Express.js, and PostgreSQL to boost on-campus dining sales to a potential customer base of over 8,000 students",
                "Designed UI/UX of mobile ordering website with Figma to deliver a premium user experience"
            ]
        },
        {
            name: "Riverside Research",
            position: "Software Engineering Intern",
            logoPath: "assets/riverside-logo.jpeg",
            url: "https://www.riversideresearch.org/",
            startDate: "May 2024",
            endDate: "August 2024",
            descriptions: [
                "Implemented front-end of a Vue.js app that automates Argo Workflows on Kubernetes for Foreign Material Exploitation to support 7 intelligence agencies including the National Air and Space Intelligence Center",
                "Engineered AWS Lambda function in Python to monitor and process ~2,500 frames per day of real-time satellite data, delivering analytics to Grafana dashboard for a contract supporting the U.S. Space Force",
                "Conducted research on open-source geospatial intelligence datasets and object-detection models, compiled and presented findings including existing Jupyter Notebooks and ~67,000 square km of high-resolution imagery to enhance company's geospatial intelligence capabilities"
            ]
        },
    ]
}
