import * as React from 'react';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import axios from "axios";
import {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";
import Divider from '@mui/material/Divider';


export default function QuestionList() {

    const [questionList, setQuestionList] = useState([]);

    useEffect(async () => {
        const response = await axios.get("https://localhost:44338/api/Questions");
        setQuestionList(prevState => response.data);
    }, []);


    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg" sx={{
                background: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",
                minHeight: 800
            }}>

                <List sx={{width: '100%', maxWidth: 1500 }}>
                    {questionList.map((question, index) => {

                        return <QuestionItem key={index} questionTitle={question.title} postedTimeDate={question.date}/>
                    })}
                </List>

            </Container>
        </React.Fragment>

    )
        ;
}



