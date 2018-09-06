import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import {HomeSlider} from '../../models/index';

@Injectable()
export class HomeService {
    constructor(private httpclient:HttpClient) { }

    public createHomeSlider(homeSlider:HomeSlider){
    const endpoint = '/api/createHomeSlider';
    const formData: FormData = new FormData();
    formData.append("image_path", homeSlider.file);
    formData.append("description",homeSlider.description)
    return this.httpclient.post(endpoint,formData).pipe(map(() => { return true; }));
    }
}
