import { Component } from '@angular/core';
import { IconLinkComponent } from '../icon-link/icon-link.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IconLinkComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
    copyEmail() {
        const emailInput = document.getElementById("email") as HTMLInputElement;
        navigator.clipboard.writeText(emailInput.value);

        const copyText = document.getElementById("copy-text") as HTMLElement;
        copyText.classList.add("active");
        setTimeout(function() {
            copyText.classList.remove("active");
        }, 2500)
    }
}
