const Childcomponent = React.createClass({
    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps 1');
    },

    shouldComponentUpdate: function () {
        console.log('shouldComponentUpdate 2');
        return true;
    },
    componentWillUpdate: function () {
        console.log('componentWillUpdate 3');
    },
    render: function () {
        console.log('render 4');
        return <p ref='myText'>
            Hello, {this.props.name ? this.props.name : 'world'}
        </p>
    },
    componentDidUpdate: function () {
        console.log('componentDidUpdate 5');
        $(this.refs.myText).append('\n I\'m here!');

    }
});

const ParentConponent = React.createClass({
    getInitialState: function () {
        return {name: ''}
    },

    handleChange: function (event) {
        this.setState({name:event.target.value});
    },
    render: function () {
        return <div>
            <Childcomponent name={this.state.name}/>
            <input type="text" onChange={this.handleChange}/>
        </div>
    }
});

ReactDOM.render(<ParentConponent/>, document.getElementById('content'))

