import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  showEducation:boolean=true;
  
  showProjects:boolean=true;

  projects =[
    {name:'Project 1',description: 'Description Oof Project 1'},
    {name:'Project 2',description: 'Description Oof Project 2'},
    {name:'Project 3',description: 'Description Oof Project 3'},
  ];


}
