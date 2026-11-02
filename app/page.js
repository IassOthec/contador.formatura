"use client";

import { useEffect, useState } from "react";

const DATA_FORMATURA = new Date("2026-12-18T19:00:00-04:00");

export default function Home() {
    const [tempo, setTempo] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
    });

    useEffect(() => {
        function atualizarContador() {
            const diferenca = Math.max(
                0,
                DATA_FORMATURA.getTime() - Date.now()
            );

            setTempo({
                dias: Math.floor(diferenca / 86400000),
                horas: Math.floor((diferenca / 3600000) % 24),
                minutos: Math.floor((diferenca / 60000) % 60),
                segundos: Math.floor((diferenca / 1000) % 60),
            });
        }

        atualizarContador();
        const intervalo = setInterval(atualizarContador, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const unidades = [
        { nome: "DIAS", valor: tempo.dias },
        { nome: "HORAS", valor: tempo.horas },
        { nome: "MINUTOS", valor: tempo.minutos },
        { nome: "SEGUNDOS", valor: tempo.segundos },
    ];

    return (
        <main className="pagina">
            <section className="cartao-principal">
                <p className="etiqueta">✦ UM SONHO, UMA CONQUISTA ✦</p>
                <img
                    src="https://i.pinimg.com/736x/65/48/d8/6548d8641c2f3f8374f30aa0d6a31d39.jpg"
                    alt="Capelo de formatura"
                    className="icone-imagem"
                />
                <h1>
                    A contagem para a
                    <span>FORMATURA</span>
                    começou!
                </h1>

                <p className="subtitulo">
                    Cada segundo nos aproxima de um momento inesquecível e extremamente esperado.
                </p>

                <div className="contador">
                    {unidades.map((unidade) => (
                        <div className="bloco-tempo" key={unidade.nome}>
                            <div className="numero">
                                {String(unidade.valor).padStart(2, "0")}
                            </div>
                            <p>{unidade.nome}</p>
                        </div>
                    ))}
                </div>

                <div className="mensagem-final">
                    ✮⋆˙ O futuro nos espera! ˙⋆✮
                </div>

                <p className="rodape">
                    Uma jornada termina. Mas uma nova história irá começar.
                </p>
            </section>
        </main>
    );
}
