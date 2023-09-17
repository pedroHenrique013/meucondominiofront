"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Botao from "../Botao/botao";
import Logo from "../Logo/logo";

export default function FormCadastro() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [fone, setFone] = useState('');
  const [apartamento, setApartamento] = useState('');
  const [bloco, setBloco] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmasenha, setConfirmaSenha] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !cpf || !email || !fone || !apartamento || !bloco || !senha || !confirmasenha) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/meucondominio/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, cpf, email, fone, apartamento, bloco, senha, confirmasenha }),
      });

      const data = await response.json();

      router.push('/');
      console.log(data);
    } catch (error) {
      console.error('Erro ao enviar dados para a API:', error);
    }
  };

  return (
    <div className="flex flex-col max-xl:w-screen  max-xl:mt-6 items-center">
      <Logo />
      <p className="mb-10">Entre com o seu dados para se cadastrar</p>
      <form onSubmit={handleSubmit} className="w-100 flex flex-col items-center">

        <div className="relative flex flex-col w-full mb-8">
          <input type="text" id="nome" name="nome" required value={nome} onChange={(e) => setNome(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
          <label for="nome" className="absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
        </div>

        <div className="relative flex flex-col w-full mb-8">
          <input type="number" id="cpf" name="cpf" required value={cpf} onChange={(e) => setCpf(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
          <label for="cpf" className="absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CPF</label>
        </div>
         
        <div className="relative flex flex-col w-full mb-8">
          <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
          <label for="email" className="absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
        </div>

        <div className="relative flex flex-col w-full mb-8">
          <input type="number" id="fone" name="fone" required value={fone} onChange={(e) => setFone(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
          <label for="fone" className="absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fone/WhatsApp</label>
        </div>

        <div className="relative flex flex-col w-full mb-8">
          <input type="text" id="apartamento" name="apartamento" required value={apartamento} onChange={(e) => setApartamento(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
          <label for="apartamento" className="absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apartamento</label>
        </div>

        <div className="relative flex flex-col w-full mb-8">
          <input type="text" id="bloco" name="bloco" required value={bloco} onChange={(e) => setBloco(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
          <label for="bloco" className="absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bloco</label>
        </div>

        <div className="relative flex flex-col w-full mb-8">
          <input type="password" id="senha" name="senha" required value={senha} onChange={(e) => setSenha(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
          <label for="senha" className="absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Senha</label>
        </div>

        <div className="relative flex flex-col w-full mb-8">
          <input type="password" id="confirmasenha" name="confirmasenha" required value={confirmasenha} onChange={(e) => setConfirmaSenha(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
          <label for="confirmasenha" className="absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmar Senha</label>
        </div>

        <Botao onClick={() => router.push('/')}>Cadastrar</Botao>
      </form>
    </div>
  );
}
