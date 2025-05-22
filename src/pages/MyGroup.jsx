import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

function myGroup() {
    const { user } = use(AuthContext);
    
    email = user.email;
  return (
    <div>
      
    </div>
  );
}

export default myGroup;