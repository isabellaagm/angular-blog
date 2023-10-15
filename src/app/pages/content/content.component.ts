import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/07/loki-disney-e1626286003674.jpg';
  contentTitle:string = 'MINHA NOTÍCIA';
  contentDescription:string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore dolores at nihil cum eligendi soluta error nostrum, accusamus, amet, iure illo perspiciatis necessitatibus enim incidunt inventore? Sed delectus veniam iste maxime, quibusdam iusto odit adipisci tempore esse consequuntur magnam eligendi sapiente facere, omnis id, fuga deleniti rerum veritatis natus excepturi nemo eius iure animi numquam. Laboriosam molestias sit corrupti temporibus, aliquid deleniti nostrum, quae incidunt ipsum sapiente repellendus vitae soluta tenetur autem animi ullam rem! Laboriosam perferendis voluptas dolorem commodi, fuga nulla ab quae similique magnam ratione maiores aspernatur numquam reprehenderit rem. Expedita, aliquam similique laudantium distinctio obcaecati quasi!';

  private id:string|null = '0';

  constructor( 
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = value.get('id')
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photo

  }

}
