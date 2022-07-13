import { useEffect, useState } from "react"
import uuid from "react-uuid"
import Avatar from "../Avatar/Avatar"

import Card from "../Card/Card"
import Field from "../Field/Field"

import styles from "./SetUserPopup.module.css"

export const SetUserPopup = (props) => {
  const { user, setUserSetter, setUser, errorMessage, setErrorMessage } = props

  const [titleName, setTitleName] = useState(user?.name?.title ?? "")
  const [firstName, setFirstName] = useState(user?.name?.first ?? "")
  const [lastName, setLastName] = useState(user?.name?.last ?? "")
  const [phone, setPhone] = useState(user?.phone ?? "")
  const [streetNumberLocation, setStreetNumberLocation] = useState(
    user?.location?.street?.number ?? ""
  )
  const [streetNameLocation, setStreetNameLocation] = useState(
    user?.location?.street?.name ?? ""
  )
  const [cityLocation, setCityLocation] = useState(user?.location?.city ?? "")
  const [stateLocation, setStateLocation] = useState(
    user?.location?.state ?? ""
  )
  const [countryLocation, setCountryLocation] = useState(
    user?.location?.country ?? ""
  )
  const [postcodeLocation, setPostcodeLocation] = useState(
    user?.location?.postcode ?? ""
  )
  const [email, setEmail] = useState(user?.email ?? "")
  const [note, setNote] = useState(user?.note ?? "")

  const [picture, setPicture] = useState({
    thumbnail: user?.picture?.thumbnail || "/logo.svg",
    medium: user?.picture?.medium || "/logo.svg",
    large: user?.picture?.large || "/logo.svg",
  })

  const getImage = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((res) => {
        if (Array.isArray(res?.results) && res.results.length > 0) {
          res = res.results[0]
          setPicture((picture) => {
            if (picture?.thumbnail && picture?.thumbnail !== "/logo.svg")
              return picture
            return {
              thumbnail: res.picture?.thumbnail || "/logo.svg",
              medium: res.picture?.medium || "/logo.svg",
              large: res.picture?.large || "/logo.svg",
            }
          })
        }
      })
  }

  useEffect(() => getImage(), [])

  return (
    <Card
      close={() => {
        setUserSetter(null)
        setErrorMessage("")
      }}
    >
      <form
        action=""
        method="get"
        onSubmit={(e) => {
          e.preventDefault()

          setErrorMessage("")

          const editedUser = {
            name: {
              title: titleName,
              first: firstName,
              last: lastName,
            },
            phone: phone,
            location: {
              street: {
                number: streetNumberLocation,
                name: streetNameLocation,
              },
              city: cityLocation,
              state: stateLocation,
              country: countryLocation,
              postcode: postcodeLocation,
            },
            email: email,
            note: note,
            login: {
              uuid: user?.login?.uuid || uuid(),
            },
            picture: picture,
          }

          setUser(editedUser)
        }}
      >
        <fieldset className={styles.Fieldset}>
          <legend>Image</legend>
          <Avatar
            src={picture.large}
            name={`${titleName} ${firstName} ${lastName}`}
            size={"large"}
          />
        </fieldset>

        <fieldset className={styles.Fieldset}>
          <legend>Name</legend>
          <p className={styles.ErrorMessage}>{errorMessage}</p>

          <Field
            label={"Name's Title"}
            type={"text"}
            value={titleName}
            setValue={setTitleName}
            focus
            required
          />

          <Field
            label={"First Name"}
            type={"text"}
            value={firstName}
            setValue={setFirstName}
            required
          />

          <Field
            label={"Last Name"}
            type={"text"}
            value={lastName}
            setValue={setLastName}
            required
          />
        </fieldset>

        <fieldset className={styles.Fieldset}>
          <legend>Communication</legend>

          <Field
            label={"Phone"}
            type={"text"}
            value={phone}
            setValue={setPhone}
            required
          />

          <Field
            label={"Email"}
            type={"email"}
            value={email}
            setValue={setEmail}
          />
        </fieldset>

        <fieldset className={styles.Fieldset}>
          <legend>Address</legend>

          <Field
            label={"Number"}
            type={"text"}
            value={streetNumberLocation}
            setValue={setStreetNumberLocation}
          />

          <Field
            label={"Street"}
            type={"text"}
            value={streetNameLocation}
            setValue={setStreetNameLocation}
          />

          <Field
            label={"City"}
            type={"text"}
            value={cityLocation}
            setValue={setCityLocation}
          />

          <Field
            label={"State"}
            type={"text"}
            value={stateLocation}
            setValue={setStateLocation}
          />

          <Field
            label={"Country"}
            type={"text"}
            value={countryLocation}
            setValue={setCountryLocation}
          />

          <Field
            label={"Post Code"}
            type={"text"}
            value={postcodeLocation}
            setValue={setPostcodeLocation}
          />
        </fieldset>

        <fieldset>
          <legend>Note</legend>
          <textarea
            className={styles.Note}
            placeholder="Note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{ resize: "none" }}
          />
        </fieldset>

        <input className={styles.Submit} type={"submit"} value={"Save"} />
      </form>
    </Card>
  )
}

export default SetUserPopup
