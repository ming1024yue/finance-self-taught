import {useEffect,useRef,useState} from "react";
import BrandLogo from "./BrandLogo";

const base=import.meta.env.BASE_URL;
type SubjectLink={name:string;href:string};
type Category={name:string;items:SubjectLink[]};

const categories:Category[]=[
 {name:"数学与计算机科学",items:[{name:"数学",href:`${base}math/`},{name:"计算机科学",href:`${base}computer-science/`}]},
 {name:"自然科学",items:[{name:"物理",href:`${base}physics/`},{name:"化学",href:`${base}chemistry/`},{name:"生物",href:`${base}biology/`}]},
 {name:"社会科学",items:[{name:"金融",href:`${base}finance/`},{name:"心理学",href:`${base}psychology/`},{name:"政治学",href:`${base}political-science/`},{name:"管理学",href:`${base}management/`},{name:"历史",href:`${base}history/`}]},
 {name:"工程学",items:[{name:"电子与电气工程",href:`${base}engineering/electrical/`},{name:"机械工程",href:`${base}engineering/mechanical/`},{name:"计算机工程",href:`${base}engineering/computer/`},{name:"航空航天工程",href:`${base}engineering/aerospace/`},{name:"控制与系统工程",href:`${base}engineering/systems/`},{name:"材料工程",href:`${base}engineering/materials/`}]},
 {name:"语言",items:[{name:"语言学",href:`${base}language/linguistics/`},{name:"汉语",href:`${base}language/chinese/`},{name:"英语",href:`${base}language/english/`}]},
 {name:"文学",items:[{name:"写作",href:`${base}literature/topics/writing/`},{name:"文学理论",href:`${base}literature/topics/theory/`},{name:"中外文学",href:`${base}literature/topics/world/`}]}
];

function MenuItems({category,onSelect}:{category:Category;onSelect:()=>void}){
 return <>{category.items.map(item=><a href={item.href} key={item.name} onClick={onSelect}>{item.name}<small>进入学科</small></a>)}</>;
}

export default function GlobalHeader({sidebarLabel}:{sidebarLabel?:string}){
 const [openCategory,setOpenCategory]=useState<string|null>(null),headerRef=useRef<HTMLElement>(null);
 useEffect(()=>{const close=(event:PointerEvent)=>{if(!headerRef.current?.contains(event.target as Node))setOpenCategory(null)},escape=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpenCategory(null)};document.addEventListener("pointerdown",close);document.addEventListener("keydown",escape);return()=>{document.removeEventListener("pointerdown",close);document.removeEventListener("keydown",escape);document.body.classList.remove("menu-open")}},[]);
 const active=categories.find(category=>category.name===openCategory);
 const closeSidebar=()=>document.body.classList.remove("menu-open");
 const toggleSidebar=(button:HTMLButtonElement)=>{const open=document.body.classList.toggle("menu-open");button.setAttribute("aria-expanded",String(open))};
 const closeCategory=()=>setOpenCategory(null);
 return <>
  <header className={`platform-header${sidebarLabel?" subject-global-header":""}`} ref={headerRef}>
   <div className="platform-brand-row">
    {sidebarLabel&&<button className="menu-button" aria-label={`打开${sidebarLabel}目录`} aria-expanded="false" onClick={event=>toggleSidebar(event.currentTarget)}><span/><span/><span/></button>}
    <a className="platform-brand" href={base} aria-label="自学坊首页"><BrandLogo/><b>自学坊</b></a>
   </div>
   <nav className="platform-nav" aria-label="学科分类导航">
    {categories.map(category=><div className={`subject-menu${openCategory===category.name?" open":""}`} key={category.name}>
     <button type="button" aria-expanded={openCategory===category.name} onClick={()=>setOpenCategory(current=>current===category.name?null:category.name)}>{category.name}<i aria-hidden="true"/></button>
     <div className="subject-menu-panel"><MenuItems category={category} onSelect={closeCategory}/></div>
    </div>)}
    <a className="platform-simple-link" href={`${base}opportunities/`} onClick={closeCategory}>比赛和资质</a>
    <a className="platform-simple-link" href={`${base}#about`} onClick={closeCategory}>关于</a>
   </nav>
   {active&&<div className="mobile-subject-panel"><strong>{active.name}</strong><MenuItems category={active} onSelect={closeCategory}/></div>}
  </header>
  {sidebarLabel&&<button className="mobile-overlay" aria-label={`关闭${sidebarLabel}目录`} onClick={closeSidebar}/>} 
 </>;
}
