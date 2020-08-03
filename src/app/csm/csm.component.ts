import { Component, OnInit } from '@angular/core';
import data from './csm.component.json';
import {postModel} from '../shared/models/post-model';

@Component({
  selector: 'app-csm',
  templateUrl: './csm.component.html',
  styleUrls: ['./csm.component.css']
})
export class CsmComponent implements OnInit {
  data: postModel[];
  constructor(public window: Window) { }

  ngOnInit(): void {
    this.data = data as postModel[];
  }

}
