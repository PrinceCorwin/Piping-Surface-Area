// navbar script
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

// pipeData object
const pipeData = {
  0.5: {
    od: 0.84,
    wall: {
      5: 0.065,
      "5s": 0.065,
      10: 0.083,
      "10s": 0.083,
      Std: 0.109,
      40: 0.109,
      "40s": 0.109,
      80: 0.147,
      "80s": 0.147,
      XS: 0.147,
      160: 0.188,
      XXS: 0.294,
    },
  },
  0.75: {
    od: 1.05,
    wall: {
      5: 0.065,
      "5s": 0.065,
      10: 0.083,
      "10s": 0.083,
      Std: 0.113,
      40: 0.113,
      "40s": 0.113,
      80: 0.154,
      "80s": 0.154,
      XS: 0.154,
      160: 0.219,
      XXS: 0.308,
    },
  },
  1: {
    od: 1.315,
    wall: {
      5: 0.065,
      "5s": 0.065,
      10: 0.011,
      "10s": 0.011,
      Std: 0.133,
      40: 0.133,
      "40s": 0.133,
      80: 0.179,
      "80s": 0.179,
      XS: 0.179,
      160: 0.25,
      XXS: 0.358,
    },
  },
  1.25: {
    od: 1.66,
    wall: {
      5: 0.065,
      "5s": 0.065,
      10: 0.109,
      "10s": 0.109,
      Std: 0.14,
      40: 0.14,
      "40s": 0.14,
      80: 0.191,
      "80s": 0.191,
      XS: 0.191,
      160: 0.25,
      XXS: 0.382,
    },
  },
  1.5: {
    od: 1.9,
    wall: {
      5: 0.065,
      "5s": 0.065,
      10: 0.109,
      "10s": 0.109,
      Std: 0.145,
      40: 0.145,
      "40s": 0.145,
      80: 0.2,
      "80s": 0.2,
      XS: 0.2,
      160: 0.281,
      XXS: 0.4,
    },
  },
  2: {
    od: 2.375,
    wall: {
      5: 0.065,
      "5s": 0.065,
      10: 0.109,
      "10s": 0.109,
      Std: 0.154,
      40: 0.154,
      "40s": 0.154,
      80: 0.218,
      "80s": 0.218,
      XS: 0.218,
      160: 0.344,
      XXS: 0.436,
    },
  },
  2.5: {
    od: 2.875,
    wall: {
      5: 0.083,
      "5s": 0.083,
      10: 0.12,
      "10s": 0.12,
      Std: 0.203,
      40: 0.203,
      "40s": 0.203,
      80: 0.276,
      "80s": 0.276,
      XS: 0.276,
      160: 0.375,
      XXS: 0.552,
    },
  },
  3: {
    od: 3.5,
    wall: {
      5: 0.083,
      "5s": 0.083,
      10: 0.12,
      "10s": 0.12,
      Std: 0.216,
      40: 0.216,
      "40s": 0.216,
      80: 0.3,
      "80s": 0.3,
      XS: 0.3,
      160: 0.438,
      XXS: 0.6,
    },
  },
  3.5: {
    od: 4.0,
    wall: {
      5: 0.083,
      "5s": 0.083,
      10: 0.12,
      "10s": 0.12,
      Std: 0.226,
      40: 0.226,
      "40s": 0.226,
      80: 0.318,
      "80s": 0.318,
      XS: 0.318,
      XXS: 0.636,
    },
  },
  4: {
    od: 4.5,
    wall: {
      5: 0.083,
      "5s": 0.083,
      10: 0.12,
      "10s": 0.12,
      Std: 0.237,
      40: 0.237,
      "40s": 0.237,
      80: 0.337,
      "80s": 0.337,
      XS: 0.337,
      120: 0.438,
      160: 0.531,
      XXS: 0.374,
    },
  },
  4.5: {
    od: 5.0,
    wall: {
      Std: 0.247,
      "40s": 0.247,
      "80s": 0.355,
      XS: 0.355,
      XXS: 0.71,
    },
  },
  5: {
    od: 5.563,
    wall: {
      5: 0.109,
      "5s": 0.109,
      10: 0.134,
      "10s": 0.134,
      Std: 0.258,
      40: 0.258,
      "40s": 0.258,
      80: 0.375,
      "80s": 0.375,
      XS: 0.375,
      120: 0.5,
      160: 0.625,
      XXS: 0.75,
    },
  },
  6: {
    od: 6.625,
    wall: {
      5: 0.109,
      "5s": 0.109,
      10: 0.134,
      "10s": 0.134,
      Std: 0.28,
      40: 0.28,
      "40s": 0.28,
      80: 0.432,
      "80s": 0.432,
      XS: 0.432,
      120: 0.562,
      160: 0.719,
      XXS: 0.864,
    },
  },
  7: {
    od: 7.625,
    wall: {
      40: 0.301,
      "40s": 0.301,
      80: 0.5,
      "80s": 0.5,
      XXS: 0.875,
    },
  },
  8: {
    od: 8.625,
    wall: {
      "5s": 0.109,
      10: 0.148,
      "10s": 0.148,
      Std: 0.322,
      20: 0.25,
      30: 0.277,
      40: 0.322,
      "40s": 0.322,
      60: 0.406,
      80: 0.5,
      "80s": 0.5,
      XS: 0.5,
      100: 0.594,
      120: 0.719,
      140: 0.812,
      160: 0.906,
      XXS: 0.875,
    },
  },
  9: {
    od: 9.625,
    wall: {
      Std: 0.342,
      40: 0.342,
      "40s": 0.342,
      80: 0.5,
      "80s": 0.5,
      XS: 0.5,
      XXS: 0.875,
    },
  },
  10: {
    od: 10.75,
    wall: {
      "5s": 0.134,
      "10s": 0.165,
      Std: 0.365,
      20: 0.25,
      30: 0.307,
      40: 0.365,
      "40s": 0.365,
      60: 0.5,
      80: 0.594,
      "80s": 0.5,
      XS: 0.5,
      100: 0.719,
      120: 0.844,
      140: 1.0,
      160: 1.125,
      XXS: 1.0,
    },
  },
  11: {
    od: 11.75,
    wall: {
      Std: 0.375,
      40: 0.375,
      "40s": 0.375,
      80: 0.5,
      "80s": 0.5,
      XS: 0.5,
      XXS: 0.875,
    },
  },
  12: {
    od: 12.75,
    wall: {
      "5s": 0.156,
      "10s": 0.18,
      20: 0.25,
      30: 0.33,
      Std: 0.375,
      "40s": 0.406,
      40: 0.406,
      60: 0.562,
      80: 0.688,
      "80s": 0.5,
      XS: 0.5,
      100: 0.844,
      120: 1.0,
      140: 1.125,
      160: 1.312,
      XXS: 1.0,
    },
  },
  14: {
    od: 14.0,
    wall: {
      10: 0.25,
      "10s": 0.188,
      Std: 0.375,
      20: 0.312,
      30: 0.375,
      40: 0.438,
      "40s": 0.375,
      60: 0.594,
      80: 0.75,
      "80s": 0.5,
      XS: 0.5,
      100: 0.938,
      120: 1.094,
      140: 1.25,
      160: 1.406,
    },
  },
  16: {
    od: 16.0,
    wall: {
      10: 0.25,
      "10s": 0.188,
      Std: 0.375,
      20: 0.312,
      30: 0.375,
      40: 0.5,
      "40s": 0.375,
      60: 0.656,
      80: 0.844,
      "80s": 0.5,
      XS: 0.5,
      100: 1.031,
      120: 1.219,
      140: 1.438,
      160: 1.594,
    },
  },
  18: {
    od: 18.0,
    wall: {
      10: 0.25,
      "10s": 0.188,
      Std: 0.375,
      20: 0.312,
      30: 0.438,
      40: 0.562,
      "40s": 0.375,
      60: 0.75,
      80: 0.938,
      "80s": 0.5,
      XS: 0.5,
      100: 1.156,
      120: 1.375,
      140: 1.562,
      160: 1.781,
    },
  },
  20: {
    od: 20.0,
    wall: {
      10: 0.25,
      "10s": 0.218,
      Std: 0.375,
      20: 0.375,
      30: 0.5,
      40: 0.594,
      "40s": 0.375,
      60: 0.812,
      80: 1.031,
      "80s": 0.5,
      XS: 0.5,
      100: 1.281,
      120: 1.5,
      140: 1.75,
      160: 1.969,
    },
  },
  22: {
    od: 22.0,
    wall: {
      10: 0.25,
      "10s": 0.218,
      Std: 0.375,
      20: 0.375,
      30: 0.5,
      "40s": 0.375,
      60: 0.875,
      80: 1.125,
      "80s": 0.5,
      XS: 0.5,
      100: 1.375,
      120: 1.625,
      140: 1.875,
      160: 2.125,
    },
  },
  24: {
    od: 24.0,
    wall: {
      10: 0.25,
      "10s": 0.25,
      Std: 0.375,
      20: 0.375,
      30: 0.562,
      40: 0.688,
      "40s": 0.375,
      60: 0.969,
      80: 1.219,
      "80s": 0.5,
      XS: 0.5,
      100: 1.531,
      120: 1.812,
      140: 2.062,
      160: 2.344,
    },
  },
  26: {
    od: 26.0,
    wall: {
      10: 0.312,
      Std: 0.375,
      "40s": 0.375,
      "80s": 0.5,
      XS: 0.5,
    },
  },
  28: {
    od: 28.0,
    wall: {
      10: 0.312,
      Std: 0.375,
      20: 0.5,
      30: 0.625,
      "40s": 0.375,
      "80s": 0.5,
      XS: 0.5,
    },
  },
  30: {
    od: 30.0,
    wall: {
      10: 0.312,
      Std: 0.375,
      20: 0.5,
      30: 0.625,
      "40s": 0.375,
      "80s": 0.5,
      XS: 0.5,
    },
  },
  32: {
    od: 32.0,
    wall: {
      10: 0.312,
      Std: 0.375,
      20: 0.5,
      30: 0.625,
      40: 0.688,
      XS: 0.5,
    },
  },
  34: {
    od: 34.0,
    wall: {
      10: 0.312,
      Std: 0.375,
      20: 0.5,
      30: 0.625,
      40: 0.688,
      XS: 0.5,
    },
  },
  36: {
    od: 36.0,
    wall: {
      10: 0.312,
      Std: 0.375,
      XS: 0.5,
    },
  },
  42: {
    od: 42.0,
    wall: {
      Std: 0.375,
      XS: 0.5,
    },
  },
  48: {
    od: 48.0,
    wall: {
      Std: 0.375,
      XS: 0.5,
    },
  },
};
var pipeArray = {};
// onclick function to build pipeArray
function dummyLeg() {
  // clear error warnings
  document.getElementById("dsizeInvalid").textContent = "";
  document.getElementById("psizeInvalid").textContent = "";
  document.getElementById("greater").textContent = "";
  document.getElementById("combo").textContent = "";
  document.getElementById("Lgreater").textContent = "";

  // validating correct input type
  if (pipeData[Number(document.getElementById("psize").value)] === undefined) {
    document.getElementById("psizeInvalid").textContent = "Invalid";
    return;
  }
  if (pipeData[Number(document.getElementById("dsize").value)] === undefined) {
    document.getElementById("dsizeInvalid").textContent = "Invalid";
    return;
  }
  if (
    Number(document.getElementById("dsize").value) >
    Number(document.getElementById("psize").value)
  ) {
    document.getElementById("greater").textContent = "Must be >= to Dummy NPS";
    return;
  }
  // const regex = new RegExp(/[^0-9,"."]/, "g");
  // const val = [
  //   document.forms["myForm"]["psize"].value,
  //   document.forms["myForm"]["dsize"].value,
  //   document.forms["myForm"]["feet"].value,
  //   document.forms["myForm"]["inches"].value,
  //   document.forms["myForm"]["numer"].value,
  //   document.forms["myForm"]["denom"].value,
  // ];
  // for (var i = 0; i < 6; i++) {
  //   if (val[i].match(regex)) {
  //     alert(
  //       "All inputs must be a valid number (no letters, punctuation, or symbols. Decimal numbers ARE allowed (eg. 4.5))"
  //     );
  //     return;
  //   }
  // }

  // if (
  //   document.getElementById("psize").value <= 0 ||
  //   document.getElementById("dsize").value <= 0
  // ) {
  //   alert("Header and Dummy Leg NPS must be greater than 0");
  //   return;
  // }
  if (
    pipeData[document.getElementById("dsize").value].wall[
      document.getElementById("dsched").value
    ] === undefined
  ) {
    document.getElementById("combo").textContent =
      "NPS/SCH combination not valid";
    return;
  }
  // build pipeArray object
  pipeArray.pNom = Number(document.getElementById("psize").value);
  pipeArray.dNom = Number(document.getElementById("dsize").value);

  pipeArray.dSched = document.getElementById("dsched").value;
  pipeArray.pOd = Number(pipeData[pipeArray.pNom].od);
  pipeArray.dOd = Number(pipeData[pipeArray.dNom].od);
  pipeArray.dWall = Number(pipeData[pipeArray.dNom].wall[pipeArray.dSched]);
  pipeArray.dId = Number(pipeArray.dOd - 2 * pipeArray.dWall);
  pipeArray.pR = Number(pipeArray.pNom * 1.5);
  pipeArray.pOR = Number(pipeArray.pR + 0.5 * pipeArray.pOd);
  //   console.log tests
  lengthInDecimalInches();
  if (pipeArray.L <= 0) {
    document.getElementById("Lgreater").textContent = "L must be > 0";
    return;
  }
  center();
  document.getElementById("center-lgpt").innerText = pipeArray.centerLgpt;
  document.getElementById("center-thrt").innerText = pipeArray.centerThrt;
  inside();
  document.getElementById("inside-lgpt").innerText = pipeArray.insideLgpt;
  document.getElementById("inside-thrt").innerText = pipeArray.insideThrt;
  outside();
  document.getElementById("outside-lgpt").innerText = pipeArray.outsideLgpt;
  document.getElementById("outside-thrt").innerText = pipeArray.outsideThrt;
  perp();
  document.getElementById("perp-lgpt").innerText = pipeArray.perpLgpt;
  document.getElementById("perp-thrt").innerText = pipeArray.perpThrt;
}
// length to decimal inches function
function lengthInDecimalInches() {
  var ftToIn;
  var inch;
  var fractionTop;
  var fractionBottom;
  if (document.getElementById("feet").value === "") {
    ftToIn = 0;
  } else {
    ftToIn = document.getElementById("feet").value * 12;
  }
  if (document.getElementById("inches").value === "") {
    inch = 0;
  } else {
    inch = document.getElementById("inches").value;
  }
  if (document.getElementById("numer").value === "") {
    fractionTop = 0;
  } else {
    fractionTop = document.getElementById("numer").value;
  }
  if (document.getElementById("denom").value === "") {
    fractionBottom = 1;
  } else if (document.getElementById("denom").value === "0") {
    fractionBottom = 1;
  } else {
    fractionBottom = document.getElementById("denom").value;
  }
  let length =
    Number(ftToIn) +
    Number(inch) +
    Number(fractionTop) / Number(fractionBottom);
  pipeArray.L = length;
}

