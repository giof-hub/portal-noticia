import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit{
  
  @Input() categories: Category[];

  ngOnInit(): void {
    
  }



}
