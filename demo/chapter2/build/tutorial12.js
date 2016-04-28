/**
 * 制作组件：
 * 响应状态变化
 * 到目前为止，每一个组件都根据自己的 props 渲染了自己一次。 props 是不可变的：它们从父组件传递过来，“属于”父组件。为了实现交互，我们给组件引入了可变的 state 。this.state 是组件私有的，可以通过调用 this.setState() 来改变它。当 state 更新之后，组件就会重新渲染自己。
 * 
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var CommentBox = React.createClass({displayName: "CommentBox",
	//getInitialState() 在组件的生命周期中仅执行一次，用于设置组件的初始化 state 
	getInitialState: function(){
		return {data: []};
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
