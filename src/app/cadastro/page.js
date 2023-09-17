import PredioBackground from "../components/PredioBackground/predioBackground";
import FormCadastro from "../components/Form-Cadastro/formCadastro";

export default function Register () {
  return (
    <main className="w-full h-full flex items-center">
      <div className="lg:w-3/5">
        <FormCadastro />
      </div>
      <div className="lg:w-2/5">
        <PredioBackground />
      </div>
    </main>
  );
}
