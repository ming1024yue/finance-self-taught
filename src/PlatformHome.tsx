const base=import.meta.env.BASE_URL;
const subjects=[
 {name:"金融",href:`${base}finance/`,active:true},
 {name:"数学"},{name:"物理"},{name:"计算机"},{name:"工程"}
];

export default function PlatformHome(){return <div className="platform"><header className="platform-header"><a className="platform-brand" href={base} aria-label="自学路径首页"><b>自学路径</b></a><nav className="platform-nav" aria-label="学科导航">{subjects.map(subject=>subject.active?<a href={subject.href} key={subject.name}>{subject.name}</a>:<span key={subject.name} title="正在筹备中" aria-disabled="true">{subject.name}<small>筹备中</small></span>)}<a href="#about">关于</a><a href="https://github.com/ming1024yue/finance-self-taught/issues" target="_blank" rel="noreferrer">共建</a></nav></header><main className="platform-main"><section className="platform-hero"><small>OPEN LEARNING PATHS</small><h1>为每一门学科，<br/>整理一条真正可走的自学路径。</h1><p>本站希望减少优质教育资源与学习者之间的信息差。我们按照知识依赖关系，整理公开课、教材、论文、工具与实践项目，帮助零基础学习者逐步建立完整的知识体系。</p></section><section id="about" className="platform-about"><h2>我们如何整理内容</h2><div><p><b>路径优先</b><br/>先说明学习顺序与前置要求，再推荐资源。</p><p><b>公开可得</b><br/>优先选择大学公开课、开放教材和原始资料。</p><p><b>能够实践</b><br/>不止于观看课程，最终要形成习题、报告、代码或项目。</p></div></section></main></div>}
