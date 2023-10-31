const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-RANT</h1>
                <div>
                    <img src="/images/chia-fruit-drink.jpg" width="400" height= "400" alt="chia fruit drink" />
                    <div>
                        Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Gonzalez</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home