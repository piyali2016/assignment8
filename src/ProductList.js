import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import EnquireModal from './EnquireModal';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCourseList } from './redux/courseSlice'

export default function ProductList() {
  const courses = useSelector((state) => state.course.courses)
  const dispatch = useDispatch()
  useEffect(() => {
  fetch('http://localhost:3010/courses')
    .then(response => response.json())
    .then(json =>dispatch(fetchCourseList(json)))
}, 
[]
);
  return (
    courses.map(course => {
       return (
            <Card key={course.id} sx={{ maxWidth: 345, float:'left', margin:'20px' }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {course.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {course.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <EnquireModal cid={course.id} cname={course.title}></EnquireModal>
      </CardActions>
    </Card>
        )
        
     })
    
  );
}