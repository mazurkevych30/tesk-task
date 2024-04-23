import AdvertsList from 'components/AdvertsList/AdvertsList';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectFavorite } from 'store/selectors';

const FavoritesPage = () => {
  const favorite = useSelector(selectFavorite);

  return (
    <>
      <Outlet />
      <div className="container">
        <AdvertsList adverts={favorite} />
      </div>
    </>
  );
};

export default FavoritesPage;
