import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((store) => store.missions.missions);
  const rocket = useSelector((store) => store.rocket.rocket);

  const myMissions = missions.filter((mission) => mission.reserved);
  const myRockets = rocket.filter((rocket) => rocket.reserved);

  return (
    <div className="main-profile-container">
      <div className="mission-profile-container">
        <h2 className="mission-title">my missions</h2>
        <table className="mission-item">
          <tbody>
            <>
              {myMissions.map((mission) => (
                <tr key={mission.mission_id}>
                  <td>{mission.mission_name}</td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      </div>
      <div className="rocket-profile-container">
        <h2 className="rocket-title">my rockets</h2>
        <table className="rocket-item">
          <tbody>
            <>
              {myRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
