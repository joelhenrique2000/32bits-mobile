export default class Usuario  {

  constructor(id: string, nome:string, email: string, senha: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  id: string;

  nome: string;

  email: string;

  senha: string;
}
