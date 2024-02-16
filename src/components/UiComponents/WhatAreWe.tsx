import React from "react";

function WhatAreWe({
  header,
  title,
  desc,
}: {
  header: string;
  title: string;
  desc: string;
}) {
  return (
    <span className="text-center flex flex-col gap-2 border p-2 shadow-md shadow-light_green">
      <b className="text-2xl">{header}</b>
      <p className="font-semibold">{title}</p>
      <p className="text-xs">{desc}</p>
    </span>
  );
}

export default WhatAreWe;
