/**
 * 制作组件：
 * Markdown是一种简单的格式化内联文本的方式，可以将Markdown文本转换成原生HTML。
 * 添加Markdown语法格式的评论
 * 
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var Comment = React.createClass({
	render: function(){
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{marked(this.props.children.toString())}
			</div>
		);
	}
});
