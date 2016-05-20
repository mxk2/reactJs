/**
 * 制作组件：
 * 追加新的评论
 *
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var CommentForm = React.createClass({displayName: "CommentForm",
    handleSubmit: function(e){
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if(!text || !author){
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.refs.author.value = "";
        this.refs.text.value = "";
        return;
    },
    render: function(){
        return (
            React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}
                
            )
        );
    }
});