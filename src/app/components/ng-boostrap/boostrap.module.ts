import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbAlertModule,
  NgbPaginationModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule,
    NgbPaginationModule,
    NgbTooltipModule,
  ],
  exports: [NgbAlertModule, NgbPaginationModule, NgbTooltipModule],
})
export class BoostrapModule {}
