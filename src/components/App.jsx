import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import StyledFriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <StyledFriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
}
