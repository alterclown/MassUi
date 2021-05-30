import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/dialogue/dialogue.service';
import { NotificationService } from 'src/app/dialogue/notification.service';
import { TemporaryCertificateService } from '../services/temporary.service';

@Component({
  selector: 'app-temporary-certificate-list',
  templateUrl: './temporary-certificate-list.component.html',
  styleUrls: ['./temporary-certificate-list.component.css']
})
export class TemporaryCertificateListComponent implements OnInit {
  _tempCertificateList: any;
  constructor(private tempService: TemporaryCertificateService, public dialog: MatDialog, private dialogService: DialogService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.tempService.getTemporaryCertificate().subscribe(data => {
      this._tempCertificateList = data;
    });
  }
  deleteTemporaryCertificate(temporaryCertificateId: number) {
    this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.tempService.deleteTemporaryCertificate(temporaryCertificateId).subscribe(() => {
            console.log('Deleted!');
          });
          this._tempCertificateList.splice(0, 1);
          this.notificationService.warn('! Deleted successfully');
        }
      });
  }
  logOut() {
    window.location.href = "";
  }
}
