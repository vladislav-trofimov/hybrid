
import * as angular from 'angular';
import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { heroAppModule } from '../angularjs';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    UpgradeModule
  ]
})

export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
      setAngularJSGlobal(angular);
      this.upgrade.bootstrap(document.body, [heroAppModule.name], { strictDi: false });
  }
 }

