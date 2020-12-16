import React from 'react';
import UserHead from './UserHead';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPost();
    }

    render() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <UserHead id={post.userId}></UserHead>
                </div>
            );
        });
    }
}
const mapState = (state) => ({ posts: state.post });
const mapDispatch = {
    fetchPost: fetchPost
}
export default connect(mapState, mapDispatch)(PostList);