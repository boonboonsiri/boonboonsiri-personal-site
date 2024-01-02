import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const PasswordAuth = () => {
  return (
    <BrowserOnly>
      {() => <PasswordAuthInside></PasswordAuthInside>}
    </BrowserOnly>
  );
};
const PasswordAuthInside = () => {

    let password = localStorage.getItem('password');
    console.log(password);

    while (localStorage.getItem('password') !== 'sophie') {
        password = prompt("Enter Password : ", "your password here");
        if (password === 'sophie') {
            break;
        }
    }
    localStorage.setItem('password', 'sophie')

    return (<div></div>);
};

export default PasswordAuth;
