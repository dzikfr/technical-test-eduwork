import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub  } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex w-full flex-col">
        
        {/* Top footer */}
        <div className="card bg-base-200 h-20 grid place-items-center rounded-none">
          <div className="flex w-full">
            <div className="flex-grow h-20 grid pl-10 pt-4">
              <div>
                <h2 className="text-lg font-semibold">Get Our Updates</h2>
                <p className="text-sm">by creating an account</p>
              </div>
            </div>
            <div className="flex-grow h-20 grid place-items-center">
              <a href="/register">
                <button className="btn bg-black text-primary rounded-none btn-sm md:btn-md">
                  Register
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* End Top footer */}

        {/* Bottom Footer */}
        <div className="card bg-base-200 rounded-box grid h-20 place-items-center">
          <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
              <p>
                <b>ApalahShop.ltd</b>
                <br />
                Lorem ipsum.
              </p>
                <br/>
                <div className="flex space-x-4">
                <a href="https://twitter.com"><FaTwitter /></a>
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://instagram.com"><FaInstagram /></a>
                <a href="https://github.com"><FaGithub /></a>
                </div>
            </aside>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About</a>
              <a className="link link-hover">Features</a>
              <a className="link link-hover">Works</a>
              <a className="link link-hover">Career</a>
            </nav>
            <nav>
              <h6 className="footer-title">Help</h6>
              <a className="link link-hover">Customer Support</a>
              <a className="link link-hover">Delivery Detail</a>
              <a className="link link-hover">Term & Conditions</a>
              <a className="link link-hover">Privacy Policy</a>
            </nav>
            <nav>
              <h6 className="footer-title">Resources</h6>
              <a className="link link-hover">Free eBooks</a>
              <a className="link link-hover">Development Tutorial</a>
              <a className="link link-hover">How to - Blog</a>
              <a className="link link-hover">Youtube Playlist</a>
            </nav>
          </footer>
        </div>
        {/* End Bottom Footer */}
      </div>
    </div>
  );
};

export default Footer;
