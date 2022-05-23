import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { userDataProfile } from '../table/table-component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  user!: userDataProfile;
  ischange!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: userDataProfile,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    if (this.data.id !== null) {
      this.ischange = true;
    } else this.ischange = false;
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
