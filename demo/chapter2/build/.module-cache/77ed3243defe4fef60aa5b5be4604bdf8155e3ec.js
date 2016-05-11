/**
 * 制作组件：
 * 更新state，UI自动更新
 * 
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var CommentBox = React.createClass({displayName: "CommentBox",
	loadCommentsFromServer: function(){
		debugger;
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
	//getInitialState() 在组件的生命周期中仅执行一次，用于设置组件的初始化 state 
	getInitialState: function(){
		return {data: []}
	},
	//componentDidMount 是一个组件渲染的时候被 React 自动调用的方法
	componentDidMount: function(){
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function(){
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentList, {data: this.state.data}), 
				React.createElement(CommentForm, null)
			)
		);
	}
});
ReactDOM.render(
  React.createElement(CommentBox, {url: "../../data/comments.json", pollInterval: 2000}),
  document.getElementById('content')
);
