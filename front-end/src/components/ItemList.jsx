import SingleItem from "./SingleItem";
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  let finalItems;

  finalItems = isHome ? items : Infinity;

  return (
    <>
      <div className="item-list">
        <div className="item-list__header"> 
          <h2>{title} populares</h2>

          {isHome ? (
          <Link className="item-list__link" to={path}>Mostrar tudo</Link>
          ) : (<> </>)}
        </div>

        <div className="item-list__container">
          {itemsArray.filter((currentItem, index) => index < finalItems).map((currObj, index) => (
            <SingleItem idPath = {idPath} {...currObj} key={`${title}-${index}`}/>
          ))}
        </div>

      </div>
    </>
  )
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
  itemsArray: PropTypes.array.isRequired,
  idPath: PropTypes.array.isRequired,
  path: PropTypes.array.isRequired,
};

export default ItemList