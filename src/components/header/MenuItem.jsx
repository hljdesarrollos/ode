import { NavLink } from "react-router-dom";

const MenuItem = ({ item, columns, show }) => {
  return (
    <div className={columns}>
      <p className="tratamiento">
        <NavLink
          onClick={() => {
            show.setShow(!show.show);
          }}
          to={`/tratamientos/${item.ref}`}
          className="tratamiento-link"
        >
          {item.name}
        </NavLink>
      </p>
    </div>
  );
};

export default MenuItem;
