import { Component } from '@angular/core';
import { UrlCreationOptions } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name !: string;
  version !: string;
  owner !:string;
  git !: string;
  group !: string;
  date !: string;

  constructor() { }

  ngOnInit(): void {
    this.name = "Latogatni"
    this.version = "0.1"
    this.owner = "Boros Zoltán as BorosFather"
    this.git = "https://github.com/BorosFather"
    this.group ="Szoft II N"
    this.date ="2022.12.28"
  }
}
