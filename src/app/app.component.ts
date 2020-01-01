import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchInput="";
  title = 'CustomPipe';
  name = ""; 
  names = [
    {
      name:"Ravi",
      age:21
    },
    {
      name:"Sam",
      age:30
    },
    {
      name:"Bob",
      age: 19
    },
    {
      name:"Ram",
      age:20
    },
    {
      name:"Alice",
      age: 25
    }
  ]

}
