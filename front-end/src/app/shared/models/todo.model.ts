export interface ITODO {
  id: number;
  titulo: string;
  descricao?: string;
  completada: boolean;
  dataCriacaoTarefa: Date;
  prazoFinal?: Date;
  prioridade: string;
}

export interface ICreateTodo {
  titulo: string;
  descricao?: string;
  prazoFinal?: Date;
  prioridade: string;
}

export interface IUpdateTodo {
  titulo?: string;
  descricao?: string | null;
  completada?: boolean;
  prazoFinal?: Date | null;
  prioridade?: string;
}
