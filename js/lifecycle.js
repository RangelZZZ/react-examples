const App = React.createClass({
    getDefaultProps: function () {
        console.log("getDefaultProps,1");
        return {name: "hahh"}

    },

    getInitialState: function () {
        console.log("getInitialstate,2");
        return {ready: false}
    },

    componentWillMount: function () {
        console.log("componentWillMount",3);
        this.setState({ready:true});
    },

    render: function () {
        console.log("render,4");
        return <div>
            hello ,{this.state.ready? this.props.name:"world"}
        </div>
    },
    componentDidMount:function () {
        console.log("componentDidMount,5");

    }

});


ReactDOM.render(
    <App/>,document.getElementById("content"));