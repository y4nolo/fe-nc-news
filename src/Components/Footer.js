import React from "react";

import "../css/main.css";

function Footer() {
  return (
    <div id="footer">
      <ul class="icons">
        <li>
          <a href="https://twitter.com/northcoders" class="icon fa-twitter">
            <span class="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/northcoders/"
            class="icon fa-facebook"
          >
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/northcoders/"
            class="icon fa-instagram"
          >
            <span class="label">Instagram</span>
          </a>
        </li>

        <li>
          <a href="https://github.com/northcoders" class="icon fa-github">
            <span class="label">Github</span>
          </a>
        </li>
      </ul>
      Design: Ana Chan
    </div>
  );
}

export default Footer;
