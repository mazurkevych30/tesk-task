import AdvertsItem from 'components/AdvertsItem/AdvertsItem';
import css from './AdvertsList.module.css';

const AdvertsList = ({ adverts }) => {
  const handleAddFavorite = () => {};

  return (
    <>
      <ul className={[css.list]}>
        {adverts.map(advert => (
          <AdvertsItem
            key={advert._id}
            advert={advert}
            handleAddFavorite={handleAddFavorite}
          />
        ))}
      </ul>
    </>
  );
};

export default AdvertsList;
