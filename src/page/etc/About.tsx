import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { increase } from '../../store/slice/counter-slice';

const About = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <title>This is about page.</title>
      <div>
        <div>
          <label>count :</label>&nbsp;
          <span>{count}</span>
        </div>
        <input
          type={'button'}
          value={'+'}
          onClick={() => {
            dispatch(increase());
          }}
        />
      </div>
    </div>
  );
};

export default About;
