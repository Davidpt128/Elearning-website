import "./App.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage";
import ListPage from "./pages/ListPage/ListPage";
import HomeTemplate from "./templates/HomeTemplate";
import AdminTemplate from "./templates/AdminTemplate";
import Info from "./pages/Info/Info";
import Demo from "./pages/Demo/Demo";
import UserPage from "./pages/UserPage/UserPage";
import ClassPage from "./pages/ClassPage/ClassPage";
import UpdateClass from "./pages/ClassPage/UpdateClass";
import UpdateUser from "./pages/UserPage/UpdateUser";
import DetailPage from "./pages/DetailPage/DetailPage";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/dangnhap" component={LoginPage} />
        <HomeTemplate exact path="/dangky" component={SignUpPage} />
        <HomeTemplate exact path="/home" component={HomePage} />
        <HomeTemplate exact path="/danhmuckhoahoc" component={ListPage} />
        <HomeTemplate exact path="/thongtinnguoidung" component={Info} />
        <HomeTemplate exact path="/chitiet/:postid" component={DetailPage} />

        {/* <HomeTemplate exact path="/demo" component={Demo} /> */}

        <AdminTemplate exact path="/quanlynguoidung" component={UserPage} />
        <AdminTemplate exact path="/quanlykhoahoc" component={ClassPage} />
        <AdminTemplate exact path="/themkhoahoc" component={UpdateClass} />
        <AdminTemplate exact path="/themnguoidung" component={UpdateUser} />

        <HomeTemplate exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
