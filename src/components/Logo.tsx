///<reference path="../../types/Logo.d.ts" />
import { LogoProps } from "Logo";
import React from "react";
import "../css/Logo.css";

export default function Logo(props: LogoProps) {
  return (
    <div id="Logo">
      <img src="/youtube.svg" alt="Youtube logo" />
      <p>YOUTUBE</p>
      <span id="lang">{props.lang}</span>
    </div>
  );
}
