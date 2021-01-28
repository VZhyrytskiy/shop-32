import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { static: false }) appTitle: ElementRef;

  title = 'Amazing store';

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = this.title;
  }
}
