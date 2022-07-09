import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Valoracion } from 'src/app/entities/valoracion';
import { ValoracionService } from 'src/app/services/valoracion.service';

@Component({
  selector: 'valoracion-table',
  templateUrl: './valoracion-table.component.html',
  styleUrls: ['./valoracion-table.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class ValoracionTableComponent implements OnChanges {

  @Input()
  jugadorId!: number;
  valDialog!: boolean;
  valoraciones!: Valoracion[];
  selectedValoraciones!: Valoracion[];



  constructor(private valoracionService: ValoracionService,
              private messageService: MessageService, 
              private confirmationService: ConfirmationService) { }

  ngOnChanges() {
    this.loadValoraciones();
  }

  async loadValoraciones(){
    console.log('jugador' +this.jugadorId);
    (await (this.valoracionService.getValoracion([], this.jugadorId))).subscribe({
      next: (response: Valoracion[]) => {
        this.valoraciones = response;
        
      },
      error: (err: any) => {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Error cargando valoraciones', life: 3000});
        
      },
      complete: () => {
        console.log('completed getValoracion');
      },
    });
  }
  deleteSelectedValoraciones() {
    this.confirmationService.confirm({
        message: '¿Está seguro que quiere borrar las valoraciones seleccionadas?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            //this.products = this.products.filter(val => !this.selectedProducts.includes(val));
            //this.selectedProducts = null;
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        }
    });
}

}
