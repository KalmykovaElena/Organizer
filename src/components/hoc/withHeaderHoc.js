import React from 'react';
import Header from '../header/Header';

export const withHeaderHoc = (ViewComponent) => {
  return function () {
    return (
      <>
        <Header />
        <ViewComponent />
      </>
    );
  };
};
