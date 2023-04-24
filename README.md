# onboarding_projects_byte

Desenvolvendo API de uma hamburgueria utilizando Node.js, TypeScript e Prisma.

### Passo a passo de como rodar:

1. Clonar o repositório utilizando esse link:

```console
https://github.com/leonardodantas4/onboarding_projects_byte.git
```

2. Criar um arquivo .env na pasta do seu projeto com o seguinte conteúdo dentro:

```console
DATABASE_URL="file:./dev.db"
```

3. Executar os seguintes comandos no terminal para iniciar o projeto:

```console
npm install
```
```console
npx prisma generate
```
```console
npx prisma migrate dev
```
```console
npm run dev
```

4. Utilize o insomnia para simular as requisições:

#### Cliente
+ http://localhost:3000/cliente/create (POST)
+ http://localhost:3000/cliente/update/:cpf (PUT)
+ http://localhost:3000/cliente/delete/:cpf (DELETE)

#### body

Para criar um cliente:
```json
{
    "nome": "", 
    "cpf": "", 
    "celular": "", 
    "endereco": ""
}
```
--

Para atualizar um cliente:
```json
{
    "nome": "", 
    "celular": "", 
    "endereco": ""
}
```
#### Hamburguer

* http://localhost:3000/hamburguer/create (POST)
* http://localhost:3000/hamburguer/update/:nome (PUT)
* http://localhost:3000/hamburguer/delete/:nome (DELETE)

#### body:
Para criar um hamburguer:
```json
{
    "nome": "", 
    "descricao": "", 
    "preco": ,
    "ingredientes":""
}
```
--

Para atualizar um hamburguer:
```json
{
    "descricao": "", 
    "preco": "",
    "ingredientes": ""
}
```
