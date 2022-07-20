import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dual-listbox';

  source: any[] = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
    { id: 4, name: "four" },
    { id: 5, name: "five" },
    { id: 6, name: "six" },
    { id: 7, name: "seven" },
    { id: 8, name: "eight" },
    { id: 9, name: "nine" },
    { id: 10, name: "ten" },
  ];

  confirmed: any[] = [
    { id: 4, name: "four" },
    { id: 5, name: "five" },
  ];
}
