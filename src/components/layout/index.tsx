import React from 'react';
import { Header } from '../shared/header';

type Props = {
  children: any;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
