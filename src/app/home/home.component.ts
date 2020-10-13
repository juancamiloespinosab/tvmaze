import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showsList = [];

  constructor() { }

  ngOnInit(): void {
  }

  createShowsList(data) {

    this.showsList = [];

    let show = {
      id: 0,
      name: '',
      image: ''
    }
    data.forEach(element => {
      let imageUrl = element.show.image ? element.show.image.medium : '';

      show = {
        id: element.show.id,
        name: element.show.name,
        image: imageUrl,
      }

      this.showsList.push(show);
    });

  }

}
