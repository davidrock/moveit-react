export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className="flex flex-col items-center content-center text-center h-full bg-white rounded-md shadow">
      {hasActiveChallenge ? (
        <div className="h-full flex flex-col">
          <header className="text-blue-500 text-xl leading-7 px-4 py-3 border-b">Ganhe 400 xp</header>
          <main className="flex flex-1 flex-col items-center justify-center">
            <img src="icons/body.svg" alt=" " />
            <strong className="font-3xl leading-6 mt-3 mb-1">Novo desafio</strong>
            <p className="leading-6">Levante e faça uma caminhada de 3 minutos.</p>
          </main>
          <footer className="grid grid-cols-2 gap-4">
            <button className="h-6 flex items-center justify-center focus:ring border-0 bg-blue-500 rounded">Falhei</button>
            <button className="">Completei</button>
          </footer>
        </div>
      ) : (
        <div className="flex flex-col m-auto items-center">
          <strong className="font-medium text-2xl leading-6">
            Finalize um ciclo para receber um desafio
          </strong>
          <p className="flex flex-col items-center leading-6 mt-12">
            <img src="icons/level-up.svg" alt="level up" className="mb-2" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
