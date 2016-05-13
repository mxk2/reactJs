/**
 * 制作组件：
 * 追加新的评论
 *
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var CommentForm = React.createClass({
    render: function(){
        return (
            <form className="commentForm">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Say something" />
                <input type="submit" value="Post" />
            </form>
        );
    }
});