import React from "react";

const Home = () => {
  return (
    <div>
      <div id="sky">
        <div className="mountain_btm_left"></div>
        <div className="mountain_btm_mid"></div>
        <div className="mountain_btm_right"></div>

        <div className="overlayerr">
          <h1 class="tx">Hello world...</h1>
        </div>
      </div>
      <section>
        <div class="container">
          <h1 className="txt">about</h1>
          <div class="box">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              molestie erat nec volutpat mollis. Duis turpis justo, tincidunt id
              cursus et, rutrum vel sapien. Sed in tortor leo. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Curabitur sit
              amet ornare tortor, sed vehicula diam. Fusce id gravida odio, in
              molestie nunc. Sed gravida, leo et posuere posuere, diam mi
              accumsan eros, eu auctor lect.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
