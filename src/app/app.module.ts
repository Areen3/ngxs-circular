import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule, Store } from '@ngxs/store';
import * as fromComp from 'src/component';
import { FirmState } from 'src/store';
import { create } from 'rxjs-spy';

import { AppComponent } from './app.component';
import { Spy } from 'rxjs-spy/spy-interface';

@NgModule({
  declarations: [AppComponent, fromComp.FirmComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgxsModule.forRoot([FirmState]), NgxsReduxDevtoolsPluginModule.forRoot(), FormsModule],
  exports: [AppComponent, fromComp.FirmComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public store: Store;
  public spy: Spy = create();
}
