import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',

  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
