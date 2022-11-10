import React, {ChangeEvent, FocusEvent, forwardRef, InputHTMLAttributes, useEffect, useRef, useState} from 'react';
import "./password-input.css";
import {IoEye, IoEyeOff} from "react-icons/io5";
import {usePreviousState} from "../../store/hooks";

const PasswordInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({className, placeholder, value, onChange}: InputHTMLAttributes<HTMLInputElement>, ref) => {
        const innerRef = useRef<any>(ref);
        const [isPasswordShown, setIsPasswordShown] = useState(false);
        const prev = usePreviousState(isPasswordShown);

        const toggle = () => {
            setIsPasswordShown(!isPasswordShown);
        }

        useEffect(() => {
            if (typeof prev === 'boolean' && prev !== isPasswordShown) {
                innerRef.current.focus();
            }
        }, [isPasswordShown]);

        return (
            <div className="password-input">
                <input className={['password', className].join(' ')}
                       type={isPasswordShown ? 'text' : 'password'}
                       placeholder={placeholder}
                       value={value}
                       ref={innerRef}
                       onFocus={(event: FocusEvent<HTMLInputElement>) => {
                           const length = event.currentTarget.value.length;
                           event.currentTarget.setSelectionRange(length, length);
                       }}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => {
                           if (!event.target.value) {
                               setIsPasswordShown(false);
                           }
                           if (onChange) {
                               onChange(event);
                           }
                       }}/>

                {isPasswordShown ?
                    <IoEyeOff className="icon" onClick={toggle}/>
                    : <IoEye className="icon" onClick={() => {
                        if (value) {
                            toggle();
                        }
                    }} aria-disabled={!value}/>
                }
            </div>
        );
    }
);

export default PasswordInput;
