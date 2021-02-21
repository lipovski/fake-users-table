export interface Iuser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

export interface IheadCells {
  id: string;
  label: string;
  sorted?: boolean;
}
