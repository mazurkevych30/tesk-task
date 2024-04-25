import { useEffect } from 'react';
import css from './Modal.module.css';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvert } from 'store/selectors';
import { fetchAdvertId } from 'store/advertsSlice/thunks';
import icons from '../../img/icons.svg';

const Modal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const advert = useSelector(selectAdvert);
  const dispatch = useDispatch();
  const pathname = location.pathname;

  useEffect(() => {
    document.body.classList.add('body_lock');
    dispatch(fetchAdvertId(id));
    const handleClickEsc = e => {
      if (e.code === 'Escape') {
        if (pathname.includes('/catalog')) navigate('/catalog');
        if (pathname.includes('/favorites')) navigate('/favorites');
      }
    };

    document.addEventListener('keydown', handleClickEsc);
    return () => {
      document.body.classList.remove('body_lock');
      document.removeEventListener('keydown', handleClickEsc);
    };
  }, [location.state, navigate, dispatch, id, pathname]);

  const handlerClose = e => {
    if (e.target === e.currentTarget) {
      if (pathname.includes('/catalog')) navigate('/catalog');
      if (pathname.includes('/favorites')) navigate('/favorites');
    }
  };

  const handlerButton = () => {
    if (pathname.includes('/catalog')) navigate('/catalog');
    if (pathname.includes('/favorites')) navigate('/favorites');
  };

  return (
    <div className={css.overlay} onClick={handlerClose}>
      {Object.keys(advert).length && (
        <div className={css.modal}>
          <div className={css.name_container}>
            <h2 className={css.title_text}>{advert.name}</h2>
            <button
              type="button"
              className={css.btn_close}
              onClick={handlerButton}
            >
              <svg className={css.icon_close} width="32" height="32">
                <use href={icons + '#close'}></use>
              </svg>
            </button>
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

          <p className={`${css.title_text} ${css.price}`}>
            &euro;{`${advert.price},00`}
          </p>

          <div className={css.scroll}>
            <ul className={css.list_img}>
              {advert.gallery.map((item, idx) => (
                <li key={idx} className={css.camper_img}>
                  <img src={item} alt={advert.name} />
                </li>
              ))}
            </ul>

            <p className={css.text_description}>{advert.description}</p>

            <ul className={css.list_item}>
              <li>
                <NavLink className={css.link} to={'features'} state={location}>
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink className={css.link} to={'reviews'} state={location}>
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
