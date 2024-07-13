import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
    buttonList = [
        {
            "label": "🧗  About",
            "component": "aboutComponent"
        },
        {
            "label": "👨‍🚀 Experience",
            "component": "experienceComponent"
        },
        {
            "label": "💻 Projects",
            "component": "projectsComponent"
        },
        {
            "label": "📬 Contact",
            "component": "contactComponent"
        }
    ];

    constructor(private viewportScroller: ViewportScroller) { }

    // scroll to a specific component
    scrollToAnchor(anchor: string) {
        this.viewportScroller.scrollToAnchor(anchor);
    }

    // scroll to top of page
    scrollToTop() {
        window.scrollTo(0, 0);
    }

    ngOnInit() {
        // Set a fixed offset of 100 pixels from the top
        this.viewportScroller.setOffset([0, 95]);
    }

}
