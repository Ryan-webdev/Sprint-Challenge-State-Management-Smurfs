import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions/smurfActions'

const SmurfForm = (props) => {
    const [addedSmurf, setAddedSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChange = e => {
        setAddedSmurf({
            ...addedSmurf,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.postSmurf(addedSmurf);
        setAddedSmurf({
            name: '',
            age: '',
            height: ''
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1%' }}>
                    <input
                        type='text'
                        name='name'
                        placeholder= 'Smurf Name'
                        value={addedSmurf.name}
                        onChange={handleChange}
                    />
                </div>
                <div style={{ marginBottom: '1%' }}>
                    <input
                        type='text'
                        name='age'
                        placeholder= 'Enter age'
                        value={addedSmurf.age}
                        onChange={handleChange}
                    />
                </div>
                <div style={{ marginBottom: '1%' }}>
                    <input
                        type='text'
                        name='height'
                        placeholder= 'enter smurf height'
                        value={addedSmurf.height}
                        onChange={handleChange}
                    />
                </div>

                <button style={{ marginBottom: '1%' }}>Add Smurf</button>




            </form>

        </>
    )

}

const mapStateToProps = state => {
    console.log(state)
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { postSmurf })(SmurfForm)