// tangent-center answer
function center() {
  // long point
  let height = 0.5 * pipeArray.dId + pipeArray.pR;
  let takeOff = Math.sqrt(pipeArray.pOR * pipeArray.pOR - height * height);
  let lgpt = pipeArray.L + (pipeArray.pR - takeOff);
  // console.log("lgpt: " + lgpt);
  // console.log("height: " + height);
  // console.log(pipeArray);
  pipeArray.centerLgpt = amerStand(lgpt);

  //   throat
  height = pipeArray.pR - 0.5 * pipeArray.dOd;
  takeOff = Math.sqrt(pipeArray.pOR * pipeArray.pOR - height * height);
  let thrt = pipeArray.pR + pipeArray.L - takeOff;
  pipeArray.centerThrt = amerStand(thrt);
}

function inside() {
  // Long Point
  let height =
    pipeArray.pR - 0.5 * pipeArray.pOd + pipeArray.dWall + pipeArray.dId;
  let takeOff = Math.sqrt(pipeArray.pOR * pipeArray.pOR - height * height);
  let lgpt = pipeArray.L + (pipeArray.pR - takeOff);
  pipeArray.insideLgpt = amerStand(lgpt);

  //   throat
  height = pipeArray.pR - 0.5 * pipeArray.pOd;
  takeOff = Math.sqrt(pipeArray.pOR * pipeArray.pOR - height * height);
  let thrt = pipeArray.pR + pipeArray.L - takeOff;
  pipeArray.insideThrt = amerStand(thrt);
}

