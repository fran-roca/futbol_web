import { AutocompleteDropdown } from "./autocomplete-dropdown";
import { CatalogService } from "../services/catalog.service";

export class CatalogAutocomplete implements AutocompleteDropdown{
    table!: string;
    list: any;
    filteredList: any;
    selected: any;

    constructor( table:string) {
        this.table = table
     }

    filter(catalogService: CatalogService, event: any) {
      let query = event.query;
      catalogService.getCatalog(this.table, query).then(list => {
        this.filteredList = list;
        console.log(list)
      });
    }
}
  