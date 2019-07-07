import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
@Injectable()
export class GithubComponent implements OnInit {
  numRepos: number = 1;
  numGists: number = 1;
  numFollowers: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<object[]>("https://api.github.com/users/dirthsj/repos")
      .subscribe(data => this.numRepos = data.length);
    this.http.get<object[]>('https://api.github.com/users/dirthsj/gists')
      .subscribe(data => this.numGists = data.length);
    this.http.get<object[]>('https://api.github.com/users/dirthsj/followers')
      .subscribe(data => this.numFollowers = data.length);
  }

}
