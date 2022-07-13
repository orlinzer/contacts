import { Fragment, useEffect, useState } from "react"

import ContactList from "./components/ContactList/ContactList"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import SetUserPopup from "./components/SetUserPopup/SetUserPopup"
import SearchPopup from "./components/SearchPopup/SearchPopup"
import UserPopup from "./components/UserPopup/UserPopup"

export const initNumberOfUsers = 10

export const sortUsers = (userA, userB) => {
  if (!userB) return userA
  if (!userA) return userB
  if (!userB.name) return userA
  if (!userA.name) return userB
  if (!userB.name.last) return userA
  if (!userA.name.last) return userB
  if (userA.name.last !== userB.name.last)
    return userA.name.last.localeCompare(userB.name.last)
  if (!userB.name.firs) return userA
  if (!userA.name.firs) return userB
  if (userA.name.firs !== userB.name.firs)
    return userA.name.firs.localeCompare(userB.name.firs)
  if (!userB.name.title) return userA
  if (!userA.name.title) return userB
  return userA.name.title.localeCompare(userB.name.title)
}

export const App = () => {
  const [users, setUsers] = useState([])
  const [userPopup, setUserPopup] = useState(null)
  const [usersSearch, setUsersSearch] = useState(null)
  const [userSetter, setUserSetter] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")

  const getUsers = () => {
    fetch(`https://randomuser.me/api/?results=${initNumberOfUsers}`)
      .then((res) => res.json())
      .then((res) => {
        setUsers((users) => {
          if (users.length > 0) {
            return users
          }
          return [...res.results, ...users].sort(sortUsers)
        })
      })
  }

  useEffect(() => getUsers(), [])

  return (
    <Fragment>
      <Header
        users={users}
        setUsers={setUsers}
        setUserPopup={setUserPopup}
        setUsersSearch={setUsersSearch}
        setUserSetter={setUserSetter}
        setErrorMessage={setErrorMessage}
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

        {userSetter && (
          <SetUserPopup
            user={userSetter}
            setUserSetter={setUserSetter}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            setUser={(editedUser) => {
              // Check if an old user with the same name exist
              if (
                users.some(
                  (user) =>
                    editedUser?.name?.title === user?.name?.title &&
                    editedUser?.name?.firs === user?.name?.firs &&
                    editedUser?.name?.last === user?.name?.last &&
                    editedUser?.login?.uuid !== user?.login?.uuid
                )
              ) {
                setErrorMessage("A user with this name already exist")
                return
              }

              setUsers((users) => {
                // // Remove the user if exist
                users = users.filter(
                  (user) => editedUser?.login?.uuid !== user?.login?.uuid
                )
                // Add the edited / new user
                users.push(editedUser)
                // Sort the users
                users.sort(sortUsers)
                // Close the SearchPopup
                setUserSetter(null)
                setErrorMessage("")
                return users
              })
            }}
          />
        )}
      </Main>
      <Footer />
    </Fragment>
  )
}

export default App
