import { AutocompleteDropdown } from "./autocomplete-dropdown";
import { CatalogService } from "../services/catalog.service";

export class PaisAutocomplete implements AutocompleteDropdown{
    list: any;
    filteredList: any;
    selected: any;

    constructor( ) {    }

    filter(catalogService: CatalogService, event: any) {
      let query = event.query;
      catalogService.getPaises(query).then(list => {
        this.filteredList = list;
      });
    }
}
  