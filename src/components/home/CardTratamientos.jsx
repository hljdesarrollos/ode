const CardTratamientos = ({ img, text }) => {
  return (
    <div className="t-card">
      <img src={img} alt="" className="t-card-image w-100" />
      <p className="t-card-text">{text}</p>
    </div>
  );
};

export default CardTratamientos;
