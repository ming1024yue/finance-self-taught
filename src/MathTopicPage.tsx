import {mathTopics} from "./mathData";
import {MathHeader,MathSide} from "./MathHome";
const tools=[
 ["可视化与直觉",[["Desmos","https://www.desmos.com/calculator","函数、方程和参数变化的交互图像"],["GeoGebra","https://www.geogebra.org/","几何、代数、微积分和三维可视化"]]],
 ["符号与数值计算",[["Wolfram Alpha","https://www.wolframalpha.com/","核对计算、探索例子；不要直接抄写结果"],["SageMath","https://www.sagemath.org/","免费的开源数学计算系统"],["SymPy","https://www.sympy.org/","在 Python 中进行符号计算"]]],
 ["书写与研究",[["Overleaf","https://www.overleaf.com/","在线编写 LaTeX 数学文档"],["LaTeX Project","https://www.latex-project.org/","规范排版公式、证明和报告"],["Jupyter","https://jupyter.org/","把推导、代码、图表和说明放在同一份笔记中"]]]
] as const;
const mark=(kind:string)=>kind.includes("教材")?"book":kind.includes("讲义")||kind.includes("项目")?"paper":"course";

export default function MathTopicPage({slug}:{slug:string}){const topic=mathTopics[slug];if(!topic)return <main><h1>页面不存在</h1></main>;if(slug==="books")return null;return <div className="shell"><MathHeader/><MathSide active={slug}/><main><section className="hero"><small>SELF-TAUGHT MATHEMATICS / {topic.title}</small><h1>{topic.title}</h1><p>{topic.intro}</p></section>{slug==="tools"?<div className="tool-sections">{tools.map(([title,items])=><section key={title}><h2>{title}</h2><div className="tool-list">{items.map(([name,url,note])=><p key={name}><a href={url} target="_blank" rel="noreferrer">{name}</a><span>：{note}</span></p>)}</div></section>)}</div>:<section><h2>分级精选资源</h2><div className="cards">{topic.resources.map(resource=><article className="card" key={resource.name}><i className={`resource-mark ${mark(resource.kind)}`} aria-hidden="true"/><div><small>{resource.kind} · {resource.level}</small><h3><a href={resource.url} target="_blank" rel="noreferrer">{resource.name}</a></h3><p>{resource.description}</p><dl><div><dt>难度</dt><dd>{resource.level}</dd></div><div><dt>前置要求</dt><dd>{resource.pre}</dd></div></dl></div></article>)}</div></section>}</main></div>}
