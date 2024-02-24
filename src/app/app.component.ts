import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponentComponent],
  selector: 'material-dashboard-demo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
