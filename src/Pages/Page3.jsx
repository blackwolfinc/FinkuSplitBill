import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Navbar } from '../Components/Global/Navbar/Navbar';
import { TampilanKanan } from './Page1Components/TampilanKanan';
import { Bodypage3 } from './Page3Components/Bodypage3';

export const Page3 = () => {
    return (
        <div>
            <Navbar/>
            <Bodypage3/>
        </div>
    )
}
