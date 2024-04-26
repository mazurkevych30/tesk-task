import ReservationForm from 'components/ReservationForm/ReservationForm';
import { Outlet } from 'react-router-dom';
import css from './InfoLayout.module.css';

const InfoLayout = () => {
  return (
    <div className={css.info_container}>
      <div className={css.details_container}>
        <Outlet />
      </div>
      <div className={css.form_container}>
        <ReservationForm />
      </div>
    </div>
  );
};

export default InfoLayout;
