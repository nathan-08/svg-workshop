import React from 'react';
import './ableLogo.css';
setTimeout(()=>{
    let onClick = ({target: svg})=>{
        let newElm = svg.cloneNode(true);
        newElm.addEventListener('click', onClick)
        svg.parentNode.replaceChild(newElm, svg);
    }
    let svg = document.querySelector('.able-logo--svg');
    svg.addEventListener('click', onClick)
},3000)
export default props => (
    <svg className="able-logo--svg start" viewBox="0 0 196 197" version={1}>
    <path className="first-path" d="M149 174l-91 7-51-76 40-83 92-6 51 76z" fill="none" stroke="red" strokeWidth={6} />
    <path className="second-path" d="M111 34l49 43-12 64-62 22-50-43 13-65z" fill="none" stroke="red" strokeWidth="4.29354" />
    <g aria-label="ABLE" style={{lineHeight: '1.25', InkscapeFontSpecification: '"Britannic Bold, "'}} fontWeight={400} fontSize={43} fontFamily="Britannic Bold" letterSpacing={0} wordSpacing={0} strokeWidth={0}>
      <path className="word-path" d="M66 84l8 29h-8l-2-7h-8l-2 7h-3l8-29zm-9 19h7l-4-12zM77 113V84h12q10 0 10 7 0 5-6 6 7 2 7 8 0 8-9 8zm8-3h2q5 0 5-5 0-6-5-6h-2zm0-14h3q3 0 3-5t-4-5h-2zM112 84v26h12v3h-20V84zM144 84v3h-10v8h8v3h-8v12h12v3h-20V84z" style={{InkscapeFontSpecification: '"Britannic Bold, "'}} />
    </g>
  </svg>
)