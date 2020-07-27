import React from 'react';

export const Header: React.FC = () => {
  return (
    <div>
      <a href="/api/login">ログイン</a>
      <a href="/api/logout">ログアウト</a>
    </div>
  );
};
