export default function BrandLogo({className=""}:{className?:string}){
 return <svg className={`brand-logo ${className}`.trim()} viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M24.75 7.25C21.9 4.45 14.1 4.35 9.55 7.25C5.85 9.6 6.75 13.15 11.25 14.8L20.7 18.25C25.2 19.9 25.55 23.55 21.35 25.85C16.8 28.35 9.25 27.45 6.4 24.55" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="24.75" cy="7.25" r="2.15" fill="currentColor"/>
  <circle cx="15.9" cy="16.5" r="1.75" fill="currentColor"/>
  <circle cx="6.4" cy="24.55" r="2.15" fill="currentColor"/>
 </svg>
}
