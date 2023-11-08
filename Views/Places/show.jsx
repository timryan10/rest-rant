const React = require('react')
const Def = require('../default')
const comment = require('../../models/comment')

function show (data) {
    let comments = (
        <h3 className='inactive'>No comments yet!</h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map (c => {
            return (
                <div>
                    <h2></h2>
                    <h4></h4>
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