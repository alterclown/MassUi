import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/dialogue/dialogue.service';
import { NotificationService } from 'src/app/dialogue/notification.service';
import { MainCertificateService } from '../services/main-certificate.service';

@Component({
  selector: 'app-main-certificate-list',
  templateUrl: './main-certificate-list.component.html',
  styleUrls: ['./main-certificate-list.component.css']
})
export class MainCertificateListComponent implements OnInit {
  _mainCertificateList:any;
  constructor(private mainCertificateService: MainCertificateService, public dialog: MatDialog, private dialogService: DialogService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.mainCertificateService.getMainCertificate().subscribe(data => {
      this._mainCertificateList = data;
    });
  }
  deleteMainCertificate(mainCertificateId: number) {
    this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.mainCertificateService.deleteMainCertificate(mainCertificateId).subscribe(() => {
            console.log('Deleted!');
          });
          this._mainCertificateList.splice(0, 1);
          this.notificationService.warn('! Deleted successfully');
        }
      });
  }

}
