/**
 * 制作组件：
 * 更新CommentBox组件代码，使用新创建的组件。
 * 
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var CommentBox = Reqct.createClass({
	render: function(){
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentList, null), 
				React.createElement(CommentForm, null)
			)
		);
	}
});
