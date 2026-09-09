import {MathHeader,MathSide} from "./MathHome";
const books=[
 ["OpenStax Algebra and Trigonometry 2e","https://openstax.org/details/books/algebra-and-trigonometry-2e","基础数学 · 入门","覆盖函数、方程、指数对数与三角学，适合补齐大学前基础。"],
 ["Calculus — Gilbert Strang","https://ocw.mit.edu/courses/res-18-001-calculus-fall-2023/","微积分 · 入门至进阶","MIT OCW 发布的完整开放教材，兼顾单变量、多变量和实际应用。"],
 ["Linear Algebra — Jim Hefferon","https://hefferon.net/linearalgebra/","线性代数 · 入门","从消元逐步进入向量空间和线性映射，提供完整习题。"],
 ["Book of Proof — Richard Hammack","https://richardhammack.github.io/BookOfProof/","证明 · 入门","从集合与逻辑开始训练直接证明、反证法和数学归纳法。"],
 ["OpenIntro Statistics","https://www.openintro.org/book/os/","统计学 · 入门","使用真实数据和练习介绍描述统计、抽样与统计推断。"],
 ["Basic Analysis — Jiří Lebl","https://www.jirka.org/ra/","实分析 · 进阶","两卷开放教材，从实数、序列与连续进入度量空间和多变量分析。"],
 ["Abstract Algebra: Theory and Applications","https://judsonbooks.org/abstract-algebra-theory-and-applications/","抽象代数 · 进阶","开放教材，覆盖群、环、域及密码学等应用。"],
 ["Convex Optimization","https://web.stanford.edu/~boyd/cvxbook/","优化 · 进阶","Boyd 与 Vandenberghe 的经典教材，由 Stanford 官方免费提供。"]
];
const portals=[
 ["清华","清华大学：微积分","https://v1-www.xuetangx.com/courses/course-v1%3ATsinghuaX%2BAP000005X%2B2016_T2/about","从极限、导数与积分进入级数和常微分方程，适合大学数学起步。"],
 ["南大","南京大学：近世代数","https://www.icourse163.org/course/NJU-1462062161","以初学者可进入的方式系统讲解群、环、域，并提供持续自学入口。"],
 ["MIT","MIT OpenCourseWare — Mathematics","https://ocw.mit.edu/search/?d=Mathematics","覆盖本科到研究生数学，讲义、作业和考试资料丰富。"],
 ["Harvard","Harvard Mathematics Courses","https://pll.harvard.edu/subject/mathematics","查找概率、统计、数据科学和数学基础公开课程。"],
 ["Stanford","Stanford Engineering Everywhere","https://see.stanford.edu/Course","包含线性系统、机器学习及相关数学课程资料。"],
 ["Yale","Open Yale Courses","https://oyc.yale.edu/courses","可查找基础物理、经济学和数学相关公开课程。"],
 ["Carnegie Mellon","CMU Open Learning Initiative","https://oli.cmu.edu/","提供统计、逻辑和定量推理等交互课程。"],
 ["MIT","MIT 18.01SC Self-study Calculus","https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/","专为独立学习整理的视频、讲义、习题、考试与完整答案。"]
];
export default function MathBooksPage(){return <div className="shell"><MathHeader/><MathSide active="books"/><main><section className="hero"><small>SELF-TAUGHT MATHEMATICS / 书单与资源</small><h1>书单与资源</h1><p>优先收录可以合法免费阅读的完整教材和大学官方公开课程。每个阶段选择一本主教材，课程用于补充讲解，习题用于检验理解。</p></section><section><h2>公开电子书</h2><p className="section-note">以下教材均可通过作者、学校或开放教育平台免费阅读。</p><div className="library-list">{books.map(([name,url,tag,text])=><article key={name}><i className="resource-mark book"/><div><small>{tag}</small><h3><a href={url} target="_blank" rel="noreferrer">{name}</a></h3><p>{text}</p></div></article>)}</div></section><section><h2>名校公开课入口</h2><p className="section-note">中文资源仅选择学科实力突出且课程材料可公开访问的顶尖高校。进入课程后先阅读教学大纲与前置要求，再决定是否作为主课。</p><div className="course-portals">{portals.map(([tag,name,url,text])=><article key={name}><span>{tag}</span><h3><a href={url} target="_blank" rel="noreferrer">{name}</a></h3><p>{text}</p></article>)}</div></section></main></div>}
