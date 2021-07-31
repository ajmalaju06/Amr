import React, { useState, useRef } from "react";
import "../css/application.css";
import {
  HeadList,
  HeadList2,
  HeadList3,
  HeadList4,
  HeadList5,
} from "../data/headingList";
import AmrLogo from "../images/amr-logo.jpeg";

function Home() {
  const [subMenu1, setSubMenu1] = useState(false);
  const [subMenu2, setSubMenu2] = useState(false);
  const [subMenu3, setSubMenu3] = useState(false);
  const [subMenu4, setSubMenu4] = useState(false);
  const [subMenu5, setSubMenu5] = useState(false);
  const [subMenuArray1, setSubMenuArray1] = useState([]);
  const [subMenuArray2, setSubMenuArray2] = useState([]);
  const [subMenuArray3, setSubMenuArray3] = useState([]);
  const [subMenuArray4, setSubMenuArray4] = useState([]);
  const [subMenuArray5, setSubMenuArray5] = useState([]);
  const [menuPos1, setMenuPos1] = useState(0);
  const [headerShadow, setHeaderShadow] = useState("flex header-container");
  const [containerTransition, setContainerTransition] = useState("");
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);
  const [selectedItem1, setSelectedItem1] = useState(-1);
  const [selectedItem2, setSelectedItem2] = useState(-1);

  window.onscroll = function (e) {
    // console.log(window.scrollY); // Value of scroll Y in px
    if (window.scrollY > 50) {
      setHeaderShadow("flex header-container header-shadow");
    } else {
      setHeaderShadow("flex header-container");
    }
  };
  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContactUs = () => {
    contactUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const subMenu1Click = (e) => {
    setSelectedItem1(e.id - 1);
    if (menuPos1 === e.id) {
      setSubMenuArray1(e.submenu);
      setSubMenu1(!subMenu1);
    } else {
      setSubMenu1(true);
      setSubMenuArray1(e.submenu);
      setMenuPos1(e.id);
    }
  };

  const subMenu2Click = (e) => {
    setSelectedItem2(e.id - 1);
    if (menuPos1 === e.id) {
      setSubMenuArray2(e.submenu);
      setSubMenu2(!subMenu2);
    } else {
      setSubMenu2(true);
      setSubMenuArray2(e.submenu);
      setMenuPos1(e.id);
    }
  };

  const subMenu3Click = (e) => {
    if (menuPos1 === e.id) {
      setSubMenu3(!subMenu3);
      setSubMenuArray3(e.submenu);
    } else {
      setSubMenu3(true);
      setSubMenuArray3(e.submenu);
      setMenuPos1(e.id);
    }
  };
  const subMenu4Click = (e) => {
    if (menuPos1 === e.id) {
      setSubMenu4(!subMenu4);
      setSubMenuArray4(e.submenu);
    } else {
      setSubMenu4(true);
      setSubMenuArray4(e.submenu);
      setMenuPos1(e.id);
    }
  };
  const subMenu5Click = (e) => {
    if (menuPos1 === e.id) {
      setSubMenu5(!subMenu5);
      setSubMenuArray5(e.submenu);
    } else {
      setSubMenu5(true);
      setSubMenuArray5(e.submenu);
      setMenuPos1(e.id);
    }
  };

  return (
    <div className="container-style">
      <div className={headerShadow}>
        <div className="flex-1 ">
          <img className="header-logo" src={AmrLogo}></img>
        </div>

        <ul className="flex">
          <li>Home</li>
          <li onClick={() => scrollToAboutUs()}>About Us</li>
          <li onClick={() => scrollToContactUs()}>Contact Us</li>
        </ul>
      </div>
      <div className="content-container-style mx-10 px-8">
        <div>
          <div>
            <ul id="headinglist" className="content-container-style-ul">
              {HeadList.map((e, index) => {
                const active =
                  selectedItem1 === index
                    ? "tails-menu-border"
                    : "tails-menu-unselected";
                return (
                  <li onClick={() => subMenu1Click(e)}>
                    <div className={`tails-menu bg-white ${active}`}>
                      <img
                        className="tails-menu-image-style"
                        src={e.image}
                      ></img>
                      <div className="tails-menu-image-shade"></div>
                      <h1 className="tails-menu-txt-style">{e.name}</h1>
                    </div>
                  </li>
                );
              })}
            </ul>
            {subMenu1 ? (
              <div className={`mx-3 sub-menu-container open`}>
                <div>
                  <ul>
                    {subMenuArray1.map((e, index) => {
                      return (
                        <li>
                          <div>
                            <i className="fas fa-arrow-alt-circle-right"></i>
                            <span className="ml-3 font-bold">{e.subHead}</span>
                          </div>
                          <div>
                            <p className="ml-7 text-sm">{e.subContent}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <div className={`mx-3 sub-menu-container close`}>
                <div>
                  <ul>
                    {subMenuArray1.map((e, index) => {
                      return (
                        <li>
                          <div>
                            <i className="fas fa-arrow-alt-circle-right"></i>
                            <span className="ml-3 font-bold">{e.subHead}</span>
                          </div>
                          <div>
                            <p className="ml-7 text-sm">{e.subContent}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div>
            <ul id="headinglist" className="content-container-style-ul">
              {HeadList2.map((e, index) => {
                const active =
                  selectedItem2 === index
                    ? "tails-menu-border"
                    : "tails-menu-unselected";
                return (
                  <li onClick={() => subMenu2Click(e)}>
                    <div className={`tails-menu bg-white ${active}`}>
                      <img
                        className="tails-menu-image-style"
                        src={e.image}
                      ></img>
                      <div className="tails-menu-image-shade"></div>
                      <h1 className="tails-menu-txt-style">{e.name}</h1>
                    </div>
                  </li>
                );
              })}
            </ul>
            {subMenu2 ? (
              <div className="mx-3 sub-menu-container">
                <div>
                  <ul>
                    {subMenuArray2.map((e, index) => {
                      return (
                        <li>
                          <div>
                            <i className="fas fa-arrow-alt-circle-right"></i>
                            <span className="ml-3 font-bold">{e.subHead}</span>
                          </div>
                          <div>
                            <p className="ml-7 text-sm">{e.subContent}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>

          <div>
            <ul id="headinglist" className="content-container-style-ul">
              {HeadList3.map((e, index) => {
                return (
                  <li onClick={() => subMenu3Click(e)}>
                    <div className="tails-menu bg-white">
                      <img
                        className="tails-menu-image-style"
                        src={e.image}
                      ></img>
                      <div className="tails-menu-image-shade"></div>
                      <h1 className="tails-menu-txt-style">{e.name}</h1>
                    </div>
                  </li>
                );
              })}
            </ul>
            {subMenu3 ? (
              <div className="mx-3 sub-menu-container">
                <div>
                  <ul>
                    {subMenuArray3.map((e, index) => {
                      return (
                        <li>
                          <div>
                            <i className="fas fa-arrow-alt-circle-right"></i>
                            <span className="ml-3 font-bold">{e.subHead}</span>
                          </div>
                          <div>
                            <p className="ml-7 text-sm">{e.subContent}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>

          <div>
            <ul id="headinglist" className="content-container-style-ul">
              {HeadList4.map((e, index) => {
                return (
                  <li onClick={() => subMenu4Click(e)}>
                    <div className="tails-menu bg-white">
                      <img
                        className="tails-menu-image-style"
                        src={e.image}
                      ></img>
                      <div className="tails-menu-image-shade"></div>
                      <h1 className="tails-menu-txt-style">{e.name}</h1>
                    </div>
                  </li>
                );
              })}
            </ul>
            {subMenu4 ? (
              <div className="mx-3 sub-menu-container">
                <div>
                  <ul>
                    {subMenuArray4.map((e, index) => {
                      return (
                        <li>
                          <div>
                            <i className="fas fa-arrow-alt-circle-right"></i>
                            <span className="ml-3 font-bold">{e.subHead}</span>
                          </div>
                          <div>
                            <p className="ml-7 text-sm">{e.subContent}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>

          <div>
            <ul className="content-container-style-ul">
              {HeadList5.map((e, index) => {
                return (
                  <li onClick={() => subMenu5Click(e)}>
                    <div className="tails-menu bg-white">
                      <img
                        className="tails-menu-image-style"
                        src={e.image}
                      ></img>
                      <div className="tails-menu-image-shade"></div>
                      <h1 className="tails-menu-txt-style">{e.name}</h1>
                    </div>
                  </li>
                );
              })}
            </ul>
            {subMenu5 ? (
              <div className="mx-3 sub-menu-container">
                <div>
                  <ul>
                    {subMenuArray5.map((e, index) => {
                      return (
                        <li>
                          <div>
                            <i className="fas fa-arrow-alt-circle-right"></i>
                            <span className="ml-3 font-bold">{e.subHead}</span>
                          </div>
                          <div>
                            <p className="ml-7 text-sm">{e.subContent}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>

          <div className="p-5 flex mt-10 flex-col px-20 py-10" ref={aboutUsRef}>
            <h1 className="font-bold text-2xl">OUR MISSION AND VISION</h1>
            <span className="mt-5">
              To become one of the efficient corporate teams globally and
              provide the most trusted support and quality service to our
              clients in their business field. To become one of the world’s most
              efficient service providers with offices located in all major
              cities across the world
            </span>
          </div>
        </div>
        <div className="footer-container justify-between" ref={contactUsRef}>
          <div className="flex-1 p-10 flex flex-col ml-12">
            <img className="header-logo" src={AmrLogo}></img>
            <span className="text-gray-400 text-left text-sm mt-5">
              AMR  is a leading provider of company formation services in
              UAE,and a highly experienced and competent team , well- connected
              public relationship officers ,corporate advisors with extensive
              knowledge of the UAE’s operational framework
            </span>
          </div>
          <div className="flex-1 p-10 flex flex-col items-start mr-12">
            <h2 className="text-xl font-bold text-gray-400">CONTACTS</h2>
            <div className="mt-5 flex items-center">
              <i className="fas fa-map-marker-alt text-gray-400"></i>
              <span className="ml-4 text-gray-400 text-left text-sm ">
                Office no. 601, Technic Bildg Salah Al DIn Metro Station Wxit.2,
                Deira Dubai UAE
              </span>
            </div>
            <div className="mt-2 flex items-center">
              <i className="fas fa-envelope text-gray-400 text-sm"></i>
              <span className="ml-3 text-gray-400 text-left text-sm ">
                amrcsuae@gmail.com
              </span>
            </div>
            <div className="mt-2 flex items-center">
              <i class="fas fa-mobile-alt text-gray-400"></i>
              <span className="ml-4 text-gray-400 text-left text-sm ">
                058 660 9293, 052 869 9293
              </span>
            </div>
            <div className="mt-4 flex justify-between social-media-container-style">
              <i className="fab fa-facebook-f text-gray-400 social-media-img"></i>
              <a
                href="https://wa.me/00971564314182"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp text-gray-400 social-media-img"></i>
              </a>

              <i className="fab fa-instagram text-gray-400 social-media-img"></i>
              <i className="fab fa-twitter text-gray-400 social-media-img"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
