import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponentComponent, HttpClientModule],
  selector: 'material-dashboard-demo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
