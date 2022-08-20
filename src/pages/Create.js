import React from 'react'
import {Typography} from "@mui/material";
import Button from '@mui/material/Button';
import {Container} from "@mui/material";

export default function Create() {
    return (
        <Container>

            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
            >
                create new
            </Typography>
            <Button
                onClick={()=>
            console.log('works')}
                type="submit"
                color="secondary"
                variant="contained"
            >submit</Button>
            {/*<Button type="submit" color="primary">submit</Button>
            <Button type="submit" color="secondary" variant="outlined">submit</Button>

            */}

        </Container>
    )
}