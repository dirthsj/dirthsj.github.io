import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../shared/services/resume-service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  public resume: Uint8Array;
  constructor(private resumeService: ResumeService) {
  }

  ngOnInit(): void {
    this.resumeService.getResume()
      .then(x => this.resume = x);
  }
  download(): void
  {
    const dataView = new DataView(this.resume);
    const blob = new Blob([dataView], { type: 'mimeString' });
    saveAs( blob, 'Steven Dirth Resume.pdf');
  }
}
