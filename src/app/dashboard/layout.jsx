// dashboard/layout.jsx

import React from 'react';
import Wrapper from '@/components/Wrapper';

const Layout = ({ children }) => {
  return (
    <Wrapper>

      <div className="flex mt-16 flex-row">
   
        <div className="sidemenu max-w-xs text-5xl"> MY ACCOUNT MENU INCOMING</div>

        <div className="flex-grow">

        <main>
        {children}
      </main>
      </div>

      </div>
      </Wrapper>
     
     
  );
};

export default Layout;
