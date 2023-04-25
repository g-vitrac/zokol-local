import { Injectable } from '@angular/core';
import {ConfirmDialogComponent} from "../../dialog/confirm-dialog/confirm-dialog.component";
import {Dialog} from "@angular/cdk/dialog";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(public dialog: Dialog) { }

  confirm: Subject<boolean> = new Subject();

  openConfirm(){
    return this.dialog.open<boolean>(ConfirmDialogComponent, {
      autoFocus: '__non_existing_element__',
    }).closed.subscribe(confirm => {
      this.confirm.next(confirm ?? false);
    })
  }

}
