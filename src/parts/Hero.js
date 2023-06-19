import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconBag from "assets/images/icons/icon-traveler.svg";
import IconLocation from "assets/images/icons/icon-cities.svg";
import IconCamera from "assets/images/icons/icon-treasure.svg";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section>
      <div className="container pt-4">
        <div className="row align-item-center">
          <div className="col-auto pe-5" style={{ width: 530 }}>
            <h1 className="fw-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vocation
            </h1>
            <p
              className="mb-4 fw-light secondary-text w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need enjoy your holiday with family. Time to
              make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onclick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width={36}
                  height={36}
                  src={IconBag}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="secondary-text fw-light">travelers</span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width={36}
                  height={36}
                  src={IconLocation}
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="secondary-text fw-light">treasures</span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width={36}
                  height={36}
                  src={IconCamera}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="secondary-text fw-light">cities</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 ps-5 ms-auto">
            <div
              className="position-absolute"
              style={{ width: 540, height: 410 }}
            >
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{
                  margin: "-30px 0 0 -30px",
                  zIndex: 1,
                  // width: 540,
                  // height: 410,
                }}
              />
              <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
