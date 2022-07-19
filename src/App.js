import { Fragment, useEffect, useState } from 'react';

import ContactList from './components/ContactList/ContactList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import SetUserPopup from './components/SetUserPopup/SetUserPopup';
import SearchPopup from './components/SearchPopup/SearchPopup';
import UserPopup from './components/UserPopup/UserPopup';

/**
 * The initial number of users
 */
export const initNumberOfUsers = 10;

/**
 *
 * @param {*} userA
 * @param {*} userB
 * @returns userB.name - userA.name
 */
export const sortUsers = (userA, userB) => {
  if (!userB) return userA;
  if (!userA) return userB;
  if (!userB.name) return userA;
  if (!userA.name) return userB;
  if (!userB.name.last) return userA;
  if (!userA.name.last) return userB;
  if (userA.name.last !== userB.name.last)
    return userA.name.last.localeCompare(userB.name.last);
  if (!userB.name.first) return userA;
  if (!userA.name.first) return userB;
  if (userA.name.first !== userB.name.first)
    return userA.name.first.localeCompare(userB.name.first);
  if (!userB.name.title) return userA;
  if (!userA.name.title) return userB;
  return userA.name.title.localeCompare(userB.name.title);
};

/**
 * The App component
 */
export const App = () => {
  // The contacts of the app
  const [users, setUsers] = useState([]);
  // The user to show on the UserPopup
  const [userPopup, setUserPopup] = useState(null);
  // The name we trying to find
  const [usersSearch, setUsersSearch] = useState(null);
  // The user we want to set
  const [userSetter, setUserSetter] = useState(null);
  // The error message
  const [errorMessage, setErrorMessage] = useState('');

  // // Load random user data
  // const getRandomUser = () => {
  //   fetch(`https://randomuser.me/api/?results=1`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setUsers((users) => {
  //         return [...res.results, ...users].sort(sortUsers);
  //       });
  //     });
  // }

  // Load users data
  const getUsers = () => {
    fetch(`https://randomuser.me/api/?results=${initNumberOfUsers}`)
      .then((res) => res.json())
      .then((res) => {
        setUsers((users) => {
          if (users.length > 0) {
            return users.sort(sortUsers);
          }
          return [...res.results, ...users].sort(sortUsers);
        });
      });
  };

  // Save user data
  const setUser = (editedUser) => {
    // Check if an old user with the same name exist
    if (
      users.some(
        (user) =>
          editedUser?.name?.title === user?.name?.title &&
          editedUser?.name?.first === user?.name?.first &&
          editedUser?.name?.last === user?.name?.last &&
          editedUser?.login?.uuid !== user?.login?.uuid
      )
    ) {
      setErrorMessage('A user with this name already exist');
      return;
    }

    setUsers((users) => {
      // // Remove the user if exist
      users = users.filter(
        (user) => editedUser?.login?.uuid !== user?.login?.uuid
      );
      // Add the edited / new user
      users.push(editedUser);
      // Sort the users
      users.sort(sortUsers);
      // Close the SearchPopup
      setUserSetter(null);
      setErrorMessage('');
      return users;
    });
  };

  // Effect to load the users wen the app first load (mount)
  useEffect(() => getUsers(), []);

  return (
    <Fragment>
      <Header
        users={users}
        setUsers={setUsers}
        setUserPopup={setUserPopup}
        setUsersSearch={setUsersSearch}
        setUserSetter={setUserSetter}
        setErrorMessage={setErrorMessage}
        // addRandomUser={getRandomUser}
      />
      <Main>
        <ContactList
          users={users}
          setUsers={setUsers}
          selectUser={setUserPopup}
          setUserSetter={setUserSetter}
          usersToPresent={users}
        />

        <SearchPopup
          users={users}
          setUsers={setUsers}
          usersSearch={usersSearch}
          setUsersSearch={setUsersSearch}
          selectUser={setUserPopup}
          userSetter={userSetter}
          setUserSetter={setUserSetter}
        />

        <UserPopup userPopup={userPopup} setUserPopup={setUserPopup} />

        {/* Render the SetUserPopup only if there is a user to set */}
        {userSetter && (
          <SetUserPopup
            user={userSetter}
            setUserSetter={setUserSetter}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            setUser={setUser}
          />
        )}
      </Main>
      <Footer />
    </Fragment>
  );
};

export default App;
