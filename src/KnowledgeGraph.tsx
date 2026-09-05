const disciplines=[
 {name:"数学",key:"math"},{name:"计算机",key:"cs"},{name:"经济学",key:"econ"},{name:"金融",key:"finance",active:true},{name:"物理",key:"physics"},{name:"工程",key:"engineering"}
];
const intersections=[
 {name:"金融工程",en:"FINANCIAL ENGINEERING",uses:["数学","计算机","金融"],text:"用随机过程、数值计算和金融理论设计、定价与管理金融工具。"},
 {name:"量化研究",en:"QUANTITATIVE RESEARCH",uses:["数学","计算机","经济学","金融"],text:"结合统计、编程、市场机制与资产定价，研究可检验的金融问题。"},
 {name:"计量经济学",en:"ECONOMETRICS",uses:["数学","计算机","经济学"],text:"通过统计模型、因果识别和计算工具，从真实数据中检验经济理论。"},
 {name:"复杂系统",en:"COMPLEX SYSTEMS",uses:["数学","计算机","经济学","物理"],text:"研究大量相互作用个体如何形成市场、网络和社会系统的整体行为。"},
 {name:"机器学习",en:"MACHINE LEARNING",uses:["数学","计算机","工程"],text:"把概率、优化和计算结合起来，从数据中构建预测与决策模型。"},
 {name:"控制与机器人",en:"CONTROL & ROBOTICS",uses:["数学","计算机","物理","工程"],text:"利用动力学、控制理论与软件，使复杂系统能够感知、决策和行动。"}
];
export default function KnowledgeGraph(){return <section className="knowledge-section" id="knowledge-graph"><div className="knowledge-heading"><small>KNOWLEDGE GRAPH</small><h2>知识不是孤立的章节</h2><p>基础学科提供不同的思维工具，高阶领域往往诞生于它们的交汇处。下面展示未来知识图谱的第一层结构。</p></div><div className="graph-panel"><div className="discipline-row">{disciplines.map(d=><div className={`discipline-node ${d.active?"active":""}`} key={d.key}><span className={`node-dot ${d.key}`}/><b>{d.name}</b><small>{d.active?"内容建设中":"待建设"}</small></div>)}</div><div className="graph-bridge"><span>基础学科的组合与应用</span></div><div className="intersection-grid">{intersections.map(x=><article key={x.name}><small>{x.en}</small><h3>{x.name}</h3><div className="field-tags">{x.uses.map(u=><span key={u}>{u}</span>)}</div><p>{x.text}</p></article>)}</div></div><p className="graph-note">当前图谱用于说明学科之间的关系。随着各学科内容完善，每个节点会进一步连接到具体知识点、课程、教材与项目。</p></section>}
