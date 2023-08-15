// dashboard/layout.jsx

import React from 'react';
import Wrapper from '@/components/Wrapper';
import Sidebar from '@/components/SidebarDB';

const Layout = ({ children }) => {
  return (
    <Wrapper>

      <div className="flex mt-16 flex-row">
   
        <Sidebar/>

        <div className="flex-grow">

        <main>
          <div className='ml-6 mt-4'>
        {children}
        </div>
      </main>
      </div>

      </div>
      </Wrapper>
     
     
  );
};

export default Layout;
