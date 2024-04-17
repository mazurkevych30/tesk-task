import AdvertsItem from 'components/AdvertsItem/AdvertsItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'store/advertsSlice/thunks';
import { selectAdverts } from 'store/selectors';
import css from './AdvertsList.module.css';

const AdvertsList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <ul className={[css.list]}>
        {adverts.map(advert => (
          <AdvertsItem key={advert._id} advert={advert} />
        ))}
      </ul>
    </>
  );
};

export default AdvertsList;
