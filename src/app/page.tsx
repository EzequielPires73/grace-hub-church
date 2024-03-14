import { ButtonPrimary } from "@/components/buttons/button-primary";
import { Title } from "@/components/typography/title";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full max-w-lg mx-auto h-full min-h-screen gap-6 flex-col">
      <Image src="/assets/logo_v.png" alt="Logo" width={148} height={151} />
      <h1 className="text-xl font-semibold text-zinc-900 text-center">Seja muito bem vindo ao Agenda Pastoral - AD Catalão</h1>
      <div className="flex gap-4">
        <ButtonPrimary title="Entre na sua conta" path="/login"/>
      </div>
    </main>
  );
}
