const Task = require('../models/taskSchema')
const express = require('express')
const router = express.Router()

//  *   Router for creating new Task
router.post('/', async(req, res) => {

    // res.send('Hello from create route. API check.')

    try {
        const task = await new Task(req.body).save()
        res.send(task)
    } catch(error) {
        res.send(error)
    }
})

//  *  Router for getting the tasks
router.get('/', async(req,res) => {
    try {
        const tasks = await Task.find()
        res.send(tasks)
    } catch (error) {
        res.send(error)
    }
})

//  * Router for updating the tasks
router.put('/:id', async(req,res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            { _id: req.params.id},
            req.body
        )
        res.send(task)
    } catch (error) {
        res.send(error)
    }
})

//  *  Router for deleting the tasks
router.delete('/:id', async(req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.send(task)
    } catch (error) {
        res.send(error)
    }
})
module.exports = router