import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonModule } from '@ui/lib/buttons';

@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule, SharedRoutingModule, ButtonModule],
})
export class SharedModule {}
