import React from "react";
import "../css/main.css";
function Banner(props) {
  return (
    <section id="banner" data-video="../Assets/background loop.mp4">
      <div class="inner">
        <header>
          <h1>This is NorthCoders News</h1>
          <p>The home of groundbreaking news and articles</p>
          <br />
        </header>
        {/* <a href="#main" class="button big alt scrolly">Dignissim</a> */}
      </div>
    </section>
  );
}

export default Banner;
