import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import{MatOptionModule} from "@angular/material";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from "@angular/material";
import {MatTabsModule} from '@angular/material/tabs';

const MaterialComponents = [MatMenuModule];
@NgModule({

  imports: [MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, MatSelectModule,
            MatDividerModule,MatDatepickerModule,MatNativeDateModule,MatTabsModule, MatOptionModule,
            MatGridListModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule, MatCheckboxModule,MatExpansionModule],
  exports: [MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, MatSelectModule,
            MatDividerModule,MatDatepickerModule,MatNativeDateModule,MatTabsModule,MatOptionModule,
            MatGridListModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule, MatCheckboxModule,MatExpansionModule]
})
export class MaterialModule { }
