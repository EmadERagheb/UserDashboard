import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pagination-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './pagination-header.component.html',
  styleUrl: './pagination-header.component.scss',
})
export class PaginationHeaderComponent {
  totalItems = input.required<number>();
  pageSize = input.required<number>();
  pageIndex = input.required<number>();
}
