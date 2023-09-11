import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() color: string;


  asignColor(){
    if(this.color === 'purple'){
      return 'navbar-purple';
    }

    return 'navbar-primary';
  }
}
