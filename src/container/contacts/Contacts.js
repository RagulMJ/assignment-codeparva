import React from 'react';
import logo2 from '../../assets/logo2.png';
import './contacts.css';
import { ImLocation2 } from 'react-icons/im';
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineArrowRight,
  AiTwotoneMail,
} from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Contacts() {
  return (
    <div className="contact mt-5 p-5 " id="contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="resfoot">
              <img src={logo2} alt="" className="titleImg" />
              ANIMAL SHELTER
            </h5>
            <p className="con1">
              One of the best animal shelter places in India. We're recognized
              by the government. Please take a pledge to take care of these
              lovely pets !
            </p>
            <Link to="home" smooth duration={500}>
              <button type="button" className="btn">
                Adopt{' '}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </Link>
          </div>
          <hr className="reshr" />
          <div className="col">
            <h5>GET IN TOUCH</h5>
            <div className="inline">
              <ImLocation2 size={50} color="white" />
              <p className="con2">
                llesfnee cnu efoin eoifn oewifnewo inf sdc csdcneno ie
                woiwemfwokm fwe w ecen cloenwo we - 355233
              </p>
            </div>
            <br />
            <div className="inline">
              <AiTwotoneMail size={25} color="white" />
              <p className="con3">cisubdcusb@gmail.com</p>
            </div>
            <h5>FOLLOW US</h5>
            <div className="icons3">
              <Link className="icons3" to="#">
                <AiOutlineTwitter size={25} />
              </Link>
              <Link className="icons3" to="#">
                <FaFacebook size={23} />
              </Link>
              <Link className="icons3" to="#">
                <AiFillLinkedin size={25} />
              </Link>
            </div>
          </div>
          <div className="col">
            <h5>QUICK LINKS</h5>
            <br />
            <p className="con3">Home</p>
            <p className="con3">Contact Us</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <p className="con3">Copyright @ 2023.Animal Shelter</p>
          </div>
          <div className="col">
            <Link className="t4" to="#">
              Privacy Policy
            </Link>
            <Link className="t4" to="#">
              Terms of Service
            </Link>
            <Link className="t4" to="#">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
