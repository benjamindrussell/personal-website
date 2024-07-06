import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { AboutComponent } from './components/about/about.component';
import { BottomCurveComponent } from './components/bottom-curve/bottom-curve.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, GreetingComponent, BottomCurveComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
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

      document.querySelectorAll('.fade-up').forEach(element => {
          observer.observe(element);
      });

      this.primengConfig.ripple = true;
  }
}
