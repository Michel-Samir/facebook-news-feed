import { NgModule } from '@angular/core';
import { 
    MatButtonModule, 
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule
 } from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatSidenavModule,
        MatDividerModule,
        MatListModule,
        MatCheckboxModule,
        MatRadioModule
    ]
})
export class MaterialModule {

}