import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ToasterComponent } from "../../shared/toaster/toaster.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, ToasterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
