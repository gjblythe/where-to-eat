import React from 'react';
import AppBar from './AppBar';

interface IProps {
  title: string;
  children: React.ReactNode;
}
export default ({title, children}: IProps) => {
  return (
  <>
    <AppBar title={title}/>
    <div>
      {children}
    </div>
  </>
  );
}