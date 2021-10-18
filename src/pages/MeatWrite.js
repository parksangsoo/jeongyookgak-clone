import React,{useState} from 'react';
import { Container, FlexGrid, Text, Image, Input, Button } from '../elements/index';
import Upload from "../shared/Upload";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

const MeatWrite = () => {
    const dispatch = useDispatch();
    const[title,setTitle] = useState('');
    const[category,setCategory] = useState('');
    const[price,setPrice] = useState('');
    const preview = useSelector((state) => state.image.preview);

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeCategory = (e) => {
        setCategory(e.target.value)
    }

    const changePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMeat = (e) => {
        if(!title){
            window.alert("타이틀을 넣어주세요!.");
            return
        }
        if(!preview){
            window.alert("이미지를 넣어주세요!.");
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
        

    }

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
                        <Button width="50%" _onClick={addMeat}>고기 입력</Button>
                    </FlexGrid>
                </FlexGrid>
            </Container>
        </>
    );
};

export default MeatWrite;