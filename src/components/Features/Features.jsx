import DetailsList from 'components/DetailsList/DetailsList';
import { useSelector } from 'react-redux';
import { selectAdvert } from 'store/selectors';
import css from './Features.module.css';

const Features = () => {
  const advert = useSelector(selectAdvert);
  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    adults,
    transmission,
    engine,
    details: {
      airConditioner: AC,
      kitchen,
      beds,
      TV,
      CD,
      radio,
      shower,
      toilet,
      freezer,
      hob,
      microwave,
      gas,
      water,
    },
  } = advert;

  return (
    <>
      <DetailsList
        details={{
          adults,
          transmission,
          engine,
          AC,
          kitchen,
          beds,
          shower,
          toilet,
          TV,
          CD,
          radio,
          freezer,
          hob,
          microwave,
          gas,
          water,
        }}
      />
      <div>
        <h3 className={css.text_title}>Vehicle details</h3>
        <ul className={css.list_info}>
          <li className={css.list_info_item}>
            <p className={css.text_info}>Form</p>
            <p className={`${css.text_info} ${css.text_form}`}>{form}</p>
          </li>
          <li className={css.list_info_item}>
            <p className={css.text_info}>Length</p>
            <p className={css.text_info}>{length}</p>
          </li>
          <li className={css.list_info_item}>
            <p className={css.text_info}>Width</p>
            <p className={css.text_info}>{width}</p>
          </li>
          <li className={css.list_info_item}>
            <p className={css.text_info}>Height</p>
            <p className={css.text_info}>{height}</p>
          </li>
          <li className={css.list_info_item}>
            <p className={css.text_info}>Tank</p>
            <p className={css.text_info}>{tank}</p>
          </li>
          <li className={css.list_info_item}>
            <p className={css.text_info}>Consumption</p>
            <p className={css.text_info}>{consumption}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Features;
