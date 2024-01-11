import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        }

        console.log(this.props.name + "Child Constructor");
    }

    componentDidMount() {
        console.log(this.props.name + "Child componentDidMount() is called ");

        //Api call is made here
    }

    render() {
        console.log(this.props.name + "Child Render");

        return (
            <div className="user-card">
                <h1>Class based component</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    })
                }}>Count Increase</button>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2>Count2: {this.state.count2}</h2>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact: {this.props.contact}</h4>
            </div>
        )
    }
}

export default UserClass;