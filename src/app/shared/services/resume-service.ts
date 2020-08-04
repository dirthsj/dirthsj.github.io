import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root'})
export class ResumeService {
  private readonly RESUME_URL = 'https://cors-anywhere.herokuapp.com/https://github.com/dirthsj/Resume/releases/latest/download/main.pdf';
  private readonly resumeLoadingPromise;
  constructor(http: HttpClient) {
    this.resumeLoadingPromise = http.get(this.RESUME_URL, { responseType: 'arraybuffer' })
      .toPromise();
  }

  public getResume(): Promise<Uint8Array>
  {
    return this.resumeLoadingPromise;
  }
}
