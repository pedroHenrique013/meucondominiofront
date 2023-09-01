import PredioBackgroun from "./components/PredioBackground/predioBackgroun";
import Form from "./components/Form/form";

export default function Home() {
  return (
    <main className="w-full flex justify-between">
      <Form />
      <PredioBackgroun />
    </main>
  );
}
