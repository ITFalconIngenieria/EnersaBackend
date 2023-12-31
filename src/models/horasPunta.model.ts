import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'HorasPunta'}},
})
export class horasPunta extends Entity {
  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {
      columnName: 'Id',
      dataType: 'int',
      dataLength: null,
      dataPrecision: 10,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  Id: number;

  @property({
    type: 'string',
    length: 50,
    mssql: {
      columnName: 'fechaInicial',
      dataType: 'date',
      dataLength: 20,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  fechaInicial?: string;

  @property({
    type: 'string',
    length: 50,
    mssql: {
      columnName: 'fechaFinal',
      dataType: 'date',
      dataLength: 20,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  fechaFinal?: string;

  @property({
    type: 'string',
    mssql: {
      columnName: 'horas',
      dataType: 'Int',
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  horas?: number;

  @property({
    type: 'string',
    mssql: {
      columnName: 'multiplicador',
      dataType: 'Int',
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  multiplicador?: number;

  @property({
    type: 'boolean',
    required: false,
    mssql: {
      columnName: 'Estado',
      dataType: 'bit',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  Estado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<horasPunta>) {
    super(data);
  }
}

export interface horasPuntaRelations {
  // describe navigational properties here
}

export type horasPuntaWithRelations = horasPunta & horasPuntaRelations;
