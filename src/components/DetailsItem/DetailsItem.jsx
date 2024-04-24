import icons from '../../img/icons.svg';
import css from './DetailsItem.module.css';

const DetailsItem = ({ item }) => {
  return (
    <li className={css.item}>
      <svg className={css.icon} width="20" height="20">
        <use href={icons + `#${item[0]}`}></use>
      </svg>
      <p className={css.text}>{`${
        ['adults', 'hob', 'beds'].includes(item[0]) ? item[1] : ''
      } ${item[0]}`}</p>
    </li>
  );
};

export default DetailsItem;
