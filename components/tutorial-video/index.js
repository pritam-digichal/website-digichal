import { isMobileOnly } from "react-device-detect";
import i18next from "../../i18/index";
import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";

const TutorialVideo = () => {
  const [control, setControl] = React.useState(true);

  const handlePlay = () => {
    setControl(false);
  };
  const handlePause = () => {
    setControl(true);
  };
  return (
    <div style={isMobileOnly ? styles.sectionMobile : styles.section}>
      <div style={{ textAlign: "center" }}>
        <p style={isMobileOnly ? styles.userSayTextMobile : styles.userSayText}>
          {i18next.t("WATCH_DIGICHAL_TUTORIAL")}
        </p>
      </div>
      {isMobileOnly ? (
        <div style={{ marginTop: "54px", marginBottom: "50px" }}>
          <Carousel
            controls={control}
            indicators={control}
            interval={null}
            pause={true}
          >
            <Carousel.Item>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=lYnUD77cay0"
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handlePause}
                controls
                playbackRate={1}
                width={"100%"}
                height={"190px"}
              />
            </Carousel.Item>
            <Carousel.Item>
              <ReactPlayer
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handlePause}
                url="https://www.youtube.com/watch?v=p8JpYryvARU"
                controls
                playbackRate={1}
                width={"100%"}
                height={"190px"}
              />
            </Carousel.Item>
            <Carousel.Item>
              <ReactPlayer
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handlePause}
                url="https://www.youtube.com/watch?v=bQMiGyc1DkU"
                controls
                playbackRate={1}
                width={"100%"}
                height={"190px"}
              />
            </Carousel.Item>
            <Carousel.Item>
              <ReactPlayer
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handlePause}
                url="https://www.youtube.com/watch?v=z3IFfm60R8g"
                controls
                playbackRate={1}
                width={"100%"}
                height={"190px"}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      ) : (
        <div style={{ marginTop: "54px", marginBottom: "50px" }}>
          <Carousel
            controls={control}
            indicators={control}
            interval={null}
            pause={true}
          >
            <Carousel.Item>
              <ReactPlayer
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handlePause}
                url="https://www.youtube.com/watch?v=lYnUD77cay0"
                controls={true}
                playbackRate={1}
                width={"100%"}
                height={"600px"}
              />
            </Carousel.Item>
            <Carousel.Item>
              <ReactPlayer
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handlePause}
                url="https://www.youtube.com/watch?v=p8JpYryvARU"
                controls
                playbackRate={1}
                width={"100%"}
                height={"600px"}
              />
            </Carousel.Item>
            <Carousel.Item>
              <ReactPlayer
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handlePause}
                url="https://www.youtube.com/watch?v=bQMiGyc1DkU"
                controls
                playbackRate={1}
                width={"100%"}
                height={"600px"}
              />
            </Carousel.Item>
            <Carousel.Item>
              <ReactPlayer
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handlePause}
                url="https://www.youtube.com/watch?v=z3IFfm60R8g"
                controls
                playbackRate={1}
                width={"100%"}
                height={"600px"}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default TutorialVideo;

const styles = {
  section: {
    backgroundColor: "#FFFFFF",
    marginTop: "90px",
    paddingLeft: 70,
    paddingRight: 70,
  },
  sectionMobile: {
    backgroundColor: "#FFFFFF",
    marginTop: "90px",
    paddingLeft: 20,
    paddingRight: 20,
  },
  userSayText: {
    fontSize: "35px",
    letterSpacing: "0.7px",
    color: "#090A0B",
    fontWeight: 500,
  },
  userSayTextMobile: {
    fontSize: "18px",
    letterSpacing: "0.36px",
    color: "#090A0B",
    fontWeight: 500,
  },
  imageContent: {
    minHeight: "1140",
    maxHeight: " 600",
    width: "100%",
  },
  carouselContent: {
    width: "100%",
    height: "1200px",
  },
  carouselContentMobile: {
    width: "100%",
    height: "20px",
  },
};
