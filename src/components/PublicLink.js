import React from 'react';
import style from "./PublicLinks.module.css";

export default function PublicLink({url, title}) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={style.PublicLinkContainer}>
      <div>
        {title}
        </div>
    </a>
  )
}
