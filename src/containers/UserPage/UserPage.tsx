import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { updateUser, deleteUser, selectUsers } from '../../redux/Users/usersSlice';
import { User } from '../../config/types/types';
import Container, {
  Title,
  Img,
  Label,
  Input,
  NameContainer,
  SaveContainer
} from './Styled';

import {
  UserPageProps,
  InputElement,
} from './Types';
import { UsersService } from '../../services/Users';
import { calculateAge } from '../../utilities/general.util';

let defaultUser: User = {
  title: '',
  first: '',
  last: '',
  email: '',
  dob: new Date(),
  street: '',
  city: '',
  state: '',
  country: '',
  phone: '',
  gender: '',
  picture: {
    large: '',
    medium: '',
    thumbnail: '',
  }
};

let userService = new UsersService();
const UserPage: React.FC<UserPageProps> = ({setSelected}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  let { email } = useParams<{ email: string }>();
  let [currentUser, setCurrentUser] = useState<User>(defaultUser);
  let [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const user: User | undefined = users.find((user) => user.email === email);
    if (user) {
      setCurrentUser(user);
      setSelected(email);
    } else {
      navigate('/');
    }
  }, [email]);

  let handleChange = (key: string, event: React.ChangeEvent<InputElement>) => {
    setCurrentUser((prevProd) => {
      return {
        ...prevProd,
        [key]: event.target.value
      }
    });
  }

  const onBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/');
  };

  const onDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (currentUser.isSaved) {
      setIsLoading(true);
      await userService.deleteUser(currentUser.email);
      setIsLoading(false);
      dispatch(deleteUser(currentUser.email));
    } else {
      dispatch(deleteUser(currentUser.email));
    }
    setSelected(undefined);
    navigate('/');
  };

  const onUpdate = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (currentUser.isSaved) {
      setIsLoading(true);
      await userService.updateSavedUser(currentUser.email, currentUser);
      setIsLoading(false);
      dispatch(updateUser(currentUser));
    } else {
      dispatch(updateUser(currentUser));
    }
  };

  const onSave = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!currentUser.isSaved) {
      setIsLoading(true);
      await userService.saveUser(currentUser);
      setIsLoading(false);
    }
  };

  let dob = new Date(currentUser.dob);
  let dobField = `${dob.getFullYear()} - ${calculateAge(dob)}`;
  return (
    <Container>
      <Title>
        {currentUser.isSaved ? 'Saved' : 'New'} Users
      </Title>
      <Img src={currentUser.picture.large} />
      <NameContainer>
        <Label>Gender: </Label>
        <Input
          readOnly
          value={currentUser.gender}
          placeholder={currentUser.gender}
        />
      </NameContainer>
      <NameContainer>
        <Label>Title: </Label>
        <Input
          value={currentUser.title}
          placeholder={currentUser.title}
          onChange={(e) => handleChange('title', e)}
        />
      </NameContainer>
      <NameContainer>
        <Label>First Name: </Label>
        <Input
          value={currentUser.first}
          placeholder={currentUser.first}
          onChange={(e) => handleChange('first', e)}
        />
      </NameContainer>
      <NameContainer>
        <Label>Last Name: </Label>
        <Input
          value={currentUser.last}
          placeholder={currentUser.last}
          onChange={(e) => handleChange('last', e)}
        />
      </NameContainer>
      <NameContainer>
        <Label>Year Of Birth: </Label>
        <Input
          readOnly 
          value={dobField}
          placeholder={dobField}
        />
      </NameContainer>

      <h3>Address: </h3>
      <NameContainer>
        <Label>Street: </Label>
        <Input
          readOnly
          value={currentUser.street}
          placeholder={currentUser.street}
        />
      </NameContainer>
      <NameContainer>
        <Label>City: </Label>
        <Input
          readOnly
          value={currentUser.city}
          placeholder={currentUser.city}
        />
      </NameContainer>
      <NameContainer>
        <Label>State: </Label>
        <Input
          readOnly
          value={currentUser.state}
          placeholder={currentUser.state}
        />
      </NameContainer>
      <NameContainer>
        <Label>State: </Label>
        <Input
          readOnly
          value={currentUser.state}
          placeholder={currentUser.state}
        />
      </NameContainer>

      <h3>Contacts</h3>
      <NameContainer>
        <Label>Email: </Label>
        <Input
          readOnly
          value={currentUser.email}
          placeholder={currentUser.email}
        />
      </NameContainer>
      <NameContainer>
        <Label>Phone: </Label>
        <Input
          readOnly
          value={currentUser.phone}
          placeholder={currentUser.phone}
        />
      </NameContainer>

      <SaveContainer>
        <button disabled={isLoading} onClick={(e) => onBack(e)}>Back</button>
        <button disabled={isLoading} onClick={(e) => onDelete(e)}>Delete</button>
        <button disabled={isLoading} onClick={(e) => onUpdate(e)}>Update</button>
        <button disabled={isLoading} onClick={(e) => onSave(e)}>Save</button>
      </SaveContainer>
    </Container>
  );
};

export default UserPage;
