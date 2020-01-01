import { Pipe, PipeTransform } from '@angular/core';
import { ɵNAMESPACE_URIS } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { isString } from 'util';

@Pipe({
  name: 'searchtable'
})
export class SearchtablePipe implements PipeTransform {

  transform(val: any, ...args: any[]): any {
    
    var rows = (<HTMLTableElement>document.getElementById("table")).rows.length;
    //entered var for checking if value in search bar is a Name or not
    var entered = false;
    //console.log(rows);
    var count:number = 0;
    //For loop for checking if value entered in search bar is a substring of the name column
    for(var i=2; i < rows;i++){
        var cellval:string = (<HTMLTableElement>document.getElementById("table")).rows[i].cells.item(1).innerHTML;
        //console.log(cellval);
        if(cellval.includes(val) ){
          (<HTMLTableElement>document.getElementById("table")).rows[i].style.display = "";
          var scount:string = (++count).toString();
          (<HTMLTableElement>document.getElementById("table")).rows[i].cells.item(0).innerHTML = scount;
          entered = true;
        }
        else
        {
          (<HTMLTableElement>document.getElementById("table")).rows[i].style.display = "none";
        }
    }
    
    //!entered means value isn't a name so...
    if(!entered)
    {
      count = 0;
      //For loop for checking if value entered in search bar is a substring of the Age column
      for(var i=2; i < rows;i++){
        var cellval:string = (<HTMLTableElement>document.getElementById("table")).rows[i].cells.item(2).innerHTML;
        //console.log(cellval);
        if(cellval.includes(val) ){
          (<HTMLTableElement>document.getElementById("table")).rows[i].style.display = "";
          var scount:string = (++count).toString();
          (<HTMLTableElement>document.getElementById("table")).rows[i].cells.item(0).innerHTML = scount;
        }
        else
        {
          (<HTMLTableElement>document.getElementById("table")).rows[i].style.display = "none";
        }
      }
    }

  }

}
