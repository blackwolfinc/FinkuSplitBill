import { Container, Grid } from '@material-ui/core'
import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={5}>
                    <Grid item > 
                    <li><a href="/UserPage">UserPage</a></li>
                    </Grid>
                    <Grid item > 
                    <li><a href="/SplitPage">SplitPage</a></li>
                    </Grid>
                    <Grid item > 
                    <li><a href="/">HpmePage</a></li>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
