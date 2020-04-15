import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Dismiss", {
      duration: 3000,
    });
  }

  formatDate(dateString) {
      const date = dateString.getDate() < 10 ? '0' + dateString.getDate() : dateString.getDate();
      const month = dateString.getMonth() < 10 ? '0' + dateString.getMonth() : dateString.getMonth();
      const year = dateString.getFullYear();
      return year + "-" + month + "-" + date;
    // console.log(dateString);
    // if (dateString instanceof Date) {
    //   const date = dateString.getDate() < 10 ? '0' + dateString.getDate() : dateString.getDate();
    //   const month = dateString.getMonth() < 10 ? '0' + dateString.getMonth() : dateString.getMonth();
    //   const year = dateString.getFullYear();
    //   return year + "-" + month + "-" + date;
    // } else if (typeof dateString == 'string') {
    //   const dateArray = dateString.split('/');
    //   const date = dateArray[1].length === 1 ? '0' + dateArray[1] : dateArray[1];
    //   const month = dateArray[0].length === 1 ? '0' + dateArray[0] : dateArray[0];
    //   const year = dateArray[2];
    //   return year + "-" + month + "-" + date;
    // } else {
    //   return dateString;
    // }

  }
}
