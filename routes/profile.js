import express from 'express'
import {Profile} from '../models/profile.js'

const router = express.Router();

// 'profile' will be in the url


router.get('/' , async (_, res) => { // We are not using the res argument so we let others know by putting underscore
    try {
        const profile = await Profile.find();
        res.json(profile)
    } catch(err) {
        console.log(`There is an error: ${err}`)
    }
})

router.patch('/', (req, res) => { // The req will contain the changes that we are requesting
    res.json('patch request is now working')
})

router.post('/', (req, res) => {
    res.json('post request is working')
})

router.delete('/:profileId', (req, res) => { // The underscore is to signify that the default argument is being passed but not being utilized
    res.json(`${req.params.profileId} successfully deleted!`)
})


export const profiles = router;
