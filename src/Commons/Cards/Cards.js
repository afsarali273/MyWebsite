import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default class  Cards extends Component{

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <Grid item xs={4}>
                        <Paper >item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper >item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper >item</Paper>
                    </Grid>
                </React.Fragment>
            </div>
        );
    }

}
