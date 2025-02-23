import React, { useContext } from "react";
import Title from "../components/Title";
import Counter from "../components/Counter";
import useCountdown from "../hooks/useCountdown";
import { CountdownContext } from "../context/CountdownContext";
import { Navigate } from "react-router-dom";

const Contador = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" />;

  const eventTitle = event.title;
  const eventColor = event.color;

  const [day, hour, minute, second] = useCountdown(event.date);
  return (
    <>
      <Title title={eventTitle} eventColor={eventColor}/>
      <div className="flex justify-center items-center h-[200px] gap-[2rem]">
        <Counter title="Dias" number={day} eventColor={eventColor}/>
        <Counter title="Horas" number={hour} eventColor={eventColor}/>
        <Counter title="Minutos" number={minute} eventColor={eventColor}/>
        <Counter title="Segundos" number={second} eventColor={eventColor}/>
      </div>
    </>
  );
};

export default Contador;
