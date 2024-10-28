import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,FormsModule,SharedModule]
})
export class HomePage implements OnInit {

  characters: any[] = [];
  params = {} as any;

  constructor(
    private rickAndMortySvc: RickAndMortyService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters()
  }


  getCharacters(event?:any){
    this.params.page += 1;

    this.rickAndMortySvc.getCharacters(this.params).subscribe({
      next:(res: any) => {

        this.characters.push(...res.results)
        console.log(this.characters);

        if(event) event.target.complete();
      },
      error: (error: any) => {
        if(event) event.target.complete();
      }
    })
  }

  searchCharacters(){
    this.params.page = 1;

    this.rickAndMortySvc.getCharacters(this.params).subscribe({
      next:(res: any) => {

        this.characters = res.results

      },
      error: (error: any) => {
      }
    })
  }

  onClick(){
    this.userService.logout()
    .then(() =>{
      this.router.navigate(['/login']);
    })
    .catch(error => console.error(error));
  }
}
