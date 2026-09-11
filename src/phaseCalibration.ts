import type {Phase,SubjectConfig} from "./subjectTypes";

type PhaseUpdate=Pick<Phase,"time">&Partial<Pick<Phase,"title"|"goal"|"learn"|"done"|"mode">>;

const plans:Record<string,Record<string,PhaseUpdate>>={
 physics:{
  foundations:{time:"2–3 个月"},
  mechanics:{time:"8–12 个月",learn:"经典力学、电磁学、振动、波与光学；同步补充常微分方程并持续做题。"},
  thermo:{time:"4–6 个月"},
  quantum:{time:"6–9 个月",title:"进入相对论、量子与原子物理"},
  "condensed-matter":{time:"按方向 4–6 个月",mode:"choice"},
  projects:{time:"从第二阶段持续",mode:"ongoing"}
 },
 "computer-science":{
  programming:{time:"3–4 个月"},
  algorithms:{time:"4–6 个月"},
  systems:{time:"8–12 个月"},
  distributed:{time:"按方向 4–6 个月",title:"选择软件、数据或系统方向",mode:"choice"},
  ai:{time:"按方向 6–10 个月",title:"或选择人工智能与智能系统方向",mode:"choice"},
  projects:{time:"从第二阶段持续",mode:"ongoing"}
 },
 psychology:{
  introduction:{time:"2–3 个月"},
  methods:{time:"同步进行 3–5 个月",title:"贯穿研究方法、统计与测量",mode:"parallel"},
  biological:{time:"4–6 个月"},
  development:{time:"3–5 个月"},
  clinical:{time:"按方向 4–6 个月",mode:"choice"},
  computational:{time:"按方向 4–6 个月",title:"或选择计算心理与开放科学",mode:"choice"},
  projects:{time:"从第三阶段持续",mode:"ongoing"}
 },
 "political-science":{
  foundations:{time:"2 个月"},
  methods:{time:"3–5 个月"},
  comparative:{time:"6–9 个月",learn:"政治理论、比较政治、国内制度与国际关系；按顺序各选一套主课程。"},
  policy:{time:"按方向 3–5 个月",title:"选择政策、政治经济或政治数据方向",mode:"choice"},
  projects:{time:"从核心阶段持续",mode:"ongoing"}
 },
 management:{
  foundations:{time:"1–2 个月"},
  organization:{time:"4–6 个月"},
  strategy:{time:"6–8 个月"},
  decisions:{time:"3–5 个月"},
  projects:{time:"从核心阶段持续",mode:"ongoing"}
 },
 history:{
  methods:{time:"1–2 个月"},
  humanity:{time:"5–8 个月"},
  china:{time:"按区域 4–6 个月",title:"选择一个区域深化",mode:"choice"},
  global:{time:"同步进行 3–5 个月",mode:"parallel"},
  projects:{time:"从第一阶段持续",mode:"ongoing"}
 },
 literature:{
  writing:{time:"2–3 个月"},
  world:{time:"5–8 个月",learn:"从两条文学传统、一个时期或一种体裁开始，配合历史语境和持续写作。"},
  theory:{time:"3–5 个月"},
  comparative:{time:"按方向 3–5 个月",mode:"choice"},
  projects:{time:"从第一阶段持续",mode:"ongoing"}
 }
};

const phaseOrder:Record<string,string[]>={
 psychology:["introduction","methods","biological","development","clinical","computational","projects"]
};

export const calibrateSubjectPlans=(subjects:SubjectConfig[])=>subjects.map(subject=>{
 const updates=plans[subject.slug];
 if(!updates)return subject;
 const phases=subject.phases.map(phase=>({...phase,...updates[phase.link]}));
 const order=phaseOrder[subject.slug];
 if(order)phases.sort((a,b)=>order.indexOf(a.link)-order.indexOf(b.link));
 return{...subject,phases};
});
