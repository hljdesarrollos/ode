import './CardValores.css'

export const CardValores = ({ title, description, img }) => {
  return (
    <div className="somos-card">
      <div className='d-flex align-items-center justify-content-center gap-2 mb-2'>
        <img src={img} alt={title} className="somos-card_img"/>
        <h3 className="somos-card_title">{title}</h3>
      </div>
      <p className="somos-card_text">{description}</p>
    </div>
  );
};
