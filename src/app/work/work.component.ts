import { Component, OnInit } from '@angular/core';
import { postModel } from '../shared/models/post-model';
import data from './work.component.json';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  data: postModel[];
  constructor(public window: Window) { }

  ngOnInit(): void {
    this.data = data as postModel[];
  }
}
