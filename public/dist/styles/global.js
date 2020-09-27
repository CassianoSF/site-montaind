import"../../web_modules/imba/dist/imba.js";imba.inlineStyles(`:root {font-size: 16px;
--font-sans: "Poppins", Arial, sans-serif;
--orange: #fd6001;
--indigo: #0e1229;
--grey: #666666;
--black: #333333;}
:root * {padding: 0rem;
margin: 0rem;
font-family: var(--font-sans,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");}
:root p {line-height: 1.8;
--u_lh: 1.8;
font-size: 1rem;}
:root ul {list-style: none;}
:root a {text-decoration: none;}
:root .container {width: 100%;
margin-left: auto;
margin-right: auto;}
@media (min-width: 640px){
:root .container {max-width: 600px;}
}
@media (min-width: 768px){
:root .container {max-width: 708px;}
}
@media (min-width: 1024px){
:root .container {max-width: 944px;}
}
@media (min-width: 1280px){
:root .container {max-width: 1180px;}
}
:root .btn {color: hsla(0.00,0.00%,100.00%,100%);
background: var(--orange);
line-height: 1.5rem;
--u_lh: 1.5rem;
border-radius: 40px;
border: 1px solid var(--orange);
padding: 0.375rem 0.75rem;
user-select: none;
text-align: center;
cursor: pointer;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;}
:root .btn:hover {color: var(--orange);
background: hsla(0.00,0.00%,100.00%,0%);}

`);
