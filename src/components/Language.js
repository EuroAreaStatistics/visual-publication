import React from "react";

const Language = () => (
  <ul
    className="dropdown menu language"
    data-dropdown-menu
    data-disable-hover="true"
    data-click-open="true"
  >
    <li>
      <a href="#">English</a>
      <ul className="menu">
        <li>
          <a href="?lang=bg">Български</a>
        </li>
        <li>
          <a href="?lang=cs">Čeština</a>
        </li>
        <li>
          <a href="?lang=da">Dansk</a>
        </li>
        <li>
          <a href="?lang=de">Deutsch</a>
        </li>
        <li>
          <a href="?lang=et">Eesti keel</a>
        </li>
        <li>
          <a href="?lang=en">English</a>
        </li>
        <li>
          <a href="?lang=es">Español</a>
        </li>
        <li>
          <a href="?lang=el">Eλληνικά</a>
        </li>
        <li>
          <a href="?lang=fr">Français</a>
        </li>
        <li>
          <a href="?lang=hr">Hrvatski</a>
        </li>
        <li>
          <a href="?lang=it">Italiano</a>
        </li>
        <li>
          <a href="?lang=lv">Latviešu</a>
        </li>
        <li>
          <a href="?lang=lt">Lietuvių</a>
        </li>
        <li>
          <a href="?lang=hu">Magyar</a>
        </li>
        <li>
          <a href="?lang=mt">Malti</a>
        </li>
        <li>
          <a href="?lang=nl">Nederlands</a>
        </li>
        <li>
          <a href="?lang=pl">Polski</a>
        </li>
        <li>
          <a href="?lang=pt">Português</a>
        </li>
        <li>
          <a href="?lang=ro">Română</a>
        </li>
        <li>
          <a href="?lang=sk">Slovenčina</a>
        </li>
        <li>
          <a href="?lang=sl">Slovenščina</a>
        </li>
        <li>
          <a href="?lang=fi">Suomi</a>
        </li>
        <li>
          <a href="?lang=sv">Svenska</a>
        </li>
      </ul>
    </li>
  </ul>
);

export default Language;
