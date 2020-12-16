
import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {}

interface IComments {
    userId : number,
    id : number,
    title : string,
    body : string

};

const FetchComments : React.FC<Props> = () => {

    const inititalComment : IComments = {userId : 0,id : 0,title : '',body : ''}
    const [comments,setComments]= useState([inititalComment])
    //const [Comment,setComment]= useState(inititalComment)
    const [inp,SetInp] = useState('')
    const [commentId,SetCommentId] = useState('0')
    
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then(res => {
           
    //         setComments(res.data)
    //     })
    //     .catch(err => 
    //         {
    //             console.log(err)
    //         })
    // },[])

    useEffect(()=>{
        axios.get( "https://jsonplaceholder.typicode.com/posts/".concat(commentId))
        .then(res => {

            
            
            setComments([res.data])
        })
        .catch(err => 
            {
                console.log(err)
            })
    },[commentId])

    const Search = function(e: any){
    
        if(e.key === 'Enter')
        {
            SetCommentId(inp)
            return
        }
        if(e.type === 'click' && e.target.id === 'search')
        SetCommentId(inp)
    }

    return (
      <div>
          <input type= 'text' onChange = {x=> SetInp(x.target.value)} onKeyUp={e =>  Search(e)}></input>
          <button id='search' onClick = {e => Search(e)}>Search Comments</button>
        <ul>
            
            {comments.map((x : IComments) =><li key={x.id}>{x.title}</li>)}
        </ul>
      </div>
    );
  
};
export default FetchComments;
