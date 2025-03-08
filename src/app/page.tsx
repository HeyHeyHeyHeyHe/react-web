// View: hiển thị các khổi dữ liệu
// Image: hiển thị hình ảnh
// Text: hiển thị text
// TouchableOpacity: hiển thị button có thể click: onPress
// TextInput: hiển thị input: onChangeText
import React from 'react';
import AboutMe from "./component/AboutMe";
import Activity from "./component/Activity";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Navigation from "./component/Navigation";
import Project from "./component/Project";
import Score from "./component/Score";

// sang Html
// View: div, header, footer, section
// Image: img
// Text: p, h1, h2, h3, h4, h5, h6, span (inline), div (block)
// TouchableOpacity: button
// TextInput: input

// style: css
// inline style: style={{color: 'red'}}

// link: a
export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Navigation />
      <Banner />
      <AboutMe />
      <Score />
      <Activity />
      <div 
      style={{
        height:"50vh",
        backgroundColor: "#d3d3d0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap:20
      }}
      >
      <Project />
      <Project />
      <Project />
      <Project />
      </div>
      <Footer />
    </div>
    
  );
}
