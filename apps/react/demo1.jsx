//var CommentList = React.createClass(
//    render: function(){
//        return (
//            <div className="commentList">
//                Hello,world!I am a CommentList.
//            </div>
//        );
//    }
//);
//
//var CommentForm = React.createClass(
//    render: function(){
//        return(
//            <div className="commentForm">
//                Hello world!I am a CommentForm.
//            </div>
//        ):
//    }
//);

var CommentBox = React.createClass( 
    render: function(){ 
        return(
            <div className="commentBox">
            <h1>Comments</h1>
            </div>
        );
    }
); 

ReactDOM.render(
    <CommentBox />,
    document.getElementById('demo1')
);