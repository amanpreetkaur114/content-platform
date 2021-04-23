import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/environments/environment';
import { WorkflowTemplate } from '../Model/workflowTemplate.model';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(private http: HttpClient,
  ) { }

  onSaveWorkflowTemplate(param): Observable<any> {
    console.log(param)
    console.log(param.steps.map(res => res.title));
    const params = ({
    "title": param.title,
      "description": param.description,
    "steps": param.steps.map(res => res)
    })

    const header = {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem('token')
      })
    }
    return this.http.post(urls.apiUrl + 'template/workflow', param, header)
  }
}
