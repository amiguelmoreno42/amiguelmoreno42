function Header() {
    return (
        <div className="nav">
            <div className="logo">
                <svg
                    className="header-logo"
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="500.000000pt"
                    height="500.000000pt"
                    viewBox="0 0 500.000000 500.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                        stroke="none"
                    >
                        <path
                            d="M855 4576 c-17 -7 -43 -28 -58 -45 l-27 -33 0 -2058 0 -2058 27 -33
c50 -59 119 -74 183 -38 77 43 70 -138 70 1915 0 1798 0 1838 19 1819 10 -11
314 -436 676 -945 361 -509 670 -937 686 -952 41 -39 97 -39 138 0 16 15 327
448 691 962 364 514 668 942 676 950 12 12 14 -255 14 -1829 0 -1737 1 -1845
18 -1873 19 -34 78 -68 117 -68 37 0 86 23 115 55 l25 27 3 2051 c2 1520 -1
2059 -9 2080 -24 58 -103 98 -164 83 -14 -4 -41 -21 -60 -39 -18 -18 -361
-486 -760 -1042 -400 -555 -731 -1010 -736 -1010 -5 0 -342 461 -749 1025
-408 564 -749 1033 -759 1044 -24 24 -97 30 -136 12z"
                        />
                        <path
                            d="M1520 2863 c-8 -3 -25 -15 -37 -26 l-23 -20 0 -1239 0 -1239 25 -24
c34 -35 88 -34 120 1 l25 27 2 1103 3 1103 410 -575 c225 -317 415 -579 423
-583 26 -15 63 2 96 43 18 22 203 281 410 573 208 293 382 535 387 538 5 4 9
-427 9 -1104 l0 -1110 26 -20 c38 -30 80 -27 115 8 l29 29 0 1222 c0 1342 4
1264 -61 1290 -27 12 -35 11 -63 -4 -22 -12 -162 -201 -471 -631 -242 -338
-443 -614 -446 -615 -4 0 -204 273 -444 608 -241 334 -448 617 -462 630 -24
22 -43 26 -73 15z"
                        />
                        <path
                            d="M1943 1546 l-28 -24 0 -592 0 -592 28 -24 c36 -31 78 -31 114 0 l28
24 5 458 5 459 193 -238 c125 -153 201 -239 216 -243 13 -3 35 0 49 8 14 7
110 118 213 247 l189 235 5 -468 5 -468 24 -19 c35 -28 77 -24 112 10 l29 29
0 582 0 582 -29 29 c-30 30 -67 37 -100 20 -10 -6 -120 -136 -246 -290 -125
-154 -231 -278 -236 -276 -4 3 -107 127 -229 275 -122 148 -231 277 -243 285
-31 22 -72 18 -104 -9z"
                        />
                    </g>
                </svg>
            </div>

            <div className="sections-links">
                <a href="#education">
                    <i className="fa-solid fa-school"></i>
                    <p>Education</p>
                </a>

            {/*  <a href="#">
                    <i className="fa-solid fa-briefcase"></i>
                    <p>Work Experience</p>
                </a> */}

                <a href="#">
                    <p>Projects</p>
                    <i className="fa-solid fa-code-fork"></i>
                </a>
            </div>

            <div className="social-links">
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/miguelmoreno00"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a target="_blank" href="https://github.com/amiguelmoreno">
                    <i className="fa-brands fa-square-github"></i>
                </a>
            </div>
        </div>
    );
}

export default Header;
