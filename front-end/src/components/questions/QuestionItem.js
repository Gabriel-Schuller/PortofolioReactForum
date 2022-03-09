import React from 'react';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {green} from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Divider from '@mui/material/Divider';

function QuestionItem({questionTitle, postedTimeDate}) {
    let timeFrame = "Question was posted at: ".concat(postedTimeDate.substring(11, 16));
    timeFrame = timeFrame.concat(", on ", postedTimeDate.substring(0, 10));
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{bgcolor: green[500]}}>
                        <AssignmentIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={questionTitle}
                    secondary={timeFrame}/>
            </ListItem>
            <Divider light={false} variant="middle" component="li"/>
        </>
    )
};

export default QuestionItem;
