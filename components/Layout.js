
import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import useStyles from '../utils/styles'

export default function Layout({ children }) {
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>Next Amazona</title>
            </Head>
            <AppBar className={classes.navbar} position="static">
                <Toolbar>
                    <Typography>amazona</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>
                    All right reserved. Next Amazona
                </Typography>
            </footer>
        </div>
    )
}
