import React, { Component } from "react";
import { FacebookShareButton, FacebookIcon, WhatsappIcon, WhatsappShareButton } from "react-share";      
import Logo from "../assets/logo.svg";

class Nav extends Component {
  render() {
    return (
      <div className="bg flex justify-between bg-white mx-auto px-4 py-2 print:hidden">
        <a href="/">
          <img
            className="w-12 inline-block"
            src={Logo}
            alt="Resumaker-logo"
          />
        </a>
        {this.props.showDownloadBtn?<button
          className="z-10 rounded bg-blue text-white m-2 p-2 text-center print:hidden"
          onClick={(e) => {
            e.preventDefault();
            window.print();
          }}
        >
          <svg
            className="w-5 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>{" "}
          Download PDF
        </button>:""}
       <container>
          <segment>
            <FacebookShareButton
            url="https://prosresumaker.netlify.app"
            quote="Welcome"
            hashtag="#react">
              <FacebookIcon logoFillcolor="white" round={true}></FacebookIcon>
              </FacebookShareButton>
              <WhatsappShareButton title="Sharing content" url="https://prosresumaker.netlify.app">
                <WhatsappIcon logoFillcolor="white" round={true}></WhatsappIcon>
              </WhatsappShareButton>
            </segment>
          </container>
      </div>
    );
  }
}

export default Nav;
