import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import {HttpClientModule} from "@angular/common/http";
import { ProxiesManagersComponent } from './proxies-managers/proxies-managers.component';
import { ProxyManagerComponent } from './proxy-manager/proxy-manager.component';
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import { ProxyManagerAddDialogComponent } from './dialog/proxy-manager-add-dialog/proxy-manager-add-dialog.component';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgIconComponent,
    ProxiesManagersComponent,
    ProxyManagerComponent,
    ProxyManagerAddDialogComponent,
    ConfirmDialogComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
