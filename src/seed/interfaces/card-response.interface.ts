export interface CardResponse {
  forEach: any;
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  id: string;
}
