import {Component} from "react";
import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment";

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comments : []
        }
    }
    componentDidMount() {
        commentsService.getAllComments().then(({data}) => this.setState({comments: data}));
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {Comments}