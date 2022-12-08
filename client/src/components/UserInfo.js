import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import './UserInfo.css';

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
    this.pic = "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
    this.routeChange = this.routeChange.bind(this)
    this.onFollow = this.onFollow.bind(this)
    this.onLike = this.onLike.bind(this)
  }
  routeChange(){ 
    console.log("do i get here");
    window.location.href = "./"
  }

  //This was a change
  onFollow(){
    console.log("yea do i get here");
  }

  onLike(){
    console.log("yea but do i also get here");
    console.log(this.state.userData.likes.length)
  }

  componentDidMount() {
    console.log("do");
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }

  render() {
    return (
      <div className="App h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-2xl p-10 flex flex-col items-center">
        <div className="relative absolute top-0 right-20" onClick={() => this.routeChange()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-indigo-400 hover:ring-2 ring-offset-2 rounded-full" id="home">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        </div>

        <div className = "relative absolute top-3 left-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 font-bold text-pink-400" id="editPic">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
        </div>

        <div>
          <img src = {this.pic} alt="avatar" className="h-24 hover:ring-2 ring-offset-2 ring-pink-300 cursor-pointer rounded-full"></img>
        </div>
        
        <div id = "name" className="font-semibold text-xl mt-2">{this.state.userData.fname} {this.state.userData.lname}</div>
        
        <div id = "email" className="text-sm text-gray-500">{this.state.userData.email}</div>
        
        <div id = "stats" className="stats flex justify-between items-center my-6 text-sm">
          <div className="stat-sub flex flex-col items-center font-semibold mr-4">
            <div id = "likes" className="stat-num text-indigo-500 font-bold text-md">0</div>
            <div className="stat-num text-indigo-400 text-xs">LIKES</div>
          </div>
          <div className="stat-sub flex flex-col items-center font-semibold mr-4">
            <div id="followers" className="stat-num text-indigo-500 font-bold text-md">0</div>
            <div className="stat-num text-indigo-400 text-xs">FOLLOWERS</div>
          </div>
          <div className="stat-sub flex flex-col items-center font-semibold mr-4">
            <div id="following" className="stat-num text-indigo-500 font-bold text-md">0</div>
            <div className="stat-num text-indigo-400 text-xs">FOLLOWING</div>
          </div>
        </div>
        
        <div id = "actions" className="actions mt-4 flex justify-center items-center">
          <div><button id = "follow" onClick={() => this.onFollow()} className="follow focus:ring-2 ring-offset-2 mr-4 bg-indigo-500 text-white p-2 px-4 rounded-md">FOLLOW</button></div>
          <div><button id = "favs" onClick={() => this.onLike()} className="follow focus:ring-2 ring-offset-2 ring-pink-600 mr-4 bg-pink-500 text-white p-2 px-4 rounded-md">LIKES</button></div>
        </div>
      </div>
      </div>
    );
  }
}