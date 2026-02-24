interface PerfilUsuario {
  username: string;
  email: string;
  edad: number;
  biografia?: string;   
  telefono?: string;   
}

const usuario1: PerfilUsuario = {
  username: "juan_dev",
  email: "juan@email.com",
  edad: 28,
  biografia: "Desarrollador frontend apasionado por TypeScript",
  telefono: "123456789"
};

const usuario2: PerfilUsuario = {
  username: "maria_code",
  email: "maria@email.com",
  edad: 25
};

console.log(usuario1);
console.log(usuario2);
 