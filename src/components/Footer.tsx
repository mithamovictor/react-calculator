import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center py-4 shadow-lg w-full bg-slate-900">
      <p className="text-md text-gray-600">&copy; Copyright 2021 - {year}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
