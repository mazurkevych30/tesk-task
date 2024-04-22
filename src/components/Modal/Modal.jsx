import { useEffect } from 'react';
import css from './Modal.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Modal = ({ advert }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add('body_lock');
    const handleClickEsc = e => {
      if (e.code === 'Escape') {
        navigate(location.state ?? '/catalog');
      }
    };

    document.addEventListener('keydown', handleClickEsc);
    return () => {
      document.body.classList.remove('body_lock');
      document.removeEventListener('keydown', handleClickEsc);
    };
  }, [location.state, navigate]);

  const handleOverlay = e => {
    if (e.target === e.currentTarget) {
    }
  };

  return (
    <div className={css.overlay} onClick={handleOverlay}>
      <div className={css.modal}>
        <div className={css.scroll}>
          {' '}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            reiciendis vitae magnam repellat vel asperiores vero error minima
            odit atque doloremque quia praesentium a, aut distinctio provident,
            commodi hic illo.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            reiciendis vitae magnam repellat vel asperiores vero error minima
            odit atque doloremque quia praesentium a, aut distinctio provident,
            commodi hic illo.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            reiciendis vitae magnam repellat vel asperiores vero error minima
            odit atque doloremque quia praesentium a, aut distinctio provident,
            commodi hic illo.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            reiciendis vitae magnam repellat vel asperiores vero error minima
            odit atque doloremque quia praesentium a, aut distinctio provident,
            commodi hic illo.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            reiciendis vitae magnam repellat vel asperiores vero error minima
            odit atque doloremque quia praesentium a, aut distinctio provident,
            commodi hic illo.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            reiciendis vitae magnam repellat vel asperiores vero error minima
            odit atque doloremque quia praesentium a, aut distinctio provident,
            commodi hic illo.
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              reiciendis vitae magnam repellat vel asperiores vero error minima
              odit atque doloremque quia praesentium a, aut distinctio
              provident, commodi hic illo.
            </p>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            reiciendis vitae magnam repellat vel asperiores vero error minima
            odit atque doloremque quia praesentium a, aut distinctio provident,
            commodi hic illo.
          </p>{' '}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            reiciendis vitae magnam repellat vel asperiores vero error minima
            odit atque doloremque quia praesentium a, aut distinctio provident,
            commodi hic illo.
          </p>{' '}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            reiciendis vitae magnam repellat vel asperiores vero error minima
            odit atque doloremque quia praesentium a, aut distinctio provident,
            commodi hic illo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
