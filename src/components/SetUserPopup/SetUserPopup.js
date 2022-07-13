import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import Avatar from '../Avatar/Avatar';

import Card from '../Card/Card';
import Field from '../Field/Field';

import styles from './SetUserPopup.module.css';

/**
 * The popup that set a user properties
 */
export const SetUserPopup = (props) => {
  const {
    // The user to set
    user,
    // The function to set the user we want to set
    setUserSetter,
    // The function that actually set the user
    setUser,
    // The error message
    errorMessage,
    // The function to set the error message
    setErrorMessage,
  } = props;

  // The user's title
  const [titleName, setTitleName] = useState(user?.name?.title ?? '');
  // The user's first name
  const [firstName, setFirstName] = useState(user?.name?.first ?? '');
  // The user's last name
  const [lastName, setLastName] = useState(user?.name?.last ?? '');
  // The user phone
  const [phone, setPhone] = useState(user?.phone ?? '');
  // The user's street number
  const [streetNumberLocation, setStreetNumberLocation] = useState(
    user?.location?.street?.number ?? ''
  );
  // The user's street name
  const [streetNameLocation, setStreetNameLocation] = useState(
    user?.location?.street?.name ?? ''
  );
  // The user's city
  const [cityLocation, setCityLocation] = useState(user?.location?.city ?? '');
  // The user's state
  const [stateLocation, setStateLocation] = useState(
    user?.location?.state ?? ''
  );
  // The user's country
  const [countryLocation, setCountryLocation] = useState(
    user?.location?.country ?? ''
  );
  // The user's post code
  const [postcodeLocation, setPostcodeLocation] = useState(
    user?.location?.postcode ?? ''
  );
  // The user's email
  const [email, setEmail] = useState(user?.email ?? '');
  // A notes about this contact
  const [note, setNote] = useState(user?.note ?? '');
  // The picture of the user. currently random pictures from RandomUser API.
  const [picture, setPicture] = useState({
    thumbnail: user?.picture?.thumbnail || '/logo.svg',
    medium: user?.picture?.medium || '/logo.svg',
    large: user?.picture?.large || '/logo.svg',
  });

  // Load a random picture for this contact
  const getImage = () => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((res) => {
        if (Array.isArray(res?.results) && res.results.length > 0) {
          res = res.results[0];
          setPicture((picture) => {
            if (picture?.thumbnail && picture?.thumbnail !== '/logo.svg')
              return picture;
            return {
              thumbnail: res.picture?.thumbnail || '/logo.svg',
              medium: res.picture?.medium || '/logo.svg',
              large: res.picture?.large || '/logo.svg',
            };
          });
        }
      });
  };

  // Load a random picture for the contact when the popup mount
  useEffect(() => getImage(), []);

  return (
    <Card
      close={() => {
        setUserSetter(null);
        setErrorMessage('');
      }}>
      <form
        action=""
        method="get"
        onSubmit={(e) => {
          e.preventDefault();

          setErrorMessage('');

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
          };

          setUser(editedUser);
        }}>
        <fieldset className={styles.Fieldset}>
          <legend>Image</legend>
          <Avatar
            src={picture.large}
            name={`${titleName} ${firstName} ${lastName}`}
            size={'large'}
          />
        </fieldset>

        <fieldset className={styles.Fieldset}>
          <legend>Name</legend>
          <p className={styles.ErrorMessage}>{errorMessage}</p>

          <Field
            label={"Name's Title"}
            type={'text'}
            value={titleName}
            setValue={setTitleName}
            focus
            required
          />

          <Field
            label={'First Name'}
            type={'text'}
            value={firstName}
            setValue={setFirstName}
            required
          />

          <Field
            label={'Last Name'}
            type={'text'}
            value={lastName}
            setValue={setLastName}
            required
          />
        </fieldset>

        <fieldset className={styles.Fieldset}>
          <legend>Communication</legend>

          <Field
            label={'Phone'}
            type={'text'}
            value={phone}
            setValue={setPhone}
            required
          />

          <Field
            label={'Email'}
            type={'email'}
            value={email}
            setValue={setEmail}
          />
        </fieldset>

        <fieldset className={styles.Fieldset}>
          <legend>Address</legend>

          <Field
            label={'Number'}
            type={'text'}
            value={streetNumberLocation}
            setValue={setStreetNumberLocation}
          />

          <Field
            label={'Street'}
            type={'text'}
            value={streetNameLocation}
            setValue={setStreetNameLocation}
          />

          <Field
            label={'City'}
            type={'text'}
            value={cityLocation}
            setValue={setCityLocation}
          />

          <Field
            label={'State'}
            type={'text'}
            value={stateLocation}
            setValue={setStateLocation}
          />

          <Field
            label={'Country'}
            type={'text'}
            value={countryLocation}
            setValue={setCountryLocation}
          />

          <Field
            label={'Post Code'}
            type={'text'}
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
            style={{ resize: 'none' }}
          />
        </fieldset>

        <input className={styles.Submit} type={'submit'} value={'Save'} />
      </form>
    </Card>
  );
};

export default SetUserPopup;
