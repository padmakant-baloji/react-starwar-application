import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);

    }
    sort = (list) => (
        list.sort(function (a, b) {
            if (a.population !== "unknown") {
                return a.population - b.population
            }
            else {
                return 1 - b.population
            }
        })
    )

    render() {
        const data = this.sort(this.props.data);
        let size = 12;
        return (
            <div>
                {
                    data.length <= 0 ? (<div><h1>No data found :-(</h1></div>) : (
                        <div className="row">
                            {data.map((x, index) => (
                                x.population == "unknown" ? (size = size) : (index > 1 && x.population === data[index - 1].population ? size = size : size = size + 2),
                                <div className="col-3 col-md-3" key={index}>
                                    <Card style={{ height: "200px", width: "250px", margin: "10px" }}>
                                        {/* <CardHeader title={x.name}
                                        /> */}
                                        <CardContent>
                                            <p style={{ fontSize: size,color:"#3f51b5" }}>{x.name}</p>
                                            <p className="planet-Card-text">
                                                {x.name} has {x.population} population  and its Climate is {x.climate}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}