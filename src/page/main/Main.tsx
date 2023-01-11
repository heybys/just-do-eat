import React, { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';

const Main = () => {
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, padding: 32 }}>
      <h3>main</h3>
      <pre>{JSON.stringify(user, undefined, 4)}</pre>
    </div>
  );
};

export default Main;
