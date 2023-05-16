/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, joinMission, cancelMission } from '../redux/missions/missionSlice';

const Missions = () => {
  const { missions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) dispatch(getMissions());
  }, [dispatch, missions.length]);

  const handleJoinMission = (mission_id) => {
    dispatch(joinMission(mission_id));
  };

  const handleCancelMission = (mission_id) => {
    dispatch(cancelMission(mission_id));
  };

  return (
    <div className="missions-container">
      <table>
        <thead>
          <tr className="tableHeader-row">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id} className="mission-row">
              <td className="mission-name">{mission.mission_name}</td>
              <td className="mission-description">{mission.description}</td>
              <td className="mission-reservation">
                {mission.reserved ? (
                  <button className="member-button" type="button">
                    Active Member
                  </button>
                ) : (
                  <button className="member-button" type="button">
                    NOT A MEMBER
                  </button>
                )}
              </td>
              <td className="mission-reservation">
                {mission.reserved ? (
                  <button
                    className="mission-button"
                    type="button"
                    onClick={() => handleCancelMission(mission.mission_id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    className="mission-button"
                    type="button"
                    onClick={() => handleJoinMission(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
