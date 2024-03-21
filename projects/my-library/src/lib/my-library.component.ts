import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-library',
  template: `
  <lib-file-upload-component></lib-file-upload-component>
  `,
  styles: [
  ]
})
export class MyLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
