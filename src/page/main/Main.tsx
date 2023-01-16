import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { shopService } from '../../service/shop/shop.service';

const Main = () => {
  const auth = useAppSelector((state) => state.auth);
  const [menuBoard, setMenuBoard] = useState();

  useEffect(() => {
    shopService.getMenuBoard(1).then((response) => {
      setMenuBoard(response.data.payload);
    });

    return () => {};
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
        padding: 32,
      }}
    >
      <h3>main</h3>
      <pre>{JSON.stringify(auth, undefined, 4)}</pre>
      <div>{menuBoard && <pre>{JSON.stringify(menuBoard, undefined, 4)}</pre>}</div>
    </div>
  );
};

export default Main;
