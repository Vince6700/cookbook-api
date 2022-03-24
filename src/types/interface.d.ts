export interface IItem {
  name: string;
  scale?: string;
  quantity?: number;
  lists: IList[];
}

export interface IList {
  name: string;
  description?: string;
  items?: IItem[];
  doneItems?: IItem[];
}
