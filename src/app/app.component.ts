import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './portfolio-website/about/about.component';
import { ContactComponent } from './portfolio-website/contact/contact.component';
import { FooterComponent } from './portfolio-website/footer/footer.component';
import { HomeComponent } from './portfolio-website/home/home.component';
import { NavbarComponent } from './portfolio-website/navbar/navbar.component';

// import { ReactiveformComponent } from '../reactiveform/reactiveform.component';



  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,AboutComponent,ContactComponent,FooterComponent,HomeComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  

})
export class AppComponent {

  _msg:string="";
  title = 'Angular framework';
 
}

