const CardTratamientos = ({ img, text, url}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <a href={url} aria-label={text} onClick={scrollToTop}>
    <div className="t-card">
      <img src={img} alt="" className="t-card-image w-100" />
      <p className="t-card-text">{text}</p>
    </div>
    </a>
  );
};

export default CardTratamientos;
