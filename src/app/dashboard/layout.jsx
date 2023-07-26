// dashboard/layout.jsx

import React from 'react';
import Wrapper from '@/components/Wrapper';

const Layout = ({ children }) => {
  return (
    <Wrapper>

      <div className="flex mt-16 flex-row">
   
        <div className="sidemenu max-w-xs text-3xl"> MY ACCOUNT MENU INCOMING. <hr />
        Wallet, account details design done. click on the icon to see
        </div>

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
