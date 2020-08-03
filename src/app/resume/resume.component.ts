import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  public readonly RESUME_URL = 'https://cors-anywhere.herokuapp.com/https://github.com/dirthsj/Resume/releases/latest/download/main.pdf';
  constructor() {
  }

  ngOnInit(): void {

  }
}
