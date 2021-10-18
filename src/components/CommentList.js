import React from "react";
import {
  Grid
} from "../elements/index";
import Comment from "./Comment";

const CommentList = (props) => {
    const data=[
        {id:1, name:"기만준", content:"굳굳 꿀맛", createAt:"2021-01-01"},
        {id:2, name:"기만준2", content:"굳굳 꿀맛2", createAt:"2021-02-01"},
        {id:3, name:"기만준3", content:"굳굳 꿀맛3", createAt:"2021-03-01"},
    ];
    return (
        <Grid margin="39px auto" width="980px" >
            {data.map((d,idx)=> {
                return(
                    <Comment {...d} key={idx}/>
                );
            })}
            
        </Grid>
    );
};

export default CommentList;
