import Botao from "../Botao/botao";
import Logo from "../Logo/logo";
import Link from "next/link";

export default function Form() {
  return (
    <div className="flex flex-col max-xl:w-screen max-xl:mt-52 items-center">
      <Logo />
      <p className="mb-10">Entre com o seu dados para acessar o portal</p>
      <form
        method="#"
        action="/inicial"
        className="w-96 flex flex-col items-center"
      >
       <div className="relative flex flex-col w-full mb-8">
          <input type="email" id="email" name="email" class="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
          <label for="email" class="absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
        </div>

        <div className="relative flex flex-col w-full mb-8">
          <input type="password" id="senha" name="senha" class="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
          <label for="senha" class="absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Senha</label>
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
