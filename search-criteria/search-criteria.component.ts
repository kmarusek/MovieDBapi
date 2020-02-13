import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  @Input() 
 
  genreId : number; 
 
  constructor( private _service: ApiService, private route: ActivatedRoute ) {}

  ngOnInit() {
    this._service.getGenres()
    .subscribe((data:any) => this._service.genreList = data.genres);

  
  }

  goToSearchResults(genreId : number){
    return this._service.getMovieByGenre(genreId);
  }

  worstMovie(){
    this._service.getMoviesByPopularity()
  .subscribe((data:any) => this._service.movieList = data.results);
  }
  
  highestGrossing(){
    this._service.getMoviesByRevenue()
  .subscribe((data:any) => this._service.movieList = data.results);
  }
}
