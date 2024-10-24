import React from "react";
import "./skeleton.css";

const Skeleton = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-title" />
      <div className="skeleton-video-list">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="skeleton-video" key={index}>
            <div className="skeleton-thumbnail" />
            <div className="skeleton-info">
              <div className="skeleton-title" />
              <div className="skeleton-description" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
