import AdvertsItem from 'components/AdvertsItem/AdvertsItem';
import css from './AdvertsList.module.css';

const AdvertsList = ({ adverts }) => {
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
