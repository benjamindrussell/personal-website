import { Component } from '@angular/core';

@Component({
    selector: 'app-greeting',
    standalone: true,
    imports: [],
    templateUrl: './greeting.component.html',
    styleUrl: './greeting.component.scss'
})

export class GreetingComponent {
    // sleep for given number of milliseconds
    sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    // logic for typewriter animation
    writeLoop = async () => {
        const typedWord = 'Software Engineer'
        let element = document.getElementById("terminal");

        while (true) {
            for (let i = 0; i <= typedWord.length; i++) {
                element!.innerHTML = `<span>${typedWord.substring(0, i)}</span>`;
                await this.sleep(90);
            }

            for (let i = typedWord.length; i >= 0; i--) {
                element!.innerHTML = `<span>${typedWord.substring(0, i)}</span>`;
                await this.sleep(70);
            }

            await this.sleep(300);
        }
    }

    ngOnInit() {
        // init animation
        this.writeLoop();
    }
}
