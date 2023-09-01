import Botao from "../Botao/botao";
import Logo from "../Logo/logo";

export default function FormCadastro() {
  return (
    <div className="flex flex-col ml-32 mt-20 items-center">
      <Logo />
      <p className="mb-10">Entre com o seu dados para se cadastrar</p>
      <form method="#" action="/" className="w-96 flex flex-col items-center">
        <div className="flex flex-col w-full mb-8">
          <label>Nome</label>
          <input type="text" name="nome" className="border-black border-b-2" />
        </div>

        <div className="flex flex-col w-full mb-8">
          <label>CPF</label>
          <input type="number" name="cpf" className="border-black border-b-2" />
        </div>

        <div className="flex flex-col w-full mb-8">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="border-black border-b-2"
          />
        </div>

        <div className="flex flex-col w-full mb-8">
          <label>Fone/Whatsapp</label>
          <input
            type="number"
            name="fone"
            className="border-black border-b-2"
          />
        </div>
        <div className="flex flex-col w-full mb-10">
          <label>Apartamento</label>
          <input
            type="text"
            name="apartamento"
            className="border-black border-b-2"
          />
        </div>
        <div className="flex flex-col w-full mb-8">
          <label>Bloco</label>
          <input type="text" name="bloco" className="border-black border-b-2" />
        </div>

        <div className="flex flex-col w-full mb-10">
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            className="border-black border-b-2"
          />
        </div>

        <div className="flex flex-col w-full mb-10">
          <label>Confirma Senha</label>
          <input
            type="password"
            name="senha"
            className="border-black border-b-2"
          />
        </div>
        <Botao>Cadastrar</Botao>
      </form>
    </div>
  );
}
