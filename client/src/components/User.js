import React, { useState } from "react";
import { TabButton } from './Buttons';
import styled from 'styled-components';
import Register from './Register';
import Login from './Login';

const UserContainer = styled.div`
  margin: 1rem auto;
  border: none;
  width: 50%;
`;

const TabContainer = styled.div`
  width: 100%;
  padding: 0;
`;

function User() {
  const [isLogin, setLogin] = useState(true);

  function onSelect() {
    setLogin(!isLogin);
  }

  return (
    <UserContainer>
      <TabContainer>
        <TabButton clicked={isLogin} onClick={onSelect}>
          Login
        </TabButton>
        <TabButton clicked={!isLogin} onClick={onSelect}>
          Regiser
        </TabButton>
      </TabContainer>
      {isLogin ? <Login/> : <Register/>}
    </UserContainer>
  );
}

export default User;
