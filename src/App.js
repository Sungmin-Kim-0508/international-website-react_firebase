import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { admin_routes } from "./urls";
import Admin_Home from "./components/admin/Admin_Home";
import Admin_About from "./components/admin/Admin_About";
import Admin_Students from "./components/admin/Admin_Students";
import Admin_Volunteer from "./components/admin/Admin_Volunteer";
import Admin_Contact from "./components/admin/Admin_Contact";
import Admin_NewsDetails from "./components/admin/Admin_NewsDetails";
import Admin_News from "./components/admin/Admin_News";

class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Router>
            <Switch>
              <Route exact path={admin_routes.home} component={Admin_Home} />

              <Route path={admin_routes.about} component={Admin_About} />
              <Route
                path={admin_routes.forStudents}
                component={Admin_Students}
              />
              <Route
                path={admin_routes.forVolunteers}
                component={Admin_Volunteer}
              />
              <Route path={admin_routes.contact} component={Admin_Contact} />
              <Route
                path={admin_routes.newsDetails}
                component={Admin_NewsDetails}
              />
              <Route path={admin_routes.news} component={Admin_News} />
              {/* <Route path={admin_routes.createNews} component={CreateNews} />
            <Route path={global_routes.signIn} component={SignIn} />
            <Route path={global_routes.signUp} component={SignUp} /> */}
            </Switch>
          </Router>
        </Fragment>
      </div>
    );
  }
}

export default App;
