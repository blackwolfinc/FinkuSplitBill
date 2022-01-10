import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Navbar } from '../Components/Global/Navbar/Navbar';
import { TampilanKanan } from './Page1Components/TampilanKanan';

export const Page3 = () => {
    return (
        <div>
            <Navbar/>
            Split page
            <TampilanKanan/>
        </div>
    )
}
