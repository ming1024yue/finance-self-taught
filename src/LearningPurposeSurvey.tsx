import {useMemo,useState} from "react";
import "./learning-purpose.css";

type LearningPurpose="explore"|"foundation"|"career"|"project"|"gap";
type Answers=Record<string,string>;
type ScoreMap=Record<LearningPurpose,number>;
type Option={id:string;label:string;scores:Partial<ScoreMap>};
type Question={id:string;title:string;options:Option[]};
type PurposeRecord={
  version:1;
  answers:Answers;
  primary:LearningPurpose;
  secondary?:LearningPurpose;
  savedAt:string;
};

const storageKey="selftaught:learning-purpose:v1";
const purposeOrder:LearningPurpose[]=["explore","foundation","career","project","gap"];

const purposeMeta:Record<LearningPurpose,{name:string;eyebrow:string;description:string}>={
  explore:{name:"探索方向",eyebrow:"EXPLORATION",description:"先建立领域地图、理解重要问题，再决定值得长期投入的方向。"},
  foundation:{name:"系统学习",eyebrow:"FOUNDATION",description:"沿清晰的前置关系打牢基础，逐步形成完整、可迁移的知识体系。"},
  career:{name:"职业发展",eyebrow:"CAREER",description:"围绕目标岗位组织学习，用作品、实践和外部证明连接职业能力。"},
  project:{name:"项目驱动",eyebrow:"PROJECT",description:"从真实问题或作品倒推所需知识，在做中学并持续交付成果。"},
  gap:{name:"能力补缺",eyebrow:"CAPABILITY GAP",description:"跳过已经掌握的部分，集中补齐当前目标所需的关键能力。"},
};

const questions:Question[]=[
  {id:"goal",title:"你现在最想通过学习解决什么问题？",options:[
    {id:"explore",label:"我想先了解不同领域，找到真正感兴趣的方向。",scores:{explore:3}},
    {id:"foundation",label:"我想从零开始，系统建立一门学科的知识体系。",scores:{foundation:3}},
    {id:"career",label:"我希望学习能帮助我进入一个职业、岗位或行业。",scores:{career:3}},
    {id:"project",label:"我已经有项目、研究或作品，希望边做边学。",scores:{project:3}},
    {id:"gap",label:"我已经有一些基础，只想补齐目前缺少的能力。",scores:{gap:3}},
  ]},
  {id:"result",title:"三个月后，你最希望看到什么结果？",options:[
    {id:"explore",label:"我理解了几个领域的核心问题，也知道下一步想学什么。",scores:{explore:2}},
    {id:"foundation",label:"我形成了一套连贯的知识框架和稳定的学习节奏。",scores:{foundation:2}},
    {id:"career",label:"我的简历、作品集或岗位能力有了明确提升。",scores:{career:2}},
    {id:"project",label:"我完成了一个可以展示、复现或继续迭代的成果。",scores:{project:2}},
    {id:"gap",label:"我能够独立解决一个以前不会处理的具体问题。",scores:{gap:2}},
  ]},
  {id:"route",title:"你更希望怎样安排学习路径？",options:[
    {id:"explore",label:"给我多个入口和方向，让我先自由探索。",scores:{explore:2}},
    {id:"foundation",label:"给我一条完整主线，我愿意循序渐进。",scores:{foundation:2}},
    {id:"career",label:"优先保留与目标职业高度相关的内容。",scores:{career:2}},
    {id:"project",label:"从最终成果倒推当前最需要学习的内容。",scores:{project:2}},
    {id:"gap",label:"跳过我已经会的，只学习必要缺口。",scores:{gap:2}},
  ]},
  {id:"evidence",title:"什么最能证明你真正学会了？",options:[
    {id:"explore",label:"我能解释领域地图，并作出有理由的方向选择。",scores:{explore:2}},
    {id:"foundation",label:"我能解释核心知识，以及它们之间的关系。",scores:{foundation:2}},
    {id:"career",label:"我能完成岗位任务、案例、面试或作品集项目。",scores:{career:2}},
    {id:"project",label:"我的项目已经真正运行、完成或产生结果。",scores:{project:2}},
    {id:"gap",label:"我能解决那个原来卡住我的具体问题。",scores:{gap:2}},
  ]},
  {id:"clarity",title:"你现在对学习目标有多明确？",options:[
    {id:"explore",label:"还不明确，我主要想发现有什么值得学习。",scores:{explore:2}},
    {id:"foundation",label:"我知道想学哪门学科，但还没有具体应用目标。",scores:{foundation:2}},
    {id:"career",label:"我知道未来想做什么职业，但不清楚能力要求。",scores:{career:2}},
    {id:"project",label:"我已经有明确的项目、论文、产品或任务。",scores:{project:2}},
    {id:"gap",label:"我很清楚缺什么，只想找到最短的补齐路径。",scores:{gap:2}},
  ]},
];

