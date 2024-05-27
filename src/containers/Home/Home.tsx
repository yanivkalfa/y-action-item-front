import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { setUsers, selectUsers } from '../../redux/Users/usersSlice';
import UserPage from '../UserPage/UserPage';
import UserItem from '../../components/User/User';
import Container, {
  Header,
  Actions,
  Action,
  Body,
  ItemList,
  Footer
} from './Styled';
import { InputElement } from './types';
import { getFullName } from '../../utilities/general.util';
import { getUsers, getSavedUsers } from '../../utilities/randomUsers.util';
import { useDispatch } from 'react-redux';
import { User } from '../../config/types/types';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [selectedUser, setSelected] = useState<string | undefined>();
  const [search, setSearch] = useState<string | undefined>('');


  let handleFatch = () => {
    getUsers({ results: 10 })
      .then((users) => {
        dispatch(setUsers(users as User[]))
      });
  }

  let handleHistory = async () => {
    let savedUsers = await getSavedUsers();
    dispatch(setUsers(savedUsers));
  }

  let handleChange = (event: React.ChangeEvent<InputElement>) => {
    setSearch(event.target.value);
  }

  let pageUser = [...users]
    .filter(({ title, first, last, country }) => {
      let name = getFullName(title, first, last);
      if (search) {
        return name.toLowerCase().indexOf(search.toLowerCase()) > -1
          || (country && country.toLowerCase().indexOf(search.toLowerCase()) > -1);
      }
      return true;
    });

  return (
    <Container>
      <Header>Product Store</Header>
      <Actions>
        <Action>
          <button value={search} onClick={() => handleFatch()}>Fatch</button>
        </Action>
        <Action>
          <button value={search} onClick={() => handleHistory()}>History</button>
        </Action>
        <Action>
          <input value={search} onChange={(e) => handleChange(e)}/>
        </Action>
      </Actions>
      <Body>
        <ItemList>
          {
            pageUser
              .map((user) => <UserItem user={user} key={user.email} setSelected={setSelected} selectedUser={selectedUser} />)}
        </ItemList>
        <Routes>
          <Route path="/edit/:email" element={<UserPage setSelected={setSelected}/>} />
          <Route path="/new" element={<UserPage setSelected={setSelected}/>} />
        </Routes>
      </Body>
      <Footer>
      </Footer>
    </Container>
  );
}

export default Home;