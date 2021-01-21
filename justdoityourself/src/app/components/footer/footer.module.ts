import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {IconsModule} from "angular-bootstrap-md";



@NgModule({
    declarations: [FooterComponent],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        IconsModule
    ]
})
export class FooterModule { }
