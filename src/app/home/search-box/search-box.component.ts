import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TvmazeService } from 'src/app/services/tvmaze.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<any>();
  searchForm;

  constructor(private tvmazeService: TvmazeService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      keywords: new FormControl('', [Validators.required])
    });
  }

  searchShow() {
    
    if (this.searchForm.valid) {
      let keywords = this.searchForm.get('keywords').value;
      this.tvmazeService.getShowsByKeywords(keywords).subscribe(responseData => {
        this.searchEvent.emit(responseData);
      })
    }
  }



}
