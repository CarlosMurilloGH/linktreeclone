import React,{useState,useRef, useEffect} from 'react'

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
    <div key={docId}>
        <div>
            {editTitle ? (<> <input ref={titleRef} onBlur={handleBlurTitle} value={currentTitle} onChange={handleChangeTitle}/> </>) : (<><button onClick={handleEditTitle}>Edit</button>{currentTitle}</>)}
        </div>
        <div>
            {editUrl ? (<><input ref={urlRef} onBlur={handleBlurUrl} value={currentUrl} onChange={handleChangeUrl} /> </>) : (<><button onClick={handleEditUrl}>Edit</button>{currentUrl}</>) }
        </div>
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
  </div>
  )
}
