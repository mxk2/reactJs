/**
 * 制作组件：
 * 追加新的评论
 *
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var CommentBox = React.createClass({displayName: "CommentBox",
    loadCommentsFromServer: function(){
        $.ajax({
            url: this.props.url,
            dataType: "json",
            cache: false,
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleCommentSubmit: function(comment){
        //submit to the server and refresh the list
    },
    getInitialState: function(){
        return {data: []};
    },
    componentDidMount: function(){
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props,pollInterval);
    },
    render: function(){
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "COmments"), 
                React.createElement(CommentList, {data: this.state.data}), 
                React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit})
            )
        );
    }
});