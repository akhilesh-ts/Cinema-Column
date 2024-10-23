import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { adduser, removeUser } from "../utils/slice/userSlice";
import { Avatar, Dropdown } from "flowbite-react";
import { FiMenu } from "react-icons/fi";
import MobileNav from "../components/Header/MobileNav";
import cc_logo from '../asset/cc_logo.png'

const NavBar = () => {
  const user = useSelector((store) => store.userData);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const authSign = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, accessToken } = user;
        dispatch(
          adduser({
            displayName: displayName,
            email: email,
            token: accessToken,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => authSign();
  }, []);

  let firstLetter;
  if (user) {
    const userName = user.displayName;

    firstLetter = String(userName).charAt(0);
  }

  return (
    <>
      <div className="w-full bg-darkBlue flex items-center justify-between py-4 px-6 sticky top-0">
       
        <div className="text-white">
          <img src={cc_logo} className="w-16" alt="logo" />
        </div>
      
        <div className="flex gap-4">
          <div>
            {user ? (
              <div className="relative z-50">
                <Dropdown
                  label={
                    <Avatar
                      placeholderInitials={firstLetter.toLocaleUpperCase()}
                      rounded
                    />
                  }
                  arrowIcon={false}
                  inline
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user?.displayName}</span>
                    <span className="block truncate text-sm font-medium">
                      {user?.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item onClick={handelSignOut}>
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
              </div>
            ) : null}
          </div>

          <button
            className="text-white p-2 block lg:hidden"
            onClick={() => setShowMobileNav((prev) => !prev)}
          >
            <FiMenu />
          </button>
        </div>
      </div>
      {showMobileNav && <MobileNav />}
    </>
  );
};

export default NavBar;
