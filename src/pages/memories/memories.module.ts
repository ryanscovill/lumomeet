import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemoriesPage } from './memories';

@NgModule({
  declarations: [
    MemoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(MemoriesPage),
  ],
})
export class MemoriesPageModule {}
