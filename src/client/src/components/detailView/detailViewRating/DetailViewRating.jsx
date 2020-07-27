import React, { Component } from "react";
import styles from "./DetailViewRating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";

export default class DetailViewRating extends Component {
  render() {
    return (
      <div className="col-7 m-0 mt-3">
        <div className="px-4" id={styles.heading}>
          Ratings and Reviews
        </div>
        <div className="px-3" id={styles.heading}>
          <span>
            {" "}
            <FontAwesomeIcon icon={faCheckCircle} color="#57A4FF" size="lg" />
          </span>
          <span>Only Verified Stays</span>
        </div>
        <div className="row m-0">
          <div className="col-12 p-1">
            <div className="card mb-3 w-100">
              <div className="row no-gutters p-2 align-items-center">
                <div className="col-md-5 d-flex flex-column align-items-center border-right p-1 rounded">
                  <div className="d-flex  align-items-center" id={styles.ratingBox}>
                    <span>
                      4.6
                      <span>
                        <FontAwesomeIcon icon={faStar} color="#fff" size="sm" />
                      </span>
                    </span>
                  </div>
                  <div id={styles.status}>EXCELLENT</div>
                  <div id={styles.count}>134 ratings</div>
                </div>
                <div className="col-md-7 p-2">
                  {[
                    { rating: "5", icon: faStar, per: "79%" },
                    { rating: "4", icon: faStar, per: "10%" },
                    { rating: "3", icon: faStar, per: "4%" },
                    { rating: "2", icon: faStar, per: "3%" },
                    { rating: "1", icon: faStar, per: "2%" },
                  ]?.map((elem) => {
                    return (
                      <div className="card-body p-0">
                        <div className="d-flex align-items-center">
                          <div className="d-flex">
                            <span id={styles.rating}>{elem.rating}</span>
                            <span>
                              <FontAwesomeIcon icon={elem.icon} color="rgba(100, 100, 100, 0.15)" size="sm" />
                            </span>
                          </div>
                          <span class="progress w-100" id={styles.bar}>
                            <div class="progress-bar" id={styles.progress} role="progressbar" style={{ width: `${elem.per}` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                          </span>
                          <span id={styles.per}>{elem.per}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
