import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

const IssaVibe = () => {
  return <ReactAudioPlayer src="vibe.mp3" autoPlay loop />;
};

export default IssaVibe;
