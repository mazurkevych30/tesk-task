import AdvertsList from 'components/AdvertsList/AdvertsList';
import FilterForm from 'components/FilterForm/FilterForm';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div className={`container ${css.catalog_container}`}>
      <div className={css.filter_container}>
        <FilterForm />
      </div>
      <div className={css.adverts_container}>
        <AdvertsList />
      </div>
    </div>
  );
};

export default CatalogPage;
