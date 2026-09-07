export default function BrandLogo({className=""}:{className?:string}){
 return <svg className={`brand-logo ${className}`.trim()} viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M5.5 24.5 12.25 7.5 19.25 23.25 26.5 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="5.5" cy="24.5" r="2.15" fill="currentColor"/>
  <circle cx="12.25" cy="7.5" r="2.15" fill="currentColor"/>
  <circle cx="19.25" cy="23.25" r="2.15" fill="currentColor"/>
  <circle cx="26.5" cy="7" r="2.15" fill="currentColor"/>
 </svg>
}
