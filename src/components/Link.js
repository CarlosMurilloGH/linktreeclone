import React,{useState,useRef, useEffect} from 'react';
import style from "./Link.module.css";

export default function Link({docId,title,url,onDelete,onUpdate}) {

    const [currentTitle,setCurrenTitle]=useState(title);
    const [currentUrl,setCurrentUrl]=useState(title);

    const [editTitle,setEditTitle]=useState(false);
    const [editUrl,setEditUrl]=useState(false);

    const titleRef = useRef(null);
    const urlRef = useRef(null);

    useEffect(()=>{
        if(titleRef.current){
            titleRef.current.focus();
        }
    },[editTitle]);

    useEffect(()=>{
        if(urlRef.current){
            urlRef.current.focus();
        }
    },[editUrl]);

    function handleEditTitle(){
        setEditTitle(true);
    }

    function handleEditUrl(){
        setEditUrl(true);
    }

    function handleChangeTitle(e){
        setCurrenTitle(e.target.value)
    }

    function handleChangeUrl(e){
        setCurrentUrl(e.target.value)
    }

    function handleBlurTitle(e){
        setEditTitle(false)
        onUpdate(docId,currentTitle,currentUrl);
    }
    
    function handleBlurUrl(e){
        setEditUrl(false);
        onUpdate(docId,currentTitle,currentUrl);
    }

    function handleDelete(){
        onDelete(docId);
    }

  return (
    <div className={style.link}>
        <div className={style.info}>
            <div className={style.linkTitle}>
            {editTitle ? (<> <input ref={titleRef} onBlur={handleBlurTitle} value={currentTitle} onChange={handleChangeTitle}/> </>) 
            : (<><button className={style.btnEdit} onClick={handleEditTitle}><span className='material-icons'>edit</span></button>{currentTitle}</>)}
        </div>
        </div>
        <div className={style.linkUrl}>
            {editUrl ? (<><input ref={urlRef} onBlur={handleBlurUrl} value={currentUrl} onChange={handleChangeUrl} /> </>) 
            : (<><button className={style.btnEdit} onClick={handleEditUrl}><span className='material-icons'>edit</span></button>{currentUrl}</>) }
        </div>
        <div className={style.linkActions}>
            <button className={style.btnDelete} onClick={handleDelete}><span>Delete</span></button>
        </div>
  </div>
  )
}
