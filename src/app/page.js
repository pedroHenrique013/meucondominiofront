import PredioBackground from "./components/PredioBackground/predioBackground";
import Form from "./components/Form/form";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center">
      <div class="lg:w-3/5">
      <Form />
      </div>
      <div class="lg:w-2/5">
      <PredioBackground />
      </div>
    </main>
  );
}
