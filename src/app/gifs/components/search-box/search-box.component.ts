import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  // INFO: Sin ViewChild() => evento keyup
  // template: `
  //   <h5>Buscar:</h5>
  //   <input
  //     type="text"
  //     class="form-control"
  //     placeholder="Buscar gifs..."
  //     (keyup.enter)="searchTag( txtTagInput.value )"
  //     #txtTagInput
  //   />
  // `,
  template: ` <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />`,
})
export class SearchBoxComponent {
  // ViewChild => Solo selecciona 1 campo, ViewChildren => selecciona varios campos
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {
    
  }

  // searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
