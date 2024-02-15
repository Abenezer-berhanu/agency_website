import Image from "next/image";
import React from "react";

function Owner() {
  return (
    <div className="flex flex-col items-center py-20 bg-slate-300">
      <Image
        width={500}
        height={1000}
        alt="me"
        src="/me.png"
        className="size-24 rounded-full object-cover"
      />
      <q className="font-bold text-xl">
        Empowering Innovation, One Code at a Time
      </q>
      <p className="font-semibold">Abenezer Berhanu</p>
      <p className="text-xs">
        CEO of <b>X Company</b>
      </p>
    </div>
  );
}

export default Owner;
