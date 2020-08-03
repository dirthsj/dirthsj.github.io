import { Component, OnInit } from '@angular/core';
import { postModel } from '../shared/models/post-model';
import data from './education.component.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  data: postModel[];
  constructor(public window: Window) { }

  ngOnInit(): void {
    this.data = data as postModel[];
  }
}
