import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-link',
  standalone: true,
  imports: [],
  templateUrl: './icon-link.component.html',
  styleUrl: './icon-link.component.scss'
})
export class IconLinkComponent {
    @Input() href: string = '';
    @Input() src: string = '';
    @Input() alt: string = '';
}
