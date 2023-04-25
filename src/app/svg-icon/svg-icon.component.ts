import {Component, Input, OnChanges, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SvgIconComponent implements OnChanges {

  @Input()
  public name?: string;

  @Input()
  public color: string = 'white';

  public svgIcon: any;

  @Input()
  public size: string = '';

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
  ) {
  }

  public ngOnChanges(): void {
    if (!this.name) {
      this.svgIcon = '';
      return;
    }
    this.httpClient
      .get(`assets/svg/${this.name}.svg`, { responseType: 'text' })
      .subscribe(value => {
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
      });
  }

}
