import React,{useState,useEffect} from 'react';
import { Container, FlexGrid, Text, Input, Button } from '../elements/index';
import Upload from "../shared/Upload";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as meatActions } from "../redux/modules/post";

const MeatWrite = (props) => {

    const dispatch = useDispatch();
    const meat_id = props.match.params.id;
    const editmode = meat_id ? true : false;
    const preview = useSelector((state) => state.image.preview);
    const meat_list = useSelector((state) => state.post.list);
    const _meat = editmode ? meat_list.find((p) => p.id.toString() === meat_id): null;
    const [title,setTitle] = useState(_meat ? _meat.title : "");
    const [category,setCategory] = useState(_meat ? _meat.category : "");
    const [price,setPrice] = useState(_meat ? _meat.text : "");
    const { history } = props;

    

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeCategory = (e) => {
        setCategory(e.target.value)
    }

    const changePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMeat = () => {
        if(!title){
            window.alert("타이틀을 넣어주세요!.");
            return
        }
        
        if(!category){
            window.alert("카테고리를 넣어주세요!.");
            return
        }
        if(!price){
            window.alert("가격을 넣어주세요!.");
            return
        }
        
        const meat = {
            title: title,
            category: category,
            defaultprice: price
        }

        dispatch(meatActions.addMeatMiddleware(meat))
    }

    const editMeat = () => {
        if(!title){
            window.alert("타이틀을 넣어주세요!.");
            return
        }
        
        if(!category){
            window.alert("카테고리를 넣어주세요!.");
            return
        }
        if(!price){
            window.alert("가격을 넣어주세요!.");
            return
        }
        
        const meat = {
            src: "main_item01",
            title: title,
            category: category,
            text: price
        }

        dispatch(meatActions.editMeatMIddleware(meat_id,meat))
    }

    useEffect(()=>{
        if(editmode && !_meat){
            window.alert("포스트 정보가 없어요!");
            history.goBack();

            return;
        }
    })

    return (
        <>
            <Container>
                <FlexGrid padding="150px 0px 0px 350px">
                    <FlexGrid margin="0px 0px 20px 0px">
                        <Text>제목</Text>
                        <Input value={title} width="50%" _onChange={changeTitle}/>
                    </FlexGrid>
                    <FlexGrid>
                        <img src={preview ? preview : "http://via.placeholder.com/400x300"}/>
                    </FlexGrid>
                    <FlexGrid margin="0px 0px 20px 0px">   
                        <Upload />
                    </FlexGrid>
                    <FlexGrid margin="0px auto 20px auto">
                        <Text>카테고리</Text>
                        <Input value={category} width="50%" _onChange={changeCategory}/>
                    </FlexGrid>
                    <FlexGrid  margin="0px auto 20px auto">
                        <Text>가격</Text>
                        <Input value={price} width="50%" _onChange={changePrice}/>
                    </FlexGrid>
                    <FlexGrid>
                        {editmode?(<Button width="50%" _onClick={editMeat}>고기 수정</Button>):(<Button width="50%" _onClick={addMeat}>고기 입력</Button>)}
                    </FlexGrid>
                </FlexGrid>
            </Container>
        </>
    );
};

export default MeatWrite;