import DetailsItem from 'components/DetailsItem/DetailsItem';
import css from './DetailsList.module.css';

const DetailsList = ({ details }) => {
  const detail_arr = Array.from(Object.entries(details));
  console.log(detail_arr);
  return (
    <ul className={css.list}>
      {detail_arr.map((item, idx) => (
        <DetailsItem key={idx} item={item} />
      ))}
    </ul>
  );
};

export default DetailsList;
