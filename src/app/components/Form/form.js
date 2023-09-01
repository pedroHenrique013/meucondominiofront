import Botao from "../Botao/botao";
import Logo from "../Logo/logo";
import Link from "next/link";

export default function Form() {
  return (
    <div className="flex flex-col ml-32 mt-20 items-center">
      <Logo />
      <p className="mb-10">Entre com o seu dados para acessar o portal</p>
      <form
        method="#"
        action="/inicial"
        className="w-96 flex flex-col items-center"
      >
        <div className="flex flex-col w-full mb-8">
          <label>Email</label>
          <input type="text" name="email" className="border-black border-b-2" />
        </div>

        <div className="flex flex-col w-full mb-10">
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            className="border-black border-b-2"
          />
        </div>

        <Botao>Entrar</Botao>
        <span className="mt-4">
          Não tem uma conta?{" "}
          <Link href="/cadastro" className="font-bold">
            Cadastre-se
          </Link>
        </span>
      </form>
    </div>
  );
}
