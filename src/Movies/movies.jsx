import React from 'react'
import { useState, useEffect } from 'react';
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#e3e3e3',
    p: 4,
};

export default function Movies(props) {

    console.log(props.item)

    const [movies, setMovies] = useState([]);
    const [id, setId] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false)
    console.log("CLICKED")
    console.log(open);
};

    const API_KEY = 'd7c50c3eb3952ee04bdbba082fbc32cf'

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=d7c50c3eb3952ee04bdbba082fbc32cf')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                setMovies(data?.results);
            })

    }, [])

    return (
        <div className='post'>
            {   
                movies?.map((e) => {
                    return (
                        <div>

                            <Card onClick={() => {
                                setId(e.id)
                                handleOpen()


                            }} className='card' sx={{ maxWidth: 345 }}>
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





                        </div>

                    );

                })

            }

            {
                movies.map((e) => {

                    // conditional rendering

                    if ((e.id == id) && (open)) {
                        return (
                            <div>
                                <Modal
                                    keepMounted
                                    open={open}
                                    
                                     onClose={handleClose}
                                    aria-labelledby="keep-mounted-modal-title"
                                    aria-describedby="keep-mounted-modal-description"
                                >
                                    <Box sx={style}>
                                        <ClearIcon  onClick={handleClose} className='icon' />
                                        
                                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                            {e.original_title}
                                        </Typography>
                                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                            Release Data: {e.release_date}
                                        </Typography>
                                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                            Rating: {e.vote_average}
                                        </Typography>
                            
                                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                             {e.overview}
                                        </Typography>
                                    </Box>
                                </Modal>

                            </div>

                        )
                    }

                })

            }
        </div>

    )
}
