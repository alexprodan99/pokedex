import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule],
  exports: [MatCardModule],
})
export class AngularMaterialsModule {}
