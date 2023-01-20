import React from 'react'
import {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import movies from './movies.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';

export default function MovieList(props) {
 
    const Item = props.item;
    console.log("::::",Item)



  return (
    <div className='post'>

        {
            Item.map((e)=>{

                return(
                 
                    <Card className='card' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={`https://image.tmdb.org/t/p/original${e.backdrop_path}`}

                        />
                        <CardContent>
                            <Typography className='title' gutterBottom variant="h5" component="div">
                                {e.title}
                            </Typography>

                        </CardContent>

                    </Card>
                );

            })
        }

</div>
  )}
    
