import React, { useRef, useEffect } from "react";

function CompCamara() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return <video ref={videoRef} />;
}

export default CompCamara;
