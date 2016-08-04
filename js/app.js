const App = React.createClass({
    getInitialState: function () {
        return {
            liked: false
        }
    },
    handleOnclick: function () {
        this.setState({
            liked: !this.state.liked
        })
    },

    render: function () {
        const text = this.state.liked ? "liked" : "disliked";
        return <div>
            <p onClick={this.handleOnclick}>
                you {text} apple
            </p>
        </div>
    }
});


const Input = React.createClass({
    getInitialState: function () {
        return {
            value: "hello"
        }
    },
    handleOnclick: function (event) {
        this.setState({
            value: event.target.value
        })
    },

    render: function () {
        var value = this.state.value;
        return <div>
            <input type="text" value={value} onChange={this.handleOnclick}/>
            <p>{value}</p>
        </div>
    }
});


ReactDOM.render(
    <div>
        <App/>
        <Input/>
    </div>, document.getElementById("content"));