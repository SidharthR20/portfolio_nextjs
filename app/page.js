var flag = false;
export default function Home() {
  if (flag) {
    return (
      <>
        <header>
          <nav>
            <div className="left">Sidharth's Portfolio</div>
            <div className="right">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about-me">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                {/* <!-- <li><a href="#footer-main">Contact Me</a></li> --> */}
                {/* <li>
                <button
                  className="nav-btn"
                  onclick={() => {
                    window.scroll({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact Me
                </button>
              </li> */}
              </ul>
            </div>
            {/* <script>
            {function handleScroll() {
              window.scroll({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          </script> */}
          </nav>
        </header>
        <main>
          <section className="firstSection">
            <div className="leftSection">
              <div>Hi, My name is</div>
              <span className="purple-username">Sidharth</span>
              <div>and I am a passionate</div>
              <span id="element"></span>
              {/* <div className="buttons">
              <button
                type="button"
                className="btn"
                onclick={() => {
                  window.open(
                    "resources/Documents/Sidharth-Rout-Resume-updated.pdf"
                  );
                }}
              >
                Download Resume
              </button>
              <button
                type="submit"
                className="btn"
                onclick={() => {
                  window.open("https://github.com/SidharthR20");
                }}
              >
                Visit Github
              </button> */}
              {/* </div> */}
              {/* {function handleDownloadResume() {
              window.open(
                "resources/Documents/Sidharth-Rout-Resume-updated.pdf"
              );
            }}
            {function handleGitHubRedirection() {
              window.open("https://github.com/SidharthR20");
            }} */}
            </div>
            <div className="rightSection">
              <img
                src="./Images/web-dev-at-work.png"
                alt="web-developer-at-work"
              />
            </div>
          </section>

          <hr />

          <section className="secondSection" id="about-me">
            <h1>Overall Journey</h1>
            <span className="grey-text">What I have done so far</span>
            <div className="box">
              <div className="vertical">
                <img
                  className="box-top-image"
                  src="./Images/SSE-img.png"
                  alt=""
                />
                <div className="vertical-title">
                  Senior Secondary <br />
                  (2013-2015)
                </div>
                <div className="vertical-description">
                  Hi, please write something related to Senior Secondary
                  experience.
                </div>
              </div>
              <div className="vertical">
                <img
                  className="box-top-image"
                  src="./Images/UG-degree.png"
                  alt=""
                />
                <div className="vertical-title">
                  B.Tech in CSE <br />
                  (2015-2019)
                </div>
                <div className="vertical-description">
                  Hi, please write something related to React developer
                  experience.
                </div>
              </div>
              <div className="vertical">
                <img
                  className="box-top-image"
                  src="./Images/dev-at-work.png"
                  alt=""
                />
                <div className="vertical-title">
                  Cobol Developer <br />
                  (2019-2021)
                </div>
                <div className="vertical-description">
                  Hi, please write something related to Cobol developer
                  experience.
                </div>
              </div>
              <div className="vertical">
                <img
                  className="box-top-image"
                  src="./Images/developer.png"
                  alt=""
                />
                <div className="vertical-title">
                  React Developer <br />
                  (2021-present)
                </div>
                <div className="vertical-description">
                  Hi, please write something related to React developer
                  experience.
                </div>
              </div>

              {/* <!-- <div class="vertical"></div> --> */}
            </div>
          </section>
        </main>
        <footer id="footer-main">
          <div className="footer">
            <div className="footer-first">
              <h3>Sidharth's Developer Portfolio</h3>
            </div>
            <div className="footer-second">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-third">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-fourth">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="footer-rights">
            Copyright &#169; sidharthsportfolio.com | All rights reserved
          </div>
        </footer>
      </>
    );
  } else {
    return (
      <>
        <header>
          <nav>
            <div className="left">Sidharth's Portfolio</div>
            <div className="right">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <div
            style={{
              height: "84vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "whitesmoke",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "black",
                marginTop: "226px",
              }}
            >
              This page is in progress currently.
              <br />
              Thank you for visiting.
            </h1>
          </div>
        </main>
        <footer>
          {/* <div className="footer">
            <div className="footer-first">
              <h3>Sidharth's Developer Portfolio</h3>
            </div>
            <div className="footer-second">
              <ul>
                <li>Home</li>
              </ul>
            </div>
            <div className="footer-third">
              <ul>
                <li>Home</li>
              </ul>
            </div>
            <div className="footer-fourth">
              <ul>
                <li>Home</li>
              </ul>
            </div>
          </div> */}
          <div className="footer-rights">
            Copyright &#169; sidharthsportfolio.com | All rights reserved
          </div>
        </footer>
      </>
    );
  }
}
