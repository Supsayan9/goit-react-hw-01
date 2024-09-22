import './FriendList.css';
const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className="friend-item">
            <img
              className="friend-avatar"
              src={avatar}
              alt={`${name}'s avatar`}
            />
            <p className="friend-name">{name}</p>
            <p className={`friend-status ${isOnline ? 'online' : 'offline'}`}>
              {isOnline ? 'Online' : 'Offline'}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
