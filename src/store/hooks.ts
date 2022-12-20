import { AppDispatch, RootState } from './store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePreviousState = (state: any) => {
  const ref = useRef<any>();
  //rendering 후 실행됨
  useEffect(() => {
    ref.current = state;
  });
  return ref.current;
};
