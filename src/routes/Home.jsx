import React, { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [color, setColor] = useState();

  const handleSubmit = (e) => {
    e.preventDefault;

    const eventObject = {
      title,
      date,
      image,
      color,
    };
  };

  return (
    <div>
      <h2 className="text-center text-3xl mb-4 font-bold">
        Monte a sua contagem regressiva!
      </h2>
      <form
        className="flex flex-col gap-4 max-w-[400px] my-0 mx-auto"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-2">
          <span className="font-bold">Título: </span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do evento..."
            className="p-2 rounded-md border border-[#AAA]"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-bold">Data do evento: </span>
          <input
            type="date"
            name="date"
            className="p-2 rounded-md border border-[#AAA]"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-bold">Imagem: </span>
          <input
            type="text"
            name="image"
            placeholder="Insira a URL da imagem..."
            className="p-2 rounded-md border border-[#AAA]"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-bold">Cor do tema: </span>
          <input
            type="color"
            name="color"
            className="p-0.5 rounded-md border border-[#AAA]"
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </label>
        <input
          type="submit"
          value="Enviar"
          className="bg-[#343667] text-white font-bold w-[120px] p-3 cursor-pointer opacity-90 transition delay-50 duration-300 hover:opacity-100"
        />
      </form>
    </div>
  );
};

export default Home;
