import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Tracker } from '../tracker.model';

@Component({
  selector: 'app-tracker-container',
  templateUrl: './tracker-container.component.html'
})
export class TrackerContainerComponent implements OnInit {
  public form: FormGroup;
  public editForm: FormGroup;
  public trackerData: any;
  public trackerObj: Tracker;
  constructor(
    private trackerService: TrackerService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.editForm = this.fb.group({
      edit_email: ['', Validators.required],
      edit_password: ['', Validators.required],
    });

    this.trackerObj = {} as Tracker;
    this.trackerData = [];
  }

  ngOnInit() {
    this.getData();
  }

  public addData() {
    const { value } = this.form;
    console.log(value);
    this.trackerObj.id = '';
    this.trackerObj.email = value.email;
    this.trackerObj.password = value.password;

    this.trackerService.addData(this.trackerObj).then((res) => {
      if (res) {
        alert('data added succesfully');
        this.form.reset();
      }
    });
  }

  public getData() {
    this.trackerService.getData().subscribe((res: Tracker[]) => {
      console.log(res);
      this.trackerData = res;
    });
  }
  public deleteData(data: Tracker) {
    let alert = confirm('You sure bro?');
    if (alert == true) {
      this.trackerService.deleteData(data);
    }
  }

  public updateData(data: Tracker) {
    const { value } = this.editForm;
    console.log(value);
  }
}
