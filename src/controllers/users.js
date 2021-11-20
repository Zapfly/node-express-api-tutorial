import express from "express";
import {v4 as uuidv4} from 'uuid';
import { users } from '../routes/users.js'

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} added to DB`);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);

}