import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavigationBarComponent
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
