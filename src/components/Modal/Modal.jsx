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

const Modal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const advert = useSelector(selectAdvert);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.add('body_lock');
    dispatch(fetchAdvertId(id));
    const handleClickEsc = e => {
      if (e.code === 'Escape') {
        navigate(location.state ?? '/catalog');
      }
    };

    document.addEventListener('keydown', handleClickEsc);
    return () => {
      document.body.classList.remove('body_lock');
      document.removeEventListener('keydown', handleClickEsc);
    };
  }, [location.state, navigate, dispatch, id]);

  const handleOverlay = e => {
    if (e.target === e.currentTarget) {
    }
  };

  return (
    <div className={css.overlay} onClick={handleOverlay}>
      {Object.keys(advert).length && (
        <div className={css.modal}>
          <div>
            <h2>{advert.name}</h2>
            <div>
              <p>{advert.rating}</p>
              <p>{advert.location}</p>
            </div>
            <p>&euro;{`${advert.price},00`}</p>
            <button>X</button>
          </div>
          <div className={css.scroll}>
            <ul className={css.list_img}>
              {advert.gallery.map((item, idx) => (
                <li key={idx}>
                  <img src={item} alt={advert.name} />
                </li>
              ))}
            </ul>
            <p className={css.text_description}>{advert.description}</p>
            <ul>
              <li>
                <NavLink className={css.link} to={'features'}>
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink className={css.link} to={'reviews'}>
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
