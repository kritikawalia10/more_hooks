import React from 'react';
import { Action_Type } from "./App";

export default function Posts({post, dispatch}) {
  return (
    <>
    <div>
      {post?.toggle?<h3>{post.name}</h3>: <h3>Content is hidden</h3>}
    </div>
    <button onClick={()=>post && dispatch({type : Action_Type.Toggle, payload : {id : post.id}})}>Toggle</button>
    </>
  )
}


