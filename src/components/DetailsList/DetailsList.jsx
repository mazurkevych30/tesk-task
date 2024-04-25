import DetailsItem from 'components/DetailsItem/DetailsItem';
import css from './DetailsList.module.css';

const DetailsList = ({ details }) => {
  const detail_arr = Array.from(Object.entries(details));

  return (
    <ul className={css.list}>
      {detail_arr.map((item, idx) => {
        if (item[1]) {
          return <DetailsItem key={idx} item={item} />;
        }
        return false;
      })}
    </ul>
  );
};

export default DetailsList;
