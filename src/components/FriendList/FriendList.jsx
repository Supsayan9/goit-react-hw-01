import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={styles['friend-item']}>
            <img
              className={styles['friend-avatar']}
              src={avatar}
              alt={`${name}'s avatar`}
            />
            <p className={styles['friend-name']}>{name}</p>
            <p className={`${styles['friend-status']} ${isOnline ? styles['online'] : styles['offline']}`}>
              {isOnline ? 'Online' : 'Offline'}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
