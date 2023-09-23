import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.scss'

const Nav = () => {
  const [authed, setAuthed] = useState(false)
  useEffect(()=>{
    const token = localStorage.getItem('access')
    if(token)setAuthed(true)
  }, [])
  return (
    <nav className={classes.Nav}>
      <span>Logo</span>
        <ul>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Посты</NavLink>
          </li>
          <li>
            <NavLink to="/news">Новости</NavLink>
          </li>
          <li>
            {authed?
            <NavLink to="/profile">Профиль</NavLink>:
            <>
            <NavLink to="/login">Войти</NavLink>
            <NavLink to="/register">Зарегистрироваться</NavLink>
            </>}
          </li>
        </ul>
    </nav>
  );
}

export default Nav;
