import React, { Component } from "react";
import "../styles/info-collage.css";
import LearnMoreButton from "./LearnMoreButton";

export default class InfoCollage extends Component {
  render() {
    return (
      <>
        <section className="row feature feature-1 d-flex justify-content-center">
          <div className="col-md container-md d-flex text-center my-5 px-5">
            <img
              className="feature-image"
              src="https://d3ui957tjb5bqd.cloudfront.net/uploads/images/5/50/50387.pic.jpg?1535005685"
              alt="A row of various colorful book covers against a gray background."
            />
          </div>
          <div className="col-md container-md d-flex flex-column text-center my-5 px-5">
            <div className="feature-title container-md my-3">
              <h3>
                <strong>Find books based on ones you already love.</strong>
              </h3>
            </div>
            <div className="feature-subtitle container-md my-3">
              <h5>
                Minim proident cupidatat duis duis anim dolore deserunt elit
                magna.
              </h5>
            </div>
            <LearnMoreButton />
          </div>
        </section>
        <section className="row feature feature-2 d-flex justify-content-center">
          <div className="col-md container-md d-flex flex-column text-center my-5 px-5">
            <div className="feature-title container-md my-3">
              <h3>
                <strong>
                  Create a personal list of books to read...eventually.
                </strong>
              </h3>
            </div>
            <div className="feature-subtitle container-md my-3">
              <h5>
                Minim proident cupidatat duis duis anim dolore deserunt elit
                magna.
              </h5>
            </div>
            <LearnMoreButton />
          </div>
          <div className="col-md container-md d-flex text-center my-5 px-5">
            <img
              className="feature-image"
              src="https://miro.medium.com/max/4800/1*4ytjeTu2o0boDa5SNkGoZQ.jpeg"
              alt="A row of various colorful book covers against a gray background."
            />
          </div>
        </section>
        <section className="row feature feature-3 d-flex justify-content-center">
          <div className="col-md container-md d-flex text-center my-5 px-5">
            <img
              className="feature-image"
              src="https://www.booklistreader.com/wp-content/uploads/2019/03/Cover-Trend-Alert-Winding-Curves-featured.jpg"
              alt="A row of various colorful book covers against a gray background."
            />
          </div>
          <div className="col-md container-md d-flex flex-column text-center my-5 px-5">
            <div className="feature-title container-md my-3">
              <h3>
                <strong>Read books, drink coffee, be happy.</strong>
              </h3>
            </div>
            <div className="feature-subtitle container-md my-3">
              <h5>
                Minim proident cupidatat duis duis anim dolore deserunt elit
                magna.
              </h5>
            </div>
            <LearnMoreButton />
          </div>
        </section>
      </>
    );
  }
}
