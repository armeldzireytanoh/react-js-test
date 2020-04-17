import React, {Component} from 'react';

// Material UI Imports
import Grid from '@material-ui/core/Grid';


class HomePage extends Component {

    render() {
        return (
            <div>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '90vh' }}
                >  
                </Grid>
            </div>
        );
    }
}

export default HomePage;