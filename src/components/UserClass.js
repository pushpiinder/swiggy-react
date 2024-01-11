import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,

            userInfo: {
                login: "@johndoe",
                location: "Default",
                avatar_url: "Dummy photo - http//dummy.com"
            }
        }

        console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount() {
        console.log(this.props.name + "Child componentDidMount() is called ");
        //Api call is made here

        const options = {
            method: "GET", // or "POST" or any other HTTP method
            headers: {
             "Authorization": "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"
            },
          };

        const data = await fetch("https://api.github.com/users/pushpiinder", options);
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
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

                <h3>State variable initialisation + componentDidUpdate</h3>
                <img className="github-image" src={this.state.userInfo.avatar_url} />
                <p>Login: {this.state.userInfo.login}</p>
                <p>Location: {this.state.userInfo.location == null ? "null" : "NaN"}</p>
            </div>
        )
    }
}

export default UserClass;