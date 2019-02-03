import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class ButtonAppBar extends React.Component {
    constructor(props) {
        super(props);
    }
    logout = () => {

        localStorage.removeItem("userTokenData");
        this.props.logout()

    }

    render() {
        const classes = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                        StarWars
                        </Typography>
                        <section className="logot">
                            <Button color="inherit"  onClick={this.logout}>Logout</Button>
                        </section>
                    </Toolbar>
                </AppBar>
            </div>
        );

    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({ type: "LOGOUT" })
})
const mapStateToProps = state => ({
    session: state.session
})
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar));