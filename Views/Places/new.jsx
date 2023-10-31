const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form  method='POST' action='/places'>
                    <div className='form-group'>
                        <label htmlFor='name' >Place Name</label>
                        <input className='form-control' id='post-name' name='name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' type="url" name="pic" id="post-pic" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="city">City</label>
                        <input className='form-control' name="city" id="post-city" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="state">State</label>
                        <input className='form-control' id='post-state' name='state' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className='form-control' id='post-cuisines' name='cuisines' required />
                    </div>
                    <input className='btn btn-primary' type="submit" value='Add Place' />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form