import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

export interface ProxyManager {
  id: number,
  ip: string,
  port: number,
  openPorts: Array<number>
}
@Component({
  selector: 'app-proxy-manager',
  templateUrl: './proxy-manager.component.html',
  styleUrls: ['./proxy-manager.component.scss']
})
export class ProxyManagerComponent implements OnInit{
  public proxyManager : ProxyManager | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.proxyManager = {
        id: params['id'],
        ip: '100.0.1.56',
        port: 5000,
        openPorts: []
      }
    })
  }
}
