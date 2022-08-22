import React from 'react'
import {Typography} from "@mui/material";
import Button from '@mui/material/Button';
import {Container} from "@mui/material";
import {makeStyles} from '@mui/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import {useState} from "react";

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

export default function Create() {
    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitle('')
        setDetails('')



        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true)
        }
        if (details === '') {
            setDetailsError(true)
        }
        if (title && details) {
            console.log(title, details)
        }
    }

    return (
        <Container size="sm">
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField className={classes.field}
                           onChange={(e) => setTitle(e.target.value)}
                           value={title}
                           label="Note Title"
                           variant="outlined"
                           color="secondary"
                           fullWidth
                           required
                           error={titleError}
                />
                <div className={classes.field}></div>
                <TextField className={classes.field}
                           onChange={(e) => setDetails(e.target.value)}
                           value={details}
                           label="Details"
                           variant="outlined"
                           color="secondary"
                           multiline
                           rows={4}
                           fullWidth
                           required
                           error={detailsError}
                />

                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}>
                    Submit
                </Button>
            </form>


        </Container>
    )
}