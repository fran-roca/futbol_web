import { AutocompleteDropdown } from "./autocomplete-dropdown";
import { JugadorService } from "../services/jugador.service";

export class JugadorAutocomplete implements AutocompleteDropdown{
    list: any;
    filteredList: any;
    selected: any;

    constructor( ) {
     }

    filter(jugadorService: JugadorService, event: any) {
      let query = event.query;
      jugadorService.getJugador(query).then(list => {
        this.filteredList = list;
      });
    }
}
  