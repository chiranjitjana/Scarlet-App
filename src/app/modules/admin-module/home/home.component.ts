import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,NgForm,FormControl, FormGroup } from '@angular/forms';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {HomeSlider} from '../../../models/index';
import {HomeService} from '../../../services/index';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeoffer:boolean;
  homeslider:boolean;
  // create a property of type Partial<BsDatepickerConfig>
  datePickerConfig: Partial<BsDatepickerConfig>;
  modelSlider=new HomeSlider(null,"");
  sliderForm: FormGroup;

   constructor(calendar: NgbCalendar,public homeservice:HomeService) {
     this.datePickerConfig = Object.assign({},
     {
       containerClass: 'theme-orange',
       showWeekNumbers: true,
       minDate: new Date(),
       dateInputFormat: 'dd-mm-yyyy'
     });
   }

  ngOnInit() {
    this.homeslider=true;
    this.homeoffer=false;
    this.sliderForm = new FormGroup({
      'file': new FormControl(this.modelSlider.file, Validators.required),
      'description': new FormControl(this.modelSlider.description, Validators.required)
    });
  }

  handleFileInput(files: FileList) {
      this.modelSlider.file = files.item(0);
  }
  showOffer(event){
   event.preventDefault();
   this.homeslider=false;
   this.homeoffer=true;
  }

  showSlider(event){
   event.preventDefault();
   this.homeslider=true;
   this.homeoffer=false;
  }


  saveHomeSlider(homeSlider:NgForm):void{
    console.log(homeSlider.value);
    this.homeservice.createHomeSlider(this.modelSlider).subscribe(data => {
     // do something, if upload success
     }, error => {
       console.log(error);
     });
  }





}
