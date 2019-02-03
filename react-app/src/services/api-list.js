import {
    _call
} from './api-utils';

const api = {

    getUserDetails: (data) => (
        console.log("data",data),
        _call({
            method:"POST",
            url:"/getUserDetails",
            data
        })
    ),
    getlanets: () => (
        _call({
            method: "GET",
            url: "/getPlanets"
        })
    ),
    getplanetsByName: (data) => (
        _call({
            method: "POST",
            url: "/getplanetsByName",
            data
        })
    ),
};
module.exports = api;
