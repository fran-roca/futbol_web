export class Valoracion {
    id_valoracion!: number;
    id_scout!: number;
    fecha!: Date;
    id_visualizacion!: number;
    id_equipo!: number;
    local!: number;
    visitante!: number;
    campeonato!: string;
    id_seguimiento!: number;
    descripcion!: string;
    id_jugador!: number;

    constructor(id_valoracion:number, id_scout:number, fecha:Date, id_visualizacion:number, 
        id_equipo:number, local:number, visitante:number, campeonato:string, 
        id_seguimiento:number, descripcion:string, id_jugador:number){
        
            this.id_valoracion = id_valoracion;
            this.id_scout = id_scout;
            this.fecha = fecha;
            this.id_visualizacion = id_visualizacion;
            this.id_equipo = id_equipo;
            this.local = local;
            this.visitante = visitante;
            this.campeonato = campeonato;
            this.id_seguimiento = id_seguimiento;
            this.descripcion = descripcion;
            this.id_jugador = id_jugador;
    }
}