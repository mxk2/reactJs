/**
 * 制作组件：
 * 更新state，UI自动更新
 * 
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var CommentBox = React.createClass({
	loadCommentsFromServer: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function(){
		return {data: []}
	},
	componentDidMount: function(){
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.sate.data} />
				<CommentForm />
			</div>
		);
	}
});
ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
