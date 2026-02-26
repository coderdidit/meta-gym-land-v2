import React from "react";
import { Button, Image } from "antd";
import { PlaySquareOutlined } from "@ant-design/icons";
import {
  mainFontColor,
  pageTitleStyle,
  pageTitle2Style,
  descriptionStyle,
  secondaryBgColor,
} from "GlobalStyles";
import { Link } from "react-router-dom";
import homePageImg from "./assets/home_page/home_page_img.png";
import howItWorks1 from "./assets/home_page/how_it_works_1.png";
import howItWorks2 from "./assets/home_page/how_it_works_2.png";
import howItWorks3 from "./assets/home_page/how_it_works_3.png";
import { SocialsComponent } from "./SocialsPage";
import { MGLSmallLogo } from "../Logos";
import stylesCss from "./Home.module.css";

const styles = {
  homeGlobal: {
    color: mainFontColor,
  },
  titleText: {
    ...pageTitleStyle,
  },
  text: {
    ...descriptionStyle,
    color: "#FFFFFF",
  },
  card: {
    border: "none",
    borderBottom: "none",
    background: "none",
    color: mainFontColor,
    lineHeight: "0.8",
  },
};

export default function Home() {
  return (
    <div>
      <section className={stylesCss.hero}>
        <div style={{}}>
          <div className={stylesCss.heroTitle} style={styles.titleText}>
            Ready to get started?
          </div>
          <div className={stylesCss.heroSubtitle} style={styles.text}>
            Follow steps below, have fun and get fit!
          </div>

          <div className={stylesCss.heroCtaWrap}>
            {/* <Button
              type="primary"
              style={{
                ...BtnPrimary,
                marginRight: "1rem",
              }}
            >
              <Link to="/demo-avatar">Play now</Link>
            </Button> */}
            <Button className="mgl-btn mgl-btn-info">
              <Link to="/demo-avatar">Try with Demo GymBuddy</Link>
            </Button>
          </div>
        </div>

        <Image
          preview={false}
          src={homePageImg}
          alt=""
          className={stylesCss.heroImage}
        />
      </section>

      <section>
        <div
          style={{
            textAlign: "center",
            padding: "1.5rem 1rem 1rem 1rem",
          }}
        >
          <div style={pageTitle2Style}>How it works?</div>

          <Button
            className="mgl-btn mgl-btn-secondary"
            style={{ margin: "1rem" }}
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=vTWeE7YJnj4",
                "_blank",
              )
            }
          >
            <PlaySquareOutlined /> Watch video
          </Button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            justifyContent: "center",
            textAlign: "center",
            ...descriptionStyle,
          }}
        >
          <div>
            <Image
              preview={false}
              src={howItWorks1}
              alt=""
              style={{
                width: "80%",
                padding: "0px",
                margin: "0px",
              }}
            />
            <p
              style={{
                fontWeight: 500,
                // marginBottom: "1rem",
              }}
            >
              1. Connect your wallet (deprecated)
            </p>
            <p>We used to be a Web3 App</p>
            <p>Now it is not necessary.</p>
          </div>
          <div>
            <Image
              preview={false}
              src={howItWorks2}
              alt=""
              style={{
                width: "80%",
                padding: "0px",
                margin: "0px",
              }}
            />
            <p
              style={{
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              2. Buy or generate your GymBuddy
            </p>
            <p>Not available right now</p>
            <p>Just try DemoGym Buddy</p>
          </div>
          <div>
            <Image
              preview={false}
              src={howItWorks3}
              alt=""
              style={{
                width: "80%",
                padding: "0px",
                margin: "0px",
              }}
            />
            <p
              style={{
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              3. Enable your Webcam and join MetaGymLand
            </p>

            <p>Click 'Play with me' on selected GymBuddy</p>
            <p>and decide which Webcam you would like</p>
            <p>to enable to play MetaGymLand</p>
          </div>
        </div>
      </section>
      <div
        style={{
          flexBasis: "100%",
        }}
      />

      <section
        style={{
          marginTop: "3rem",
          // marginBottom: "3rem",
          padding: "2.8rem",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: secondaryBgColor,
        }}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <SocialsComponent />
        </div>

        <div
          style={{
            marginTop: "2rem",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          <MGLSmallLogo />
          <div
            style={{
              marginTop: "1rem",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                color: mainFontColor,
              }}
              href="mailto:metagymland@gmail.com"
            >
              metagymland@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
