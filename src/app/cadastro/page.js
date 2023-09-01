import PredioBackgroun from "../components/PredioBackground/predioBackgroun";
import FormCadastro from "../components/Form-Cadastro/formCadastro";

export default function () {
  return (
    <main className="w-full flex justify-between">
      <FormCadastro />
      <PredioBackgroun />
    </main>
  );
}
