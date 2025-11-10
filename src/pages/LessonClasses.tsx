import React, { useState } from 'react';

const LessonClasses: React.FC = () => {
  const [selected, setSelected] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const correct = 'b'; // resposta correta (ajuste conforme necessário)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected('');
    setSubmitted(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-textPrimary">Classes — teoria e exercício</h1>

      <section className="bg-bgSecondary p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-textPrimary">Classes</h2>
        <p className="text-textPrimary mb-3">
          Uma <strong>classe</strong> é uma estrutura que define um tipo de dado composto em programação orientada a objetos. Ela descreve atributos (estado)
          e métodos (comportamento) que os objetos dessa classe terão. A partir de uma classe, você pode instanciar <em>objetos</em> — cada objeto
          representa uma entidade concreta criada a partir da definição da classe.
        </p>

        <ul className="list-disc pl-5 text-textPrimary">
          <li>Classe = molde/plantilla que descreve propriedades e comportamentos.</li>
          <li>Objeto = instância concreta da classe, com valores específicos.</li>
          <li>Membros comuns: campos (propriedades), métodos (funções), construtor.</li>
        </ul>
      </section>

      <section className="bg-bgSecondary p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-3 text-textPrimary">Exercício prático</h2>
        <p className="text-textPrimary mb-4">Escolha a alternativa que melhor define o que é uma <strong>classe</strong>:</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <fieldset>
            <legend className="sr-only">Opções</legend>

            <label className={`block p-3 rounded border ${selected === 'a' ? 'border-accent/70 bg-accent/10' : 'border-borderDark'} cursor-pointer`}>
              <input
                type="radio"
                name="option"
                value="a"
                checked={selected === 'a'}
                onChange={() => setSelected('a')}
                className="mr-3"
              />
              (A) Um objeto específico criado em tempo de execução.
            </label>

            <label className={`block p-3 rounded border ${selected === 'b' ? 'border-accent/70 bg-accent/10' : 'border-borderDark'} cursor-pointer`}>
              <input
                type="radio"
                name="option"
                value="b"
                checked={selected === 'b'}
                onChange={() => setSelected('b')}
                className="mr-3"
              />
              (B) Um molde/definição que descreve as propriedades e comportamentos de um tipo de objeto.
            </label>

            <label className={`block p-3 rounded border ${selected === 'c' ? 'border-accent/70 bg-accent/10' : 'border-borderDark'} cursor-pointer`}>
              <input
                type="radio"
                name="option"
                value="c"
                checked={selected === 'c'}
                onChange={() => setSelected('c')}
                className="mr-3"
              />
              (C) Uma biblioteca externa usada para estender a linguagem.
            </label>
          </fieldset>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={!selected}
              className="hero-cta inline-flex items-center justify-center px-4 py-2 rounded-md disabled:opacity-50"
            >
              Enviar
            </button>

            <button type="button" onClick={handleReset} className="px-4 py-2 rounded-md border border-borderDark">
              Reiniciar
            </button>
          </div>
        </form>

        {submitted && (
          <div className={`mt-4 p-4 rounded-md border ${selected === correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            {selected === correct ? (
              <p className="text-green-800 font-semibold">Correto! Uma classe é uma definição (molde) que descreve propriedades e comportamentos.</p>
            ) : (
              <p className="text-red-800 font-semibold">Resposta incorreta. Tente novamente ou veja a explicação abaixo.</p>
            )}

            <details className="mt-3 text-textPrimary">
              <summary className="cursor-pointer">Ver explicação</summary>
              <p className="mt-2">
                Pense na classe como a planta de uma casa: ela descreve como a casa deve ser (quartos, portas, janelas). O objeto é a casa construída
                a partir dessa planta — uma instância com valores concretos.
              </p>
            </details>
          </div>
        )}
      </section>
    </div>
  );
};

export default LessonClasses;
