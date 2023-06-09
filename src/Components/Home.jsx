import { Button, Grid, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React, { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const tileBox = {
    marginTop:"60px",
    fontWeight: "600",
    marginBottom: "30px",
    fontSize: "40px",
    color: "#6c609c"
  };
  const cards={
   
    textAlign: "left",
    paddingLeft: "50px",
    margin: "10px",
    border: "1px solid lightgray",
    backgroundColor:"#e1e1e1"
  }
  const titles={
fontWeight:"600"
  }
  const quantitys={
    fontWeight:"600",
    fontSize:"16px",
    marginTop:"-15px",
    marginBottom:"10px"
  }
  const descriptions={
color:"gray"
  }
  const btn={
backgroundColor:"#7d2020",
border:"1px solid #7d2020",
marginBottom: "50px"
  }
const Home = () => {
    // var todolist=[];
    
    var [title,setTitleValue]=useState();
    var [quantity,setQuantityValue]=useState();
    var [description,setDescriptionValue]=useState();
    var [todolist,setList]=useState([]);
    const titleChange=(e)=>
    {
        setTitleValue(e.target.value);
    }
    const quantityChange=(e)=>
    {
        setQuantityValue(e.target.value);
    }
    const descriptionChange=(e)=>
    {
        setDescriptionValue(e.target.value);
    }
   
    const addTodo = () =>
    {
      // setList({title,quantity,description});

      setList(current => [...current, {title,quantity,description}]);
      setTitleValue("");
      setQuantityValue("");
      setDescriptionValue("");
    }
  return (
    <div>
        <Grid container spacing={2}>
  <Grid item xs={2} md={2}>
    {/* <Item>xs=8</Item> */}
  </Grid>
  <Grid item xs={8} md={8}>
    {/* <Item>xs=4</Item> */}
    <Typography variant='h4' style={tileBox}>ToDo Application</Typography>
  </Grid>
  <Grid item md={2}xs={2}>
    {/* <Item>xs=4</Item> */}
  </Grid>
  <Grid item xs={1} md={1}>
    {/* <Item>xs=4</Item> */}
  </Grid>
  <Grid item xs={10} md={10}>

  <Item>
  <TextField style={{width:'30%'}} onChange={titleChange} value={title}  id="outlined-basic" label="Todo Title" variant="outlined" />
  </Item>
  <Item>
  <TextField style={{width:'30%'}} onChange={quantityChange} value={quantity}  id="outlined-basic" label="Quantity" variant="outlined" />
  </Item>
  <Item>
  <TextField style={{width:'30%'}} onChange={descriptionChange} value={description}  id="outlined-basic" label="Description" variant="outlined" />
  </Item>
  <Item>
  <Button variant="contained" style={btn} onClick={addTodo} endIcon={<AddIcon/>}>
  SUBMIT
</Button>
  </Item>
  </Grid>
  <Grid item xs={1} md={1}>
    {/* <Item>xs=4</Item> */}
  </Grid>
  <Grid item xs={1} md={1}>
  </Grid>
  <Grid item xs={10} md={10}>
  {todolist.map((value,index)=>{
                return(
  <Card style={cards}>
      <CardHeader style={titles}
        title={value.title}
      />
      <CardContent>
      <Typography style={quantitys} variant="h6" color="text.secondary">
       Quantity :  {value.quantity}
        </Typography>
        <Typography style={descriptions} variant="body2" color="text.secondary">
        {value.description}
        </Typography>
      </CardContent>
    </Card>
     )
    })}
  </Grid>
  <Grid item xs={1} md={1}>
  </Grid>
</Grid>
    </div>
  )
}

export default Home