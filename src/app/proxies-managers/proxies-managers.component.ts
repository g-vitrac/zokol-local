import {Component, Inject, ViewChild} from '@angular/core';
import {ProxyManager} from "../proxy-manager/proxy-manager.component";
import {Dialog} from "@angular/cdk/dialog";
import {ConfirmService} from "../services/confirm-service/confirm.service";
import {ProxyManagerAddDialogComponent} from "../dialog/proxy-manager-add-dialog/proxy-manager-add-dialog.component";
import {MatTable} from "@angular/material/table";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-proxies-managers',
  templateUrl: './proxies-managers.component.html',
  styleUrls: ['./proxies-managers.component.scss']
})

export class ProxiesManagersComponent {
  public proxies : Array<ProxyManager> = [];
  displayedColumns: string[] = ['id', 'ip', 'port', 'openPorts', 'actions'];

  constructor(public confirmService: ConfirmService, public dialogHub : Dialog) {
    this.proxies = [
      {
        "id": 1,
        "ip": "150.120.1.1",
        "port": 5000,
        "openPorts": [
          10000, 10001, 10002, 10003
        ]
      },
      {
        "id": 2,
        "ip": "150.120.1.2",
        "port": 5000,
        "openPorts": [
          10000, 10001, 10002, 10003
        ]
      }
    ];
  }

  @ViewChild(MatTable) table: MatTable<ProxyManager> | undefined;

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
        this.proxies.push(value);
        this.table.renderRows();  //TODO recuperer ID depuis l'api lors de la sauvegarde
      }
      else throw new Error('add proxies manager form gives invalid data');
    });
  }
  delete(id: number)
  {
    this.proxies = this.proxies.filter(hub => hub.id != id);
    //TODO call api pour supprimer le hub
  }
}
