import {Component} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: DialogRef<boolean>) {}

  confirm()
  {
    this.dialogRef.close(true);
  }

  cancel()
  {
    this.dialogRef.close(false);  }
}
