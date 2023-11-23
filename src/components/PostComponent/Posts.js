import {Component} from "react";
import {userService} from "../../services/postService";
import {Post} from "./Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        userService.getAll().then(({data}) => this.setState({posts: data}));
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }

    render() {
        console.log("render");
        return (
            <div>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>

        )
    }
}

export {Posts}
