import {useEffect,useRef,useState} from "react";
import BrandLogo from "./BrandLogo";

const base=import.meta.env.BASE_URL;
type SubjectLink={name:string;href?:string};
type Category={name:string;items:SubjectLink[]};
const categories:Category[]=[
 {name:"数学与计算机科学",items:[{name:"数学",href:`${base}math/`},{name:"计算机科学",href:`${base}computer-science/`}]},
 {name:"自然科学",items:[{name:"物理",href:`${base}physics/`},{name:"化学",href:`${base}chemistry/`},{name:"生物",href:`${base}biology/`}]},
 {name:"社会科学",items:[{name:"金融",href:`${base}finance/`},{name:"心理学",href:`${base}psychology/`},{name:"社会科学导论",href:`${base}social-science/`},{name:"历史",href:`${base}history/`}]},
 {name:"工程学",items:[{name:"工程基础",href:`${base}engineering/topics/foundations/`},{name:"电子与电气工程",href:`${base}engineering/topics/electrical/`},{name:"机械工程",href:`${base}engineering/topics/mechanical/`},{name:"计算机工程",href:`${base}engineering/topics/computer/`},{name:"航空航天工程",href:`${base}engineering/topics/aerospace/`}]},
 {name:"语言",items:[{name:"语言学",href:`${base}language/topics/linguistics/`},{name:"汉语",href:`${base}language/topics/chinese/`},{name:"英语",href:`${base}language/topics/english/`}]},
 {name:"文学",items:[{name:"写作",href:`${base}literature/topics/writing/`},{name:"文学理论",href:`${base}literature/topics/theory/`},{name:"中外文学",href:`${base}literature/topics/world/`}]}
];

function MenuItems({category,onSelect}:{category:Category;onSelect?:()=>void}){
 return <>{category.items.map(item=>item.href?<a href={item.href} key={item.name} onClick={onSelect}>{item.name}<span>进入学科</span></a>:<span className="subject-coming" key={item.name}>{item.name}<small>筹备中</small></span>)}</>;
}

export default function PlatformHome(){
 const [openCategory,setOpenCategory]=useState<string|null>(null),headerRef=useRef<HTMLElement>(null);
 useEffect(()=>{const close=(event:PointerEvent)=>{if(!headerRef.current?.contains(event.target as Node))setOpenCategory(null)},escape=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpenCategory(null)};document.addEventListener("pointerdown",close);document.addEventListener("keydown",escape);return()=>{document.removeEventListener("pointerdown",close);document.removeEventListener("keydown",escape)}},[]);
 const active=categories.find(category=>category.name===openCategory);
 return <div className="platform">
  <header className="platform-header" ref={headerRef}>
   <a className="platform-brand" href={base} aria-label="自学坊首页"><BrandLogo/><b>自学坊</b></a>
   <nav className="platform-nav" aria-label="学科分类导航">
    {categories.map(category=><div className={`subject-menu${openCategory===category.name?" open":""}`} key={category.name}>
     <button type="button" aria-expanded={openCategory===category.name} onClick={()=>setOpenCategory(current=>current===category.name?null:category.name)}>{category.name}<i aria-hidden="true"/></button>
     <div className="subject-menu-panel"><MenuItems category={category} onSelect={()=>setOpenCategory(null)}/></div>
    </div>)}
    <a className="platform-simple-link" href="#about" onClick={()=>setOpenCategory(null)}>关于</a>
   </nav>
   {active&&<div className="mobile-subject-panel"><strong>{active.name}</strong><MenuItems category={active} onSelect={()=>setOpenCategory(null)}/></div>}
  </header>
  <main className="platform-main">
   <section className="platform-hero">
    <small>OPEN LEARNING PATHS</small>
    <h1>为每一门学科，<br/>整理一条真正可走的自学路径。</h1>
    <p>本站希望减少优质教育资源与学习者之间的信息差。我们按照知识依赖关系，整理公开课、教材、论文、工具与实践项目，帮助零基础学习者逐步建立完整的知识体系。</p>
   </section>
   <section id="about" className="platform-about">
    <h2>愿景</h2>
    <p className="platform-vision">我们相信，科技终将抹平知识的边界，让每个人都能自由、免费地学习一切。</p>
    <div>
     <p><b>系统</b><br/>沿知识依赖建立完整框架，而非零散积累。</p>
     <p><b>公开</b><br/>善用公开课、开放教材和原始资料，自主获取知识。</p>
     <p><b>实践</b><br/>通过习题、报告、代码和项目，把理解转化为能力。</p>
    </div>
   </section>
   <section className="platform-contact">
    <small>CONTACT</small>
    <p>如果你有建议、想推荐优质资源，或希望参与共建，欢迎发送邮件至 <a href="mailto:mingyueoct24@gmail.com">mingyueoct24@gmail.com</a>。</p>
   </section>
  </main>
 </div>
}
