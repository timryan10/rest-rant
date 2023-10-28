const React = require('react')
const Def = require('./default')

function erro404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                    <img src="/images/penguin.jpg" width= "400" height="400" alt="penguin" />
                    <div>Photo by <a href="https://unsplash.com/@corneliusventures">Cornelius Ventures</a>on <a href="https://unsplash.com/">Unsplash</a></div>
                </div>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = erro404