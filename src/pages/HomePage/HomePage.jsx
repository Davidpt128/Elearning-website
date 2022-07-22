import React from "react";
import "../../assets/scss/pages/_home-page.scss";
import ListItem from "./ListItem";
import Carosel from "./Carosel";

export default function HomePage(props) {
  return (
    <div>
    <Carosel></Carosel>
    <ListItem></ListItem>
    </div>
    
  );
}
