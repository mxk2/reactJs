//组件属性
var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList">
				<Comment author="Pete Hunt">This is one comment</Comment>
				<Comment author="Jordan Wake">This is *author* comment</Comment>
			</div>
		);
	}
});
