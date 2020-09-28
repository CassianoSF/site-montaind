import"../web_modules/imba/dist/imba.js";imba.inlineStyles(`:root {--font: "Poppins", Arial, sans-serif;
--orange: #fd6001;
--indigo: #0e1229;
--grey: #666666;}
:root * {margin: 0rem;
padding: 0rem;
font-family: var(--font);}
:root a {font-size: 0.875rem;
text-decoration: none;}
:root ul {list-style: none;}
:root h1 {font-size: 3.125rem;
font-weight: 600;
margin-bottom: 1.5rem;
line-height: 1.2;
--u_lh: 1.2;}
:root h2 {font-size: 2rem;
font-weight: 500;
margin-bottom: 1.5rem;}
:root p {margin-bottom: 1rem;
line-height: 1.8;
--u_lh: 1.8;}
:root h3 {font-size: 1.375rem;
font-weight: 500;
margin-bottom: .5rem;}
:root small {font-size: 0.875rem;
color: var(--orange);
ft: uppercase;
letter-spacing: 1;}
:root button {font-size: 1rem;}
:root i::before {margin: 0rem;
padding: 0rem;}
:root .container {width: 100%;
padding-left: 10%;
padding-right: 10%;}

@keyframes fadeInUp-_root-khgtmn {
 0% {
opacity: 0;
visibility: hidden;
transform: translate3d(0, 40px, 0);
}
 100% {
visibility: visible;
opacity: 1;
transform: none;
}
}
:root {--animation-fadeInUp: fadeInUp-_root-khgtmn;}
@keyframes fadeIn-_root-khgtmn {
 0% {
opacity: 0;
visibility: hidden;
transform: scale(0.95);
}
 100% {
opacity: 1;
visibility: visible;
transform: scale(1);
}
}
:root {--animation-fadeIn: fadeIn-_root-khgtmn;}
@keyframes fadeOut-_root-khgtmn {
 0% {
opacity: 1;
}
 100% {
opacity: 0;
}
}
:root {--animation-fadeOut: fadeOut-_root-khgtmn;}

`);
