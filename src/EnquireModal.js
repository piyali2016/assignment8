import { useState, useEffect } from "react";
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';

export default function EnquireModal({cid,cname}) {
  const [open, setOpen] = useState(false);
  const [id, setid] = useState(Date.now());
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [comment, setcomment] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);
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
    <div>
      <Button variant="contained" size="small" color="primary" onClick={handleClickOpen}>
      Enquire
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enquire Form for {cname}</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Please enter your details:
          </DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" size="small" onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}