/**
 * 制作组件：
 * 更新state
 * 
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var CommentBox = React.createClass({
	getInitialState: function(){
		return {data: []};
	},
	//omponentDidMount 是一个组件渲染的时候被 React 自动调用的方法
	componentDidMount: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				//动态更新界面的关键点就是调用 this.setState()
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	render: function(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
});
