import { Component, OnInit } from '@angular/core';
import { GetQuotesService } from '../../shared/services/get-quotes.service';
 
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  public quotes: any = [];
  public selectedSortVal: any;
  public selectedFilterVal: any;
  comparedData: any = [];
  isModalOpen: boolean = false;
  filteredData: any = []; 
  filterVal: any;
  KeyWord: any;

  constructor(private _getQuotesService: GetQuotesService) { }

  ngOnInit() {
    this.selectedSortVal = null;
    this.selectedFilterVal = null;
    this._getQuotesService.getQuotes().subscribe((res:any) => {
          this.quotes = res.quotes;
        console.log("Quotes:: " ,this.quotes);
    });

      setTimeout(() => {
        this.filteredData = [...this.filteredData,...this.quotes];
        console.log("Filtered data" ,this.filteredData);
      }, 0);
  }

  sort() {
    if(this.selectedSortVal === 'price') {
      this.filteredData.sort(function(a, b){
        return a.price-b.price
      })
    } else {
      this.filteredData.sort(function(a, b){
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase()
        if (nameA < nameB)
            return -1 
        if (nameA > nameB)
            return 1
            return 0 
    })
    }
    

  }
  PolicyChange(data){
    this.filteredData = [];
    if(data && data.length > 0 && this.KeyWord){
    this.filteredData = [...this.filteredData,...this.quotes];
    this.filteredData = this.filteredData.filter((obj)=>{
      if(this.KeyWord == 'bestSellers'){
        return obj[this.KeyWord].toString().indexOf(data.toLowerCase()) > -1;
      }else{
        return obj[this.KeyWord].toLowerCase().indexOf(data.toLowerCase()) > -1;
      }
    })
  }else{
    this.filteredData = this.quotes;
  }
  }
  filterChange(data) {
    console.log('data::::',typeof data);
    if(data == 'type'){
      this.KeyWord = 'type';
    }else if(data == 'section'){
      this.KeyWord = 'section';
    } else if(data == 'bestSellers'){
      this.KeyWord = 'bestSellers';
    }   

  }
  compareCheckBox(obj){    
    if(obj.checked){
      this.comparedData.push(obj);
    }
    else{
      this.comparedData = this.comparedData.filter((data)=>{
        return data.checked;
      });
    }
  }
  compareListData(){
    this.isModalOpen = true;
  }
  closeModal(event){
    this.isModalOpen = event;
  }
}

