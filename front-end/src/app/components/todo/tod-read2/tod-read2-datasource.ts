import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { ITODO } from '../../../shared/models/todo.model';

// TODO: Replace this with your own data model type
// export interface TodRead2Item {
//   name: string;
//   id: number;
// }

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ITODO[] = [
  {
    id: 1,
    titulo: 'Hydrogen',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 2,
    titulo: 'Helium',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 3,
    titulo: 'Lithium',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 4,
    titulo: 'Beryllium',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 5,
    titulo: 'Boron',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 6,
    titulo: 'Carbon',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 7,
    titulo: 'Nitrogen',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 8,
    titulo: 'Oxygen',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 9,
    titulo: 'Fluorine',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 10,
    titulo: 'Neon',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 11,
    titulo: 'Sodium',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 12,
    titulo: 'Magnesium',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 13,
    titulo: 'Aluminum',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 14,
    titulo: 'Silicon',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 15,
    titulo: 'Phosphorus',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 16,
    titulo: 'Sulfur',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 17,
    titulo: 'Chlorine',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 18,
    titulo: 'Argon',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 19,
    titulo: 'Potassium',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
  {
    id: 20,
    titulo: 'Calcium',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  },
];

/**
 * Data source for the TodRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TodRead2DataSource extends DataSource<ITODO> {
  data: ITODO[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ITODO[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange
      ).pipe(
        map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        })
      );
    } else {
      throw Error(
        'Please set the paginator and sort on the data source before connecting.'
      );
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ITODO[]): ITODO[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ITODO[]): ITODO[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'titulo':
          return compare(a.titulo, b.titulo, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
