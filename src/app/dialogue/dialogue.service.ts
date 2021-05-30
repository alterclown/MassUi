import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from './dialogue.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg){
   return this.dialog.open(DialogueComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: "250px" },
      data :{
        message : msg
      }
    });
  }
}