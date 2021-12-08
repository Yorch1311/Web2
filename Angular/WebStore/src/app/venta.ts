import { Inicio } from "./inicio";

export interface Venta {
  id: string;
  pedido: number;
  total: number;
  day: string;
  month: string;
  year: string;
  id_venta: string;
  address: string;
  productos: [];
}
