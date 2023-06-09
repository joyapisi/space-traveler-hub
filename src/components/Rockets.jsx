import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, reserveRocket } from '../redux/rockets/rocketSlice';
import '../styles/rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rocket } = useSelector((store) => store.rocket);
  const { isLoading } = useSelector((store) => store.rocket);

  useEffect(() => {
    if (isLoading === false) dispatch(getRockets());
  }, [dispatch, isLoading]);

  return (
    <div className="flex rockets-container">
      {isLoading && rocket.map((rocket) => (
        <div key={rocket.id} className="rocket-card">
          <img src={rocket.image} alt={rocket.name} className="rocket-image" />
          <div className="flex rockets-content">
            <h2 className="rocket-title">{rocket.name}</h2>
            <p className="rocket-details">
              {rocket.reserved && <span className="reserved">Reserved</span>}
              {rocket.description}
            </p>
            <button
              type="button"
              className={rocket.reserved ? 'unreserve' : 'reserve'}
              onClick={() => dispatch(reserveRocket(rocket.id))}
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
