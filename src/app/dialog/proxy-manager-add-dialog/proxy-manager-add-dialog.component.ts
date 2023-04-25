import {Component, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";
import {DialogRef} from "@angular/cdk/dialog";
import {MatTable} from "@angular/material/table";
import {ProxyManager} from "../../proxy-manager/proxy-manager.component";

@Component({
  selector: 'app-proxy-manager-add-dialog',
  templateUrl: './proxy-manager-add-dialog.component.html',
  styleUrls: ['./proxy-manager-add-dialog.component.css']
})
export class ProxyManagerAddDialogComponent {
  constructor(private fb: FormBuilder, private dialogRef : DialogRef) {
  }

  public form = this.fb.group({
    ip: ['', Validators.required],
    port: ['', Validators.required],
    openPorts: this.fb.array([
      this.fb.control('')
    ])
  })


  get openPorts(){
    return this.form.get('openPorts') as FormArray;
  }

  addOpenPort(){
    this.openPorts.push(this.fb.control(''));
  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }
}
