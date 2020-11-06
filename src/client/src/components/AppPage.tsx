import React from 'react';
import AppBar from './AppBar';

interface IProps {
  title: string;
  children: React.ReactNode;
  user?: firebase.default.User;
}
export default ({title, children, user}: IProps) => {
  return (
    <>
      <AppBar title={title} user={user}/>
      <div>
        {children}
      </div>
    </>
  );
};
