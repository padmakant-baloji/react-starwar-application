import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PlanetList from './PlanetList';
import SearchResults from './SearchResults'
import api from '../../services/api-list';
import Loader from '../Loader/Loader';
import { updatelist } from '../../actions/planetAction'
import { connect } from "react-redux";

class Planet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plist: [],
            search: "",
            searchResult: [],
            loader: true,
            count: 0,
            isSearch: false
        }
    }
    planetFilter(searchText) {
        let lists = this.props.plist;
        return lists.filter((list) => {
            let name = list.name
            let searchUpperCase = searchText
            return name.toUpperCase().match(searchUpperCase.toUpperCase());
        })
    }
    handleSearch = (e) => {
        const self = this;
        const s = e.target.value;
        const lists = this.planetFilter(s.trim())

        this.setState(({
            count: this.state.count + 1,
            search: s,
            searchResult: lists
        }))


        if (!this.props.session.isAdmin) {
            if (this.state.count == 1) {
                setInterval(function () { self.setState({ count: 0, isSearch: false }) }, 60000);
            }
            if (this.state.count >= 10) {
                this.setState({ search: "", isSearch: true })
            }
        }

        if (lists.length < 1) {
            this.setState({ loader: true })
            api.getplanetsByName({ name: s.trim() }).then((res) => {
                if (res.data.length > 0) {
                    this.props.updatelist(res.data)
                    self.setState({ searchResult: res.data, loader: false })
                }
                else {
                    self.setState({ searchResult: [], loader: false })
                }
            }).catch((error) => {

                self.setState({ searchResult: [], loader: false })


            })
        }
        else {
            this.setState({ searchResult: lists });
        }
    }
    componentDidMount() {
        api.getlanets().then((resp) => {
            this.props.updatelist(resp.data)
            this.setState({ loader: false })
        })
    }
    render() {
        const classes = this.props;
        return (
            <div>
                <TextField
                    disabled={this.state.isSearch}
                    id="outlined-name"
                    label="Search Planets"
                    className={classes.textField}
                    value={this.state.name}
                    margin="normal"
                    variant="outlined"
                    fullWidth={true}
                    onChange={(e) => (this.handleSearch(e))}
                />
                {(this.state.loader) ? <Loader /> : (
                    <div>
                        {this.state.search !== "" ? <SearchResults data={this.state.searchResult} /> : (
                            <PlanetList data={this.props.plist} />
                        )}
                    </div>
                )}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    plist: state.planets.plist
});
const mapDispatchToProps = dispatch => ({
    updatelist: (planetList) => {
        dispatch(updatelist(planetList));
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Planet);