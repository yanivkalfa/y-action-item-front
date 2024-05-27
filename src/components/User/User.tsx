import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container, {
  Left,
  Mid,
  Right,
  Img,
  Name,
  Desc
} from './Styled';

import {
  UserProps
} from './Types';

const User: React.FC<UserProps> = ({ user, selectedUser, setSelected }) => {
  const navigate = useNavigate();
  let { email, title, first, last, gender, country, phone } = user;
  let isSelected: boolean = selectedUser !== undefined ? selectedUser === email : false;
  let handleSelect = () => {
    setSelected(user.email);
    navigate(`/edit/${email}`);
  }
  return (
    <Container $isSelected={isSelected} onClick={handleSelect}>
      <Left>
        <Img src={user.picture.thumbnail} />
      </Left>
      <Mid>
        <Name className='prod-name'>{title + first + last}</Name>
        <Desc className='prod-des'>{gender}, {country}, {phone}</Desc>
        <Desc className='prod-des'>@{email}</Desc>
      </Mid>
      <Right>
      </Right>
    </Container>
  );
};

export default User;