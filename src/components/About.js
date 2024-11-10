import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

// const About = () => {

//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste About page</h2>
//             <User name={"Pushpinder (functional)"} location={"Delhi functional"} contact={"@pushpiinder functional"} />
//             <UserClass name={"Pushpinder (class based)"} location={"Delhi class"} contact={"@pushpiinder class"} />
//         </div>
//     )
// }

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount() is called ");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Class Component</h1>
        <br></br>
        <div>
          LoggedIn User :
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <span className="text-xl font-bold"> {loggedInUser}</span>
            )}
          </UserContext.Consumer>
        </div>
        <br></br>
        <h2>This is About page</h2>
        {/* Belocode will make 2 instances of a same class */}
        <UserClass
          name={"Pushpinder (class based)"}
          location={"Delhi class"}
          contact={"@pushpiinder class"}
        />
        <UserClass
          name={"Elon (class based)"}
          location={"US class"}
          contact={"@elonmusk class"}
        />
      </div>
    );
  }
}

export default About;
