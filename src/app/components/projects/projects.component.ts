import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { Project } from '../../../types';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeaderComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      imagePath: '../../../assets/conart.jpg',
      title: 'ConArt AI',
      website: 'https://www.conartai.design/',
      devpost: 'https://devpost.com/software/conart-ai',
      github: 'https://github.com/benjamindrussell/conartAI',
      heading:
        'A gamified design tool that helps teams brainstorm faster by turning quick doodles into full-on art using ControlNet with Stabile Diffusion',
      descriptions: [
        'Hack The North 2024 Finalist (the top prize!)',
        "Top 12 out of 240 teams at Canada's biggest hackathon",
      ],
    },
    {
      imagePath: '../../../assets/git-pets.png',
      title: 'GitPets',
      devpost: 'https://devpost.com/software/gitpets',
      github: 'https://github.com/gitJhim/hackillinois2024',
      heading:
        'A mobile app designed to keep developers consistent in building side projects by associating the health of digital companions to their GitHub activity',
      descriptions: [
        'HackIllinois 2024 Best Beginner Hack',
        'Best Developer Tool Honorable Mention',
      ],
    },
    {
      imagePath: '../../../assets/flipper-zero.png',
      title: 'Flipper Zero Spotify Remote',
      github: 'https://github.com/benjamindrussell/flipper-spotify-remote',
      heading:
        'An app for the Flipper Zero that lets you control Spotify playback when paired with an ESP32',
      descriptions: [
        'Contributed to the most popular Flipper Zero firmware with ~5k stars on GitHub',
      ],
    },
    {
      imagePath: '../../../assets/hue-it-is.png',
      title: 'Hue It Is',
      medium:
        'https://medium.com/99p-labs/reflecting-on-2023-hack-ohi-o-11-b053bde1ee7a',
      github: 'https://github.com/gitJhim/hackohio2023',
      heading:
        'A web app that uses computer vision to simplify indoor navigation',
      descriptions: [
        'HackOHI/O 11 Honda Challenge',
        '3rd place out of 35 teams',
      ],
    },
  ];
  centerProject: Project = {
    imagePath: '../../../assets/micro-editor.png',
    title: 'Micro Text Editor',
    github: 'https://github.com/benjamindrussell/micro-editor',
    heading: 'A minimal Vim clone written in C',
    descriptions: [
      'Fork of the Kilo text editor with additons of the ncurses TUI library and Vim motions',
      'Supports syntax highlighting and search',
    ],
  };
}