function outside() {
  // Long Point
  let height = pipeArray.pOR - pipeArray.dWall;
  let takeOff = Math.sqrt(pipeArray.pOR * pipeArray.pOR - height * height);
  let lgpt = pipeArray.L + (pipeArray.pR - takeOff);
  pipeArray.outsideLgpt = amerStand(lgpt);

  //   throat
  height = pipeArray.pOR - pipeArray.dOd;
  takeOff = Math.sqrt(pipeArray.pOR * pipeArray.pOR - height * height);
  let thrt = pipeArray.pR + pipeArray.L - takeOff;
  pipeArray.outsideThrt = amerStand(thrt);
}

function perp() {
  let height = 0.5 * pipeArray.dId;
  let takeOff = Math.sqrt(
    0.5 * pipeArray.pOd * (0.5 * pipeArray.pOd) - height * height
  );
  let lgpt = pipeArray.L - takeOff;
  pipeArray.perpLgpt = amerStand(lgpt);

  //   throat
  let thrt = pipeArray.L - 0.5 * pipeArray.pOd;
  // console.log("pOd: " + pipeArray.pOd);
  // console.log("perpthrt: " + thrt);
  pipeArray.perpThrt = amerStand(thrt);
}

// convert to american standard
function amerStand(L) {
  var tempL = L;
  var fraction;
  var inches;
  var feet;
  var standardL;
  funcFraction();
  feetAndInches();
  function funcFraction() {
    L = L - parseInt(L);
    fraction = Math.round(L * 16) + "/" + "16";
    if (fraction === "2/16") {
      fraction = "1/8";
    } else if (fraction === "4/16") {
      fraction = "1/4";
    } else if (fraction === "6/16") {
      fraction = "3/8";
    } else if (fraction === "8/16") {
      fraction = "1/2";
    } else if (fraction === "10/16") {
      fraction = "5/8";
    } else if (fraction === "12/16") {
      fraction = "3/4";
    } else if (fraction === "14/16") {
      fraction = "7/8";
    } else if (fraction === "0/16") {
      fraction = "0";
    }
  }
  function feetAndInches() {
    if (parseInt(tempL) === 0) {
      feet = 0;
      inches = 0;
    } else if (parseInt(tempL) < 12) {
      feet = 0;
      inches = parseInt(tempL);
    } else {
      inches = Number.parseInt(tempL) % 12;
      feet = Number.parseInt(tempL / 12);
    }
  }
  if (fraction === "16/16") {
    fraction = "0";
    inches++;
  }
  if (inches === 12) {
    inches = 0;
    feet++;
  }
  if (feet === 0 && inches === 0) {
    standardL = fraction + '"';
  } else if (feet === 0 && fraction === 0) {
    standardL === parseInt(inches) + '"';
  } else if (fraction === "0" || Number(fraction) <= 0) {
    standardL = parseInt(feet) + "'-" + parseInt(inches) + '"';
  } else if (feet === 0) {
    standardL = parseInt(inches) + "." + fraction + '"';
  } else {
    standardL = parseInt(feet) + "'-" + parseInt(inches) + "." + fraction + '"';
  }
  // console.log(feet, inches, fraction);
  return standardL;
}
