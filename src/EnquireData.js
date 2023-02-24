import { useState, useEffect } from "react";
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, Alert} from '@mui/material';
import { Container } from "@mui/system";

export default function EnquireData({cid,cname}) {
    const [id, setid] = useState(Date.now());
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [comment, setcomment] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:3010/enquires", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: id,
          coourseId: cid,
          name: name,
          email: email,
          comment: comment,
          "courseName": cname
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log(res);
      } else {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <Container>
    <h1>Enqury Form</h1>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {setname(event.target.value)}}
          />
           <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(event) => {
              console.log(event.target.value);
              setemail(event.target.value)}}
          />
          <TextField
            margin="dense"
            id="comment"
            label="Enquiry Details"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {setcomment(event.target.value)}}
          />
          <Button variant="contained" size="small" onClick={handleSubmit}>Enqury</Button>
    </Container>
  );
}