import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() color: string;


  asignColor(){
    switch (this.color){
      case 'purple': return 'navbar-purple';
      default: return 'navbar-primary';
    }
  }
}
