import { Component, OnInit , Inject } from '@angular/core';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';
// import { MAT_DIALOG_DATA } from '@angular/material';
// import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  // modalTitle: string;

  // constructor(
  //   public dialogRef: MatDialogRef<CategoryAddComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

constructor(){}
// onNoClick(): void {
//   this.dialogRef.close();
// }

  ngOnInit() {
  }

}
