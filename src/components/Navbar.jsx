import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

import { useTranslation } from "react-i18next";

const ChangeLanguageOption = ({ i8n }) => {
  return (
    <select
      className="bg-primary rounded-md leading-tight focus:outline-none focus:border-blue-500 text-[18px] font-medium cursor-pointer"
      name="language"
      id="language"
      onChange={({ target }) => i8n.changeLanguage(target.value)}
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [t, i18n] = useTranslation("global");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {t("navBar.title.name")}&nbsp;
            <span className="sm:block hidden">| {t("navBar.title.text")}</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            let title = `navBar.links.${link.id}`;

            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{t(title)}</a>
              </li>
            );
          })}
          <li>
            <ChangeLanguageOption i8n={i18n} />
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                let title = `navBar.links.${link.id}`;

                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => setActive(link.title)}
                  >
                    <a href={`#${link.id}`}>{t(title)}</a>
                  </li>
                );
              })}

              <li>
                <ChangeLanguageOption i8n={i18n} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
