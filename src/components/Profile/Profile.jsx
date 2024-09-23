import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles['div-sec']}>
      <div>
        <div className={styles['photo-container']}>
          <img className={styles['photo']} src={image} alt="User avatar" />
        </div>
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={styles['stats-list']}>
        <li className={styles['stats-list-item']}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles['stats-list-item']}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles['stats-list-item']}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
