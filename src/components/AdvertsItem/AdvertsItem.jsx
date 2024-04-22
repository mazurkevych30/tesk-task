import { Link } from 'react-router-dom';
import css from './AdvertsItem.module.css';

const AdvertsItem = ({ advert }) => {
  //   const detail_arr = Array.from(Object.entries(advert.details));
  return (
    <li className={css.adverts_item}>
      <div className={css.camper_img}>
        <img src={advert.gallery[0]} alt={advert.name} />
      </div>

      <div className={css.camper_info}>
        <div>
          <h3>{advert.name}</h3>
          <p>&euro;{`${advert.price},00`}</p>

          <button>
            <svg className={css.favorite_icon} width="24" height="24">
              <use xlinkHref="../../img/icons.svg#icon-water"></use>
            </svg>
          </button>
        </div>

        <p>{advert.rating}</p>
        <p>{advert.location}</p>
        <p className={css.text_description}>{advert.description}</p>
        <ul>
          <li className={css.details_item}>
            <p>{advert.adults} adults</p>
          </li>
          {/* {detail_arr.map((item, index) => {
            if (item[1]) {
              return (
                <li key={index}>
                  <p>{`${item[1]} ${item}`}</p>
                </li>
              );
            }
          })} */}
        </ul>
        <Link to={`${advert._id}`}>Show more</Link>
        {/* <button className={`text_main`}>Show more</button> */}
      </div>
    </li>
  );
};

export default AdvertsItem;
