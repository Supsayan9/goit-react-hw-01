import './Profile.css';
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="div-sec">
      <div>
        <div className="photo-container">
          <img className="photo" src={image} alt="User avatar" />
        </div>
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className="stats-list">
        <li className="stats-list-item">
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className="stats-list-item">
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className="stats-list-item">
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
