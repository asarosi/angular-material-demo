import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  name: string;
  img: string;
  country: string;
  usage: number;
  activity: number;
}

function generateRandomDate(from: Date, to: Date = new Date()) {
  return new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime())
  );
}

function getDayDiff(): number {
  return Math.round(
    (new Date().getTime() -
      generateRandomDate(new Date('02/01/2024')).getTime()) /
      (1000 * 3600 * 24)
  );
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  {
    img: 'https://picsum.photos/80',
    name: 'Sandra',
    country: 'https://flagsapi.com/BE/flat/64.png',
    usage: Math.floor(Math.random() * 100),
    activity: getDayDiff(),
  },
  {
    img: 'https://picsum.photos/80',
    name: 'Aron',
    country: 'https://flagsapi.com/HU/flat/64.png',
    usage: Math.floor(Math.random() * 100),
    activity: getDayDiff(),
  },
  {
    img: 'https://picsum.photos/80',
    name: 'Adam',
    country: 'https://flagsapi.com/US/flat/64.png',
    usage: Math.floor(Math.random() * 100),
    activity: getDayDiff(),
  },
  {
    img: 'https://picsum.photos/80',
    name: 'Geroge',
    country: 'https://flagsapi.com/FI/flat/64.png',
    usage: Math.floor(Math.random() * 100),
    activity: getDayDiff(),
  },
  {
    img: 'https://picsum.photos/80',
    name: 'Peter',
    country: 'https://flagsapi.com/SE/flat/64.png',
    usage: Math.floor(Math.random() * 100),
    activity: getDayDiff(),
  },
  {
    img: 'https://picsum.photos/80',
    name: 'Samanta',
    country: 'https://flagsapi.com/SR/flat/64.png',
    usage: Math.floor(Math.random() * 100),
    activity: getDayDiff(),
  },
  {
    img: 'https://picsum.photos/80',
    name: 'Caren',
    country: 'https://flagsapi.com/GR/flat/64.png',
    usage: Math.floor(Math.random() * 100),
    activity: getDayDiff(),
  },
  {
    img: 'https://picsum.photos/80',
    name: 'Amanda',
    country: 'https://flagsapi.com/AU/flat/64.png',
    usage: Math.floor(Math.random() * 100),
    activity: getDayDiff(),
  },
  {
    img: 'https://picsum.photos/80',
    name: 'Cindy',
    country: 'https://flagsapi.com/JP/flat/64.png',
    usage: Math.floor(Math.random() * 100),
    activity: getDayDiff(),
  },
  {
    img: 'https://picsum.photos/80',
    name: 'Olivia',
    country: 'https://flagsapi.com/AR/flat/64.png',
    usage: Math.floor(Math.random() * 100),
    activity: getDayDiff(),
  },
  {
    img: 'https://picsum.photos/80',
    name: 'Penny',
    country: 'https://flagsapi.com/BE/flat/64.png',
    usage: Math.floor(Math.random() * 100),
    activity: getDayDiff(),
  },
];

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<TableItem[]> {
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
   * Paginate the data (client-simge). If you're using server-simge pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]): TableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-simge). If you're using server-simge sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]): TableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'country':
          return compare(a.country, b.country, isAsc);
        case 'usage':
          return compare(a.usage, b.usage, isAsc);
        case 'activity':
          return compare(a.activity, b.activity, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example img/Name columns (for client-simge sorting). */
function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
