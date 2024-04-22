import AdvertsList from 'components/AdvertsList/AdvertsList';
import FilterForm from 'components/FilterForm/FilterForm';
import css from './CatalogPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdverts } from 'store/advertsSlice/thunks';
import {
  selectAdverts,
  selectorIsLoadMore,
  selectorPage,
} from 'store/selectors';
import { nextPage } from 'store/advertsSlice/advertsSlice';
import { Outlet } from 'react-router-dom';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const page = useSelector(selectorPage);
  const isLoadMore = useSelector(selectorIsLoadMore);

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [page, dispatch]);

  const handlerNextPage = () => {
    dispatch(nextPage(page + 1));
  };

  return (
    <>
      <Outlet />
      <div className={`container ${css.catalog_container}`}>
        <div className={css.filter_container}>
          <FilterForm />
        </div>
        <div className={css.adverts_container}>
          <AdvertsList adverts={adverts} />
          {isLoadMore && (
            <button className={css.btn_load_more} onClick={handlerNextPage}>
              Load more
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
