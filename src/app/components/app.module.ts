import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BoostrapModule } from './ng-boostrap/boostrap.module';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { PokeListComponent } from './poke-list/poke-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BoostrapModule,
    AngularMaterialsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, PokeListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
