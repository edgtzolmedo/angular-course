import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCharacterComponent } from './create-character.component';

@NgModule({
  declarations: [CreateCharacterComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(
    [{ path: '', component: CreateCharacterComponent }]
  )]
})
export class CreateCharacterModule {}
