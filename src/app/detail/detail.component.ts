import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvmazeService } from '../services/tvmaze.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  showId: number;
  showDetail;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private tvmazeService: TvmazeService) { }

  ngOnInit(): void {
    this.showId = this.activatedRoute.snapshot.params.id;
    this.getShowDetail();
  }

  getShowDetail() {
    this.tvmazeService.getShowDetail(this.showId).subscribe(responseData => {
      this.showDetail = responseData;
    })
  }

  closePopUp() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }

}
