import { Link, useLocation } from 'react-router-dom';
import css from './AdvertsItem.module.css';
import icons from '../../img/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from 'store/advertsSlice/advertsSlice';
import { selectFavorite } from 'store/selectors';
import DetailsList from 'components/DetailsList/DetailsList';

const AdvertsItem = ({ advert }) => {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);
  const location = useLocation();

  const favoriteActive = favorite.some(item => item._id === advert._id);

  const {
    adults,
    transmission,
    engine,
    details: { airConditioner: AC, kitchen, beds, shower, toilet },
  } = advert;

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
              type="button"
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
          <div className={css.rating}>
            <svg className={css.star_icon} width="16" height="16">
              <use href={icons + '#star'}></use>
            </svg>
            <p
              className={`${css.rating_text} ${css.decoration}`}
            >{`${advert.rating}(${advert.reviews.length} Reviews)`}</p>
          </div>
          <div className={css.location}>
            <svg className={css.location_icon} width="16" height="16">
              <use href={icons + '#map-pin'}></use>
            </svg>
            <p className={css.rating_text}>{advert.location}</p>
          </div>
        </div>

        <p className={css.text_description}>{advert.description}</p>

        <DetailsList
          details={{
            adults,
            transmission,
            engine,
            AC,
            kitchen,
            beds,
            shower,
            toilet,
          }}
        />

        <div className={css.btn_show_more}>
          <Link to={`${advert._id}`} state={location}>
            Show more
          </Link>
        </div>
      </div>
    </li>
  );
};

export default AdvertsItem;
