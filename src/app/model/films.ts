import { Result } from './filmInfo';

export class Films {
    constructor(public page: number,
        public total_results: number,
        public total_pages: number,
        public exa: string,
        public results: Result[]) {

    }
}
