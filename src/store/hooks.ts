import {AppDispatch, RootState} from './configured-store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef} from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePreviousState = (state: any) => {
    const ref = useRef<any>();
    //rendering 후 실행됨
    useEffect(() => {
        ref.current = state;
    });
    return ref.current;
}

// export const useForwardRef = <T, >(
//     ref: ForwardedRef<T>,
//     initialValue: any = null
// ) => {
//     const targetRef = useRef<T | null>(initialValue);
//
//     useEffect(() => {
//         if (!ref) return;
//
//         if (typeof ref === 'function') {
//             ref(targetRef.current);
//         } else {
//             targetRef.current = ref.current;
//         }
//     }, [ref]);
//
//     return targetRef;
// };