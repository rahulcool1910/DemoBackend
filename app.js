'use strict'
const express = require('express')
const cors = require('cors')
const app = express()


const ticketList = [{
        ticketid: 1,
        handlerName: 'Mr.X',
        dept: 'Admin Team',
        service: 'Laptop Issue',
        location: 'Chennai',
        date: '04/03/2021',
        status: 'success',
    },
    {
        ticketid: 2,
        handlerName: 'Mr.Y',
        dept: 'HR Team',
        service: 'Pay Report',
        location: 'Chennai',
        date: '03/03/2021',
        status: 'pending',
    },
    {
        ticketid: 3,
        handlerName: 'Mr.X',
        dept: 'Admin Team',
        service: 'Laptop Issue',
        location: 'Chennai',
        date: '04/03/2021',
        status: 'success',
    },
    {
        ticketid: 4,
        handlerName: 'Mr.Y',
        dept: 'HR Team',
        service: 'Pay Report',
        location: 'Chennai',
        date: '03/03/2021',
        status: 'pending',
    },
    {
        ticketid: 5,
        handlerName: 'Mr.X',
        dept: 'Admin Team',
        service: 'Laptop Issue',
        location: 'Chennai',
        date: '04/03/2021',
        status: 'success',
    },
    {
        ticketid: 6,
        handlerName: 'Mr.Y',
        dept: 'HR Team',
        service: 'Pay Report',
        location: 'Chennai',
        date: '03/03/2021',
        status: 'pending',
    },
    {
        ticketid: 7,
        handlerName: 'Mr.X',
        dept: 'Admin Team',
        service: 'Laptop Issue',
        location: 'Chennai',
        date: '04/03/2021',
        status: 'success',
    },
    {
        ticketid: 8,
        handlerName: 'Mr.Y',
        dept: 'HR Team',
        service: 'Pay Report',
        location: 'Chennai',
        date: '03/03/2021',
        status: 'pending',
    },
    {
        ticketid: 9,
        handlerName: 'Mr.X',
        dept: 'Admin Team',
        service: 'Laptop Issue',
        location: 'Chennai',
        date: '04/03/2021',
        status: 'success',
    },
    {
        ticketid: 10,
        handlerName: 'Mr.Y',
        dept: 'HR Team',
        service: 'Pay Report',
        location: 'Chennai',
        date: '03/03/2021',
        status: 'pending',
    },
    {
        ticketid: 12,
        handlerName: 'Mr.X',
        dept: 'Admin Team',
        service: 'Laptop Issue',
        location: 'Chennai',
        date: '04/03/2021',
        status: 'success',
    },
    {
        ticketid: 11,
        handlerName: 'Mr.Y',
        dept: 'HR Team',
        service: 'Pay Report',
        location: 'Chennai',
        date: '03/03/2021',
        status: 'pending',
    },
    {
        ticketid: 13,
        handlerName: 'Mr.X',
        dept: 'Admin Team',
        service: 'Laptop Issue',
        location: 'Chennai',
        date: '04/03/2021',
        status: 'success',
    },
    {
        ticketid: 14,
        handlerName: 'Mr.Y',
        dept: 'HR Team',
        service: 'Pay Report',
        location: 'Chennai',
        date: '03/03/2021',
        status: 'pending',
    },
];



app.use(
    (req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers",
            "Origin, Content-Type,X-Request-With,Accept,Authorization");
        res.setHeader("Access-Control-Allow-Method",
            "PUT,POST,GET,DELETE,OPTIONS");
        next();
    }
)

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/get', (req, res) => {
    const query = req.query;
    const limit = query.pageSize
    const offset = query.currentPage
    const sortBy = query.sortBy
    const Ascending = query.ascending
    let end = Math.min(ticketList.length, (offset - 1) * limit + limit);
    console.log((+offset - 1) * +limit + +limit);
    let clone = [...ticketList]
    if (sortBy) {
        clone = clone.sort((a, b) => {

            if (a[sortBy] < b[sortBy]) {
                return -1;
            }
            if (a[sortBy] > b[sortBy]) {
                return 1;
            }
            return 0;
        })
    }
    if (Ascending === 'true') {
        clone = clone.reverse()
    }

    res.status(200).json(
        clone.splice((+offset - 1) * +limit, limit)


    )
})
app.listen("3000", () => {
    console.log("started")
})

module.exports = app;