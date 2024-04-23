import { Link } from 'react-router-dom';
import css from './AdvertsItem.module.css';
import icons from '../../img/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from 'store/advertsSlice/advertsSlice';
import { selectFavorite } from 'store/selectors';

const AdvertsItem = ({ advert, handleAddFavorite }) => {
  //   const detail_arr = Array.from(Object.entries(advert.details));
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);
  const favoriteActive = favorite.some(item => item._id === advert._id);

  return (
    <li className={css.adverts_item}>
      <div className={css.camper_img}>
        <img src={advert.gallery[0]} alt={advert.name} />
      </div>

      <div className={css.camper_info}>
        <div className={css.name_container}>
          <h3 className={css.title_text}>{advert.name}</h3>
          <div className={css.favorite_container}>
            <p className={css.title_text}>&euro;{`${advert.price},00`}</p>
            <button
              className={css.btn_favorite}
              onClick={() => dispatch(addFavorite(advert))}
            >
              {favoriteActive ? (
                <svg
                  className={css.favorite_icon_active}
                  width="24"
                  height="24"
                >
                  <use href={icons + '#favorite'}></use>
                </svg>
              ) : (
                <svg className={css.favorite_icon} width="24" height="24">
                  <use href={icons + '#favorite'}></use>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={css.rating_container}>
          <svg className={css.star_icon} width="24" height="24">
            <use href={icons + '#star'}></use>
          </svg>
          <p>{advert.rating}</p>
          <p>{advert.location}</p>
        </div>

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
        <div className={css.loose}></div>
        <div className={css.btn_show_more}>
          <Link to={`${advert._id}`}>Show more</Link>
        </div>

        {/* <button className={`text_main`}>Show more</button> */}
      </div>
    </li>
  );
};

export default AdvertsItem;
