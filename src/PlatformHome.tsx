const base=import.meta.env.BASE_URL;
const subjects=[
 {name:"金融",href:`${base}finance/`,active:true},
 {name:"数学",href:`${base}math/`,active:true},{name:"物理"},{name:"计算机"},{name:"生物"},{name:"心理学"},{name:"社会科学"},{name:"历史"}
];

export default function PlatformHome(){return <div className="platform"><header className="platform-header"><a className="platform-brand" href={base} aria-label="自学路径首页"><b>自学路径</b></a><nav className="platform-nav" aria-label="学科导航">{subjects.map(subject=>subject.active?<a href={subject.href} key={subject.name}>{subject.name}</a>:<span key={subject.name} title="正在筹备中" aria-disabled="true">{subject.name}<small>筹备中</small></span>)}<a href="#about">关于</a><a href="https://github.com/ming1024yue/finance-self-taught/issues" target="_blank" rel="noreferrer">共建</a></nav></header><main className="platform-main"><section className="platform-hero"><small>OPEN LEARNING PATHS</small><h1>为每一门学科，<br/>整理一条真正可走的自学路径。</h1><p>本站希望减少优质教育资源与学习者之间的信息差。我们按照知识依赖关系，整理公开课、教材、论文、工具与实践项目，帮助零基础学习者逐步建立完整的知识体系。</p></section><section id="about" className="platform-about"><h2>愿景</h2><p className="platform-vision">我们相信，科技终将抹平知识的边界，让每个人都能自由、免费地学习一切。</p><div><p><b>系统</b><br/>沿知识依赖建立完整框架，而非零散积累。</p><p><b>公开</b><br/>善用公开课、开放教材和原始资料，自主获取知识。</p><p><b>实践</b><br/>通过习题、报告、代码和项目，把理解转化为能力。</p></div></section></main></div>}
