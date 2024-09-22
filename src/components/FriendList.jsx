const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id}>
            <img src={avatar} alt={`${name}'s avatar`} width="48" />
            <p>{name}</p>
            <p>{isOnline ? 'Online' : 'Offline'}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
