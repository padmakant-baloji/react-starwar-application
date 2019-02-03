import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class PlanetList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const classes = this.props;
        const data = this.props.data;
        return (
            <div>
                <div className="row">
                    {data.map((x, index) => (
                        <div className="col-3 col-md-3" key={index}>
                            <Card style={{ height: "200px", width: "250px", margin: "10px" }}>

                                <CardContent>
                                    <p className="planet-Card-header">{x.name}</p>
                                    <p className="planet-Card-text">
                                        {x.name} has {x.population} population  and its Climate is {x.climate}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}