function classify(answers:Answers){
  const scores:ScoreMap={explore:0,foundation:0,career:0,project:0,gap:0};
  for(const question of questions){
    const selected=question.options.find(option=>option.id===answers[question.id]);
    if(!selected)continue;
    for(const purpose of purposeOrder)scores[purpose]+=selected.scores[purpose]??0;
  }
  const ranking=purposeOrder.map(purpose=>[purpose,scores[purpose]] as const).sort((a,b)=>b[1]-a[1]);
  const primary=ranking[0][0];
  const secondary=ranking[1][1]>=ranking[0][1]*0.7?ranking[1][0]:undefined;
  return {primary,secondary};
}

function readRecord():PurposeRecord|null{
  if(typeof window==="undefined")return null;
  try{
    const value=window.localStorage.getItem(storageKey);
    if(!value)return null;
    const parsed=JSON.parse(value) as Partial<PurposeRecord>;
    if(parsed.version!==1||!parsed.answers||!parsed.primary||!purposeOrder.includes(parsed.primary))return null;
    return parsed as PurposeRecord;
  }catch{return null;}
}

function writeRecord(record:PurposeRecord|null){
  try{
    if(record)window.localStorage.setItem(storageKey,JSON.stringify(record));
    else window.localStorage.removeItem(storageKey);
  }catch{/* The survey still works when browser storage is unavailable. */}
}

export default function LearningPurposeSurvey(){
  const [initialRecord]=useState<PurposeRecord|null>(()=>readRecord());
  const [record,setRecord]=useState<PurposeRecord|null>(initialRecord);
  const [answers,setAnswers]=useState<Answers>(initialRecord?.answers??{});
  const [step,setStep]=useState(0);
  const [editing,setEditing]=useState(!initialRecord);
  const result=useMemo(()=>classify(answers),[answers]);
  const current=questions[step];
  const selected=answers[current.id];

  const save=()=>{
    const nextRecord:PurposeRecord={version:1,answers,primary:result.primary,secondary:result.secondary,savedAt:new Date().toISOString()};
    writeRecord(nextRecord);
    setRecord(nextRecord);
    setEditing(false);
  };

  const clear=()=>{
    writeRecord(null);
    setRecord(null);
    setAnswers({});
    setStep(0);
    setEditing(true);
  };

  if(!editing&&record){
    const primary=purposeMeta[record.primary];
    const secondary=record.secondary?purposeMeta[record.secondary]:undefined;
    return <section id="learning-purpose" className="learning-purpose purpose-result">
      <div className="purpose-result-main">
        <small>{primary.eyebrow}</small>
        <h2>你的学习目的：{primary.name}</h2>
        <p>{primary.description}</p>
        {secondary&&<p className="purpose-secondary">同时倾向于 <b>{secondary.name}</b>：{secondary.description}</p>}
      </div>
      <div className="purpose-result-side">
        <p>结果已保存在当前浏览器。以后可以用它帮助你组织不同学科的学习路径。</p>
        <div className="purpose-actions"><button type="button" onClick={()=>{setStep(0);setEditing(true);}}>修改答案</button><button type="button" onClick={clear}>清除记录</button></div>
      </div>
    </section>;
  }

  return <section id="learning-purpose" className="learning-purpose">
    <div className="purpose-intro">
      <small>YOUR LEARNING PURPOSE · 1 MIN</small>
      <h2>你为什么想学习？</h2>
      <p>先明确此刻的目的。我们只把结果保存在当前浏览器，不需要登录，也不会上传个人信息。</p>
      <div className="purpose-progress" aria-label={`第 ${step+1} 题，共 ${questions.length} 题`}><span style={{width:`${((step+1)/questions.length)*100}%`}}/></div>
    </div>
    <div className="purpose-question">
      <span>{String(step+1).padStart(2,"0")} / {String(questions.length).padStart(2,"0")}</span>
      <h3>{current.title}</h3>
      <div className="purpose-options">{current.options.map((option,index)=><button type="button" key={option.id} className={selected===option.id?"selected":""} onClick={()=>setAnswers(previous=>({...previous,[current.id]:option.id}))}><b>{String.fromCharCode(65+index)}</b><span>{option.label}</span></button>)}</div>
      <div className="purpose-actions"><button type="button" onClick={()=>setStep(value=>Math.max(0,value-1))} disabled={step===0}>上一题</button><button type="button" className="primary" disabled={!selected} onClick={()=>step===questions.length-1?save():setStep(value=>value+1)}>{step===questions.length-1?"记录我的目的":"下一题"}</button></div>
    </div>
  </section>;
}
