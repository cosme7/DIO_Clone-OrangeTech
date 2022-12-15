import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Logo from '../../Assets/logo.svg'
import * as S from "./style";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef();

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (e.path[0] !== btnRef.current) {
        setOpen(!true);
      }
    };

    document.body.addEventListener("click", closeMenu);
    return () => document.body.removeEventListener("click", closeMenu);
  }, [open]);

  return (
    <>
      <S.Btn open={open} onClick={() => {toggleMenu();}}>
        <S.Icon open={open} ref={btnRef} fill="var(--bg-wt)" viewBox="0 0 100 100" width="45">
            <rect width="80" height="10" x="10" y="25" rx="5"></rect>
            <rect width="80" height="10" x="10" y="45" rx="5"></rect>
            <rect width="80" height="10" x="10" y="65" rx="5"> </rect>
        </S.Icon>
        <S.Txt>Menu</S.Txt>
      </S.Btn>
      <S.Mobile open={open}>
        <img src={Logo} alt="DIO Logo" title="DIO Logo"/>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">
                <Button title="Entrar" variant="others" />
                </Link>
            </li>
            <li>
                <Link to="/cadastro">
                <Button title="Cadastro" variant="others" />
                </Link>
            </li>
        </ul>
      </S.Mobile>
    </>
  );
}
