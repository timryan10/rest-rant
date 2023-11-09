const React = require('react')
const Def = require('../default')
const comment = require('../../models/comment')

function show (data) {
    let comments = (
        <h3 className='inactive'>No comments yet!</h3>
    )
    let rating = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = sumRatings / data.place.comments.length
        rating = (
            <h3>
                {Math.round(averageRating)} stars
            </h3>
        )
        comments = data.place.comments.map (c => {
            return (
                <div>
                    <h2>{c.rant ? 'Rant! 🤬' : 'Rave! 😍'}</h2>
                    <h4>{c.content} </h4>
                    <h3>
                        <strong>- {c.author} </strong>
                    </h3>
                    <h4>Rating: {c.stars} </h4>
                </div>
            )
        })
    }
    return (
        <Def title={data.place.name}>
            <main>
                 <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={data.place.pic} className="card-img" alt={data.place.name} height='500' />
                            <div>
                                Photo by <a href={data.place.authorLink}>{data.place.picAuthor}</a> on <a href="https://unsplash.com">Unsplash</a>
                            </div>
                            <h3>Located in {data.place.city}, {data.place.state}</h3>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{data.place.name}</h1>
                                <h3 className="card-title">Rating</h3>
                                {rating}
                                <p className="card-text">Not Rated</p>
                                <h3 className="card-title">Description</h3>
                                <h3>{data.place.showEstablished()}</h3>
                                <h4>Serving {data.place.cuisines}</h4>
                            </div>
                        </div>
                    </div>
                    <p>Cuisines: {data.place.cuisines}</p>
                </div>
                <div className='comments-container'>
                    <h3>Comments</h3>
                    {comments}
                    <form action={`/places/${data.place.id}/comment`} method='POST' className='border'>
                        <div className='row'>
                            <label htmlFor="content" key='content'>Comment</label>
                            <input type="text" className='form-control' id='content' name='content' defaultValue='Rant or rave about a place here' />
                        </div>
                        <div>
                            <label htmlFor="author" input='text' key='author'>Author</label>
                            <input className='form-control' id='author' name='author'/>
                        </div>
                        <div>
                            <label htmlFor="stars" key='stars'>Star Rating</label>
                            <input type="range" min='1' max='5' defaultValue='3' step='.5' list='number' id='stars' name='stars' className='container-fluid' />
                            <div>
                                <datalist>
                                    <option value="1" label='1'>1</option>
                                    <option value="2" label='2'>2</option>
                                    <option value="3" label='3'>3</option>
                                    <option value="4" label='4'>4</option>
                                    <option value="5" label='5'>5</option>
                                </datalist>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="rant" key='rant'>Rant</label>
                            <input type="checkbox" name='rant' id='rant' />
                        </div>
                        <button className='btn btn-primary' type='submit' value='submit'>Submit</button>
                    </form>
                </div>
                <div className='button-container'>
                    <a href={`/places/${data.index}/edit`}><button className='btn btn-primary'>Edit</button></a>
                    <form action={`/places/${data.index}?_method=DELETE`} method='POST' >
                        <button className='btn btn-danger'>Delete</button>
                    </form>
                    <a href='/places'><button className='btn btn-secondary'>Go to places</button></a>
                </div>
            </main>
        </Def>
    )
}

module.exports = show