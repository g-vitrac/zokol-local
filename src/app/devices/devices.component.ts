import {Component, ViewChild} from '@angular/core';
import {ProxyManager} from "../proxy-manager/proxy-manager.component";
import {ConfirmService} from "../services/confirm-service/confirm.service";
import {Dialog} from "@angular/cdk/dialog";
import {MatTable} from "@angular/material/table";
import {ProxyManagerAddDialogComponent} from "../dialog/proxy-manager-add-dialog/proxy-manager-add-dialog.component";


interface Device {
  storage : {
    id: number,
    imei: string,
    hubId: number,
    shared: boolean,
    trafMax: string
  } | null,
  hardware: {

  } | null
}
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent {
  public devices : Array<Device> = [];
  displayedColumns: string[] = ['id', 'imei', 'hubid', 'shared', 'trafMax'];

  constructor(public confirmService: ConfirmService, public dialogHub : Dialog) {
    this.devices = [
      {
        storage: {
          id: 1,
          imei: "un imei",
          hubId: 1,
          shared: true,
          trafMax: 'unlimited'
        },
        hardware: null
      }
    ];
  }

  @ViewChild(MatTable) table: MatTable<ProxyManager> | undefined;

  /*
  openConfirm(id: number){
    let subscription = this.confirmService.confirm.subscribe(confirm => {
      if(confirm) this.delete(id);
      subscription.unsubscribe();
    });
    this.confirmService.openConfirm();
  }

  openDialogHub()
  {
    this.dialogHub.open<ProxyManager>(ProxyManagerAddDialogComponent, {
      autoFocus: '__non_existing_element__'
    }).closed.subscribe(value => {
      console.log(value);
      if (value && this.table){
        this.devices.push(value);
        this.table.renderRows();  //TODO recuperer ID depuis l'api lors de la sauvegarde
      }
      else throw new Error('add devices manager form gives invalid data');
    });
  }
  delete(id: number)
  {
    this.devices = this.devices.filter(device => device.storage.id != id);
    //TODO call api pour supprimer le hub
  }
   */

}
