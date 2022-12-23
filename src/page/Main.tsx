import React, { useEffect, useState } from 'react';
import { authService } from '../auth/service/auth.service';
import { Profile } from '../auth/service/model/auth.model';

const Main = () => {
  const [profile, setProfile] = useState<Profile>({ username: '', address: '', phoneNumber: '' });
  useEffect(() => {
    authService.getProfile().then((value) => {
      setProfile(value);
    });

    return () => {};
  }, []);

  return (
    <div>
      <div>main</div>
      <div>{JSON.stringify(profile)}</div>
    </div>
  );
};

export default Main;
