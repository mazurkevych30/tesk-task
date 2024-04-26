import { useSelector } from 'react-redux';
import { selectAdvert } from 'store/selectors';
import css from './Reviews.module.css';
import icons from '../../img/icons.svg';

const Reviews = () => {
  const advert = useSelector(selectAdvert);
  return (
    <>
      <ul className={css.reviews_list}>
        {advert.reviews.map(
          ({ reviewer_name, reviewer_rating, comment }, idx) => (
            <li key={idx}>
              <div className={css.person_info}>
                <div className={css.person_img}>
                  <p className={css.text_img}>{reviewer_name[0]}</p>
                </div>
                <div>
                  <p className={css.person_name}>{reviewer_name}</p>
                  <div>
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        selected={
                          idx < reviewer_rating ? 'star_active' : 'star'
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.person_comment}>{comment}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
};

const Star = ({ selected }) => {
  return (
    <svg className={css[selected]} width="16" height="16">
      <use href={icons + '#star'}></use>
    </svg>
  );
};

export default Reviews;
