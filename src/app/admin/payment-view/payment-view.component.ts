import { Component, OnInit } from '@angular/core';
import {BorrowingService} from '../user-management/borrowing-details/borrowing.service'
import { ActivatedRoute } from "@angular/router";
import {Borrowing} from '../../../server/src/api/v1/user/borrowing.model.js';
import * as $ from 'jquery'
@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.css']
})
export class PaymentViewComponent implements OnInit {
id;
user;
tableWidget;
m;

  constructor(private BorrowingService:BorrowingService , private route :ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.BorrowingService
    .getProducts(this.id)
    .subscribe((data: Borrowing[]) => {
      console.log(data)
      this.user = Array.of(data);
      this.m=this.user.month;
  });
  $.getScript("https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.19/js/jquery.dataTables.min.js",function(){            
   $.getScript("https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js",function(){            
   $.getScript("https://cdn.datatables.net/buttons/1.5.2/js/buttons.flash.min.js",function(){            
   $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js",function(){            
   $.getScript("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js",function(){            
   $.getScript("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js",function(){            
   $.getScript("https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js",function(){            
   $.getScript("https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js",function(){            

           $('#datatable').DataTable({     
          //   buttons: [
          //     {
          //         extend: 'excel',
          //         text: 'Save current page',
          //         exportOptions: {
          //             modifier: {
          //                 page: 'current'
          //             }
          //         }
          //     }
          // ]
           }); 
               });  
           });  
         });  
     });  
   });  
 });  
});  
});  

  // setTimeout(() => {
  //   this.initDatatable()
  // }, 1000);
}
  // private initDatatable(): void {
   
  // }


  }

