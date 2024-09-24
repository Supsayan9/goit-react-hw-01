import styles from './FriendList.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={styles['friend-item']}>
      <img
        className={styles['friend-avatar']}
        src={avatar}
        alt={`${name}'s avatar`}
      />
      <p className={styles['friend-name']}>{name}</p>
      <p
        className={`${styles['friend-status']} ${
          isOnline ? styles['online'] : styles['offline']
        }`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem;
