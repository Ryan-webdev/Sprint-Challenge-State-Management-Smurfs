import React from 'react';
import {getSmurf, postSmurf} from '../actions/smurfActions';
import {useSelector, useDispatch} from 'react-redux'
import SmurfForm from './smurfForm'

const SmurfList = () =>{
const smurfs = useSelector( state => state.smurfs);
const dispatch = useDispatch();
console.log(smurfs);

return(
    <>
    <SmurfForm />
    {smurfs.fetching ? (
        <h2>Trying to find some smurfs</h2>
    ) : (
        <button
        onClick={() => dispatch(getSmurf(smurfs))}>Get Smurfs</button>
    )}

        {smurfs.map(smurf => (
            <div key={smurf.id}>
                <h3>{smurf.name}</h3>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
            </div>
        ))}

    </>
)
}

export default SmurfList