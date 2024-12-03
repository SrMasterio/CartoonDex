import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './privacidad.page.html',
  styleUrls: ['./privacidad.page.scss'],
})
export class PrivacidadPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
