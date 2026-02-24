interface Oid {
  $oid: string;
}

interface Fecha {
  $date: string;
}

interface Codes {
  number: number;
  string: string;
  boolean: boolean;
}

interface Respuesta {
  _id: Oid;
  name: string;
  email: string;
  movie_id: Oid;
  text: string;
  codes: Codes;
  date: Fecha;
}
