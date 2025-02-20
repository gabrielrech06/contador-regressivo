import React from "react";
import Title from "../components/Title";
import Counter from "../components/Counter";
import useCountdown from "../hooks/useCountdown";

const Contador = () => {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2026 00:00:00");
  return (
    <>
      <Title title="Contagem Regressiva para 2026" />
      <div className="flex justify-center items-center h-[200px] gap-[2rem]">
        <Counter title="Dias" number={day} />
        <Counter title="Horas" number={hour} />
        <Counter title="Minutos" number={minute} />
        <Counter title="Segundos" number={second} />
      </div>
    </>
  );
};

export default Contador;
