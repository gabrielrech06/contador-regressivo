const Title = ({ title, eventColor }) => {
  return (
    <h1
      className="text-center mb-4 text-4xl font-bold"
      style={{ color: eventColor }}
    >
      {title}
    </h1>
  );
};

export default Title;
