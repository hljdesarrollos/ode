const CardTratamientos = ({ img, text, url}) => {
  return (
    <a href={url}>
    <div className="t-card">
      <img src={img} alt="" className="t-card-image w-100" />
      <p className="t-card-text">{text}</p>
    </div>
    </a>
  );
};

export default CardTratamientos;
