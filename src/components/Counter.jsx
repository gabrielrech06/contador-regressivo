import "./Counter.css"

const Counter = ({ title, number }) => {
  return (
    <div className="flex flex-col items-center content-center gap-4">
      <p className="bg-black text-white rounded-xl p-4 text-6xl font-bold min-w-20 text-center">{number}</p>
      <h3 className="counter-text">{title}</h3>
    </div>
  );
};

export default Counter;
