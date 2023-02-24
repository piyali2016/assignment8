import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProductList() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => setproducts(json.products));
  }, [])
  console.log(products);
  return (
    products.map(product => {
       return (
            <Card key={product.id} sx={{ maxWidth: 300, float:'left', margin:'20px', height:350 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {product.thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}<br/>
           <b> price:{product.price}</b><br/>
           </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
        )
        
     })
    
  );
}
