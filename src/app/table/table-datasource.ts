import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  name: string;
  img: string | Observable<any>;
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

const COUNTRIES = [
  {
    cca2: 'CY',
  },
  {
    cca2: 'ER',
  },
  {
    cca2: 'LR',
  },
  {
    cca2: 'BM',
  },
  {
    cca2: 'VA',
  },
  {
    cca2: 'CK',
  },
  {
    cca2: 'SO',
  },
  {
    cca2: 'ZM',
  },
  {
    cca2: 'VE',
  },
  {
    cca2: 'TM',
  },
  {
    cca2: 'AL',
  },
  {
    cca2: 'HR',
  },
  {
    cca2: 'GB',
  },
  {
    cca2: 'SD',
  },
  {
    cca2: 'TL',
  },
  {
    cca2: 'CG',
  },
  {
    cca2: 'AZ',
  },
  {
    cca2: 'KE',
  },
  {
    cca2: 'AS',
  },
  {
    cca2: 'CI',
  },
  {
    cca2: 'SN',
  },
  {
    cca2: 'VN',
  },
  {
    cca2: 'SV',
  },
  {
    cca2: 'AF',
  },
  {
    cca2: 'MF',
  },
  {
    cca2: 'LV',
  },
  {
    cca2: 'GT',
  },
  {
    cca2: 'KW',
  },
  {
    cca2: 'ST',
  },
  {
    cca2: 'KG',
  },
  {
    cca2: 'PL',
  },
  {
    cca2: 'GU',
  },
  {
    cca2: 'GH',
  },
  {
    cca2: 'LT',
  },
  {
    cca2: 'AM',
  },
  {
    cca2: 'JE',
  },
  {
    cca2: 'GD',
  },
  {
    cca2: 'TJ',
  },
  {
    cca2: 'ET',
  },
  {
    cca2: 'EH',
  },
  {
    cca2: 'MA',
  },
  {
    cca2: 'PR',
  },
  {
    cca2: 'CX',
  },
  {
    cca2: 'NZ',
  },
  {
    cca2: 'BN',
  },
  {
    cca2: 'NU',
  },
  {
    cca2: 'RO',
  },
  {
    cca2: 'BY',
  },
  {
    cca2: 'PA',
  },
  {
    cca2: 'CM',
  },
  {
    cca2: 'CZ',
  },
  {
    cca2: 'GR',
  },
  {
    cca2: 'ML',
  },
  {
    cca2: 'MQ',
  },
  {
    cca2: 'FR',
  },
  {
    cca2: 'PK',
  },
  {
    cca2: 'PE',
  },
  {
    cca2: 'BB',
  },
  {
    cca2: 'GL',
  },
  {
    cca2: 'TD',
  },
  {
    cca2: 'HU',
  },
  {
    cca2: 'KM',
  },
  {
    cca2: 'BD',
  },
  {
    cca2: 'TK',
  },
  {
    cca2: 'FJ',
  },
  {
    cca2: 'CN',
  },
  {
    cca2: 'CO',
  },
  {
    cca2: 'VG',
  },
  {
    cca2: 'DZ',
  },
  {
    cca2: 'MV',
  },
  {
    cca2: 'MY',
  },
  {
    cca2: 'KY',
  },
  {
    cca2: 'ES',
  },
  {
    cca2: 'IE',
  },
  {
    cca2: 'EE',
  },
  {
    cca2: 'PY',
  },
  {
    cca2: 'UY',
  },
  {
    cca2: 'ZA',
  },
  {
    cca2: 'LC',
  },
  {
    cca2: 'VU',
  },
  {
    cca2: 'FI',
  },
  {
    cca2: 'SE',
  },
  {
    cca2: 'LB',
  },
  {
    cca2: 'US',
  },
  {
    cca2: 'CL',
  },
  {
    cca2: 'NF',
  },
  {
    cca2: 'MS',
  },
  {
    cca2: 'AU',
  },
  {
    cca2: 'BZ',
  },
  {
    cca2: 'GY',
  },
  {
    cca2: 'MN',
  },
  {
    cca2: 'TV',
  },
  {
    cca2: 'DO',
  },
  {
    cca2: 'GQ',
  },
  {
    cca2: 'KN',
  },
  {
    cca2: 'BO',
  },
  {
    cca2: 'NP',
  },
  {
    cca2: 'TF',
  },
  {
    cca2: 'TW',
  },
  {
    cca2: 'BJ',
  },
  {
    cca2: 'BG',
  },
  {
    cca2: 'MD',
  },
  {
    cca2: 'IM',
  },
  {
    cca2: 'BT',
  },
  {
    cca2: 'KH',
  },
  {
    cca2: 'AG',
  },
  {
    cca2: 'HT',
  },
  {
    cca2: 'CV',
  },
  {
    cca2: 'GE',
  },
  {
    cca2: 'BI',
  },
  {
    cca2: 'BS',
  },
  {
    cca2: 'MU',
  },
  {
    cca2: 'LY',
  },
  {
    cca2: 'MW',
  },
  {
    cca2: 'MX',
  },
  {
    cca2: 'SZ',
  },
  {
    cca2: 'PG',
  },
  {
    cca2: 'DM',
  },
  {
    cca2: 'LI',
  },
  {
    cca2: 'RU',
  },
  {
    cca2: 'IL',
  },
  {
    cca2: 'SG',
  },
  {
    cca2: 'UG',
  },
  {
    cca2: 'SK',
  },
  {
    cca2: 'TO',
  },
  {
    cca2: 'AE',
  },
  {
    cca2: 'YT',
  },
  {
    cca2: 'SR',
  },
  {
    cca2: 'UZ',
  },
  {
    cca2: 'SA',
  },
  {
    cca2: 'EG',
  },
  {
    cca2: 'IT',
  },
  {
    cca2: 'MG',
  },
  {
    cca2: 'NC',
  },
  {
    cca2: 'CA',
  },
  {
    cca2: 'VI',
  },
  {
    cca2: 'MH',
  },
  {
    cca2: 'MR',
  },
  {
    cca2: 'GM',
  },
  {
    cca2: 'TT',
  },
  {
    cca2: 'SC',
  },
  {
    cca2: 'JP',
  },
  {
    cca2: 'BR',
  },
  {
    cca2: 'SY',
  },
  {
    cca2: 'SH',
  },
  {
    cca2: 'TZ',
  },
  {
    cca2: 'AD',
  },
  {
    cca2: 'IR',
  },
  {
    cca2: 'TG',
  },
  {
    cca2: 'MT',
  },
  {
    cca2: 'KR',
  },
  {
    cca2: 'WS',
  },
  {
    cca2: 'DE',
  },
  {
    cca2: 'NE',
  },
  {
    cca2: 'JM',
  },
  {
    cca2: 'NI',
  },
  {
    cca2: 'GN',
  },
  {
    cca2: 'AI',
  },
  {
    cca2: 'AX',
  },
  {
    cca2: 'BE',
  },
  {
    cca2: 'PT',
  },
  {
    cca2: 'DK',
  },
  {
    cca2: 'PH',
  },
  {
    cca2: 'WF',
  },
  {
    cca2: 'AT',
  },
  {
    cca2: 'GW',
  },
  {
    cca2: 'MC',
  },
  {
    cca2: 'NA',
  },
  {
    cca2: 'CR',
  },
  {
    cca2: 'BA',
  },
  {
    cca2: 'MO',
  },
  {
    cca2: 'MZ',
  },
  {
    cca2: 'RE',
  },
  {
    cca2: 'ME',
  },
  {
    cca2: 'KP',
  },
  {
    cca2: 'MP',
  },
  {
    cca2: 'UA',
  },
  {
    cca2: 'IQ',
  },
  {
    cca2: 'GS',
  },
  {
    cca2: 'AO',
  },
  {
    cca2: 'SL',
  },
  {
    cca2: 'FM',
  },
  {
    cca2: 'CU',
  },
  {
    cca2: 'TC',
  },
  {
    cca2: 'RS',
  },
  {
    cca2: 'EC',
  },
  {
    cca2: 'FO',
  },
  {
    cca2: 'AQ',
  },
  {
    cca2: 'PS',
  },
  {
    cca2: 'TR',
  },
  {
    cca2: 'KI',
  },
  {
    cca2: 'KZ',
  },
  {
    cca2: 'GI',
  },
  {
    cca2: 'IS',
  },
  {
    cca2: 'PW',
  },
  {
    cca2: 'QA',
  },
  {
    cca2: 'CH',
  },
  {
    cca2: 'PF',
  },
  {
    cca2: 'PN',
  },
  {
    cca2: 'JO',
  },
  {
    cca2: 'MM',
  },
  {
    cca2: 'TH',
  },
  {
    cca2: 'AW',
  },
  {
    cca2: 'NG',
  },
  {
    cca2: 'BH',
  },
  {
    cca2: 'LA',
  },
  {
    cca2: 'CC',
  },
  {
    cca2: 'DJ',
  },
  {
    cca2: 'SB',
  },
  {
    cca2: 'IN',
  },
  {
    cca2: 'SM',
  },
  {
    cca2: 'LU',
  },
  {
    cca2: 'FK',
  },
  {
    cca2: 'CF',
  },
  {
    cca2: 'BW',
  },
  {
    cca2: 'CW',
  },
  {
    cca2: 'GG',
  },
  {
    cca2: 'NO',
  },
  {
    cca2: 'GA',
  },
  {
    cca2: 'ZW',
  },
  {
    cca2: 'LS',
  },
  {
    cca2: 'SI',
  },
  {
    cca2: 'AR',
  },
  {
    cca2: 'BF',
  },
  {
    cca2: 'YE',
  },
  {
    cca2: 'CD',
  },
  {
    cca2: 'OM',
  },
  {
    cca2: 'ID',
  },
  {
    cca2: 'NR',
  },
  {
    cca2: 'RW',
  },
  {
    cca2: 'MK',
  },
  {
    cca2: 'NL',
  },
  {
    cca2: 'TN',
  },
  {
    cca2: 'SS',
  },
  {
    cca2: 'HN',
  },
  {
    cca2: 'VC',
  },
  {
    cca2: 'LK',
  },
  {
    cca2: 'HK',
  },
];

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
    for (let i = 0; i < Math.floor(Math.random() * 20) + 100; i++) {
      this.data.push({
        img: 'https://picsum.photos/80?random=' + i,
        name: 'Test User ' + i,
        country:
          'https://flagsapi.com/' +
          COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)].cca2 +
          '/flat/64.png',
        usage: Math.floor(Math.random() * 100),
        activity: getDayDiff(),
      });
    }
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
