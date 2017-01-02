import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../my-new-service.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css'],
  providers:[MyNewServiceService]
})
export class ComponenteComponent implements OnInit {

  constructor(public service: MyNewServiceService) { }

  ngOnInit() {
    this.service.tdd()
  }

  publicar (){
    return this.service.tdd()
  }

}
