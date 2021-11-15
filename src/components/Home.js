
import { Link } from 'react-router-dom'
import Pokeball from './images/Pokeball.png'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    handleClick = () => {
        this.props.deletePost( this.props.post.id );
        this.props.history.push( '/' )
    }
    render() {
            const {posts} = this.props
            const postList = posts.length ? ( posts.map( post => {
            return (
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="Pokeball" />
                    <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        } )
        ) : (
            <div className='center'>No post to show</div>
        );return (
        <div className='container home'>
        <h4>Home</h4>
        {postList}
        </div>
        )
    }
}
    
        const mapStateToProps = (state) => {
            return {
                posts: state.posts
            }
        }
           
export default connect(mapStateToProps)(Home)