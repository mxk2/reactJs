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
    render: function(){
        return (
            React.createElement("form", {className: "commentForm"}, 
                React.createElement("input", {type: "text", placeholder: "Your name"}), 
                React.createElement("input", {type: "text", placeholder: "Say something"}), 
                React.createElement("input", {type: "submit", value: "Post"})
            )
        );
    }
});