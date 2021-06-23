import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { StudentModalPage } from './student-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
      path: '', 
      component: StudentModalPage
    }])
  ],
  declarations: [StudentModalPage]
})
export class StudentModalPageModule {}
