/**
 * 制作组件：
 * 从服务器获取数据
 * 
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
ReactDOM.render(
  React.createElement(CommentBox, {url: "/api/comments"}),
  document.getElementById('content')
);