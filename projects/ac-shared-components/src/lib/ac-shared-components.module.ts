import { NgModule } from '@angular/core';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { NumberListComponent } from './components/number-list/number-list.component';

@NgModule({
  declarations: [
    DropdownComponent,
    DropdownListComponent,
    NumberListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropdownComponent,
    DropdownListComponent,
    NumberListComponent
  ]
})
export class AcSharedComponentsModule { }
