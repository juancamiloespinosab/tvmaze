import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() showsList;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getImage(imageUrl) {
    let url = imageUrl || '../../assets/image/placeholder.png'
    return `url('${url}')`;
  }

  goToDetail(showId) {
    this.router.navigate(
      [{
        outlets:
          { popup: ['detail', showId] }
      }]
    );

  }

}
