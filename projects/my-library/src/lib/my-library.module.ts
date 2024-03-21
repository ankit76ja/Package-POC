import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { FileUploadComponentComponent } from './file-upload-component/file-upload-component.component';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  declarations: [
    MyLibraryComponent,
    FileUploadComponentComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule
  ],
  exports: [
    MyLibraryComponent
  ]
})
export class MyLibraryModule { }
