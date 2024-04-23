import ReservationForm from 'components/ReservationForm/ReservationForm';
import { Outlet } from 'react-router-dom';

const InfoLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <div>
        <ReservationForm />
      </div>
    </div>
  );
};

export default InfoLayout;
