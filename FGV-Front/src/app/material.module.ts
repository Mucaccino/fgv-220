// material.module.ts

import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatButtonModule,
  ],
  exports: [
    MatTableModule,
    MatButtonModule
  ]
})

export class MaterialModule {}