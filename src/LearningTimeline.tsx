type TimelinePhase={time:string;title:string;mode?:"core"|"parallel"|"choice"|"ongoing"};

const toMonths=(time:string):[number,number]|null=>{
 const match=time.match(/(\d+(?:\.\d+)?)\s*(?:[–—-]\s*(\d+(?:\.\d+)?))?\s*(周|个月|月)/);
 if(!match)return null;
 const factor=match[3]==="周"?1/4.345:1;
 const min=Number(match[1])*factor;
 return[min,Number(match[2]??match[1])*factor];
};

const totalLabel=(phases:readonly TimelinePhase[])=>{
 const core=phases.filter(phase=>phase.mode!=="parallel"&&phase.mode!=="choice"&&phase.mode!=="ongoing"&&!phase.time.includes("持续")).map(phase=>toMonths(phase.time)).filter((range):range is [number,number]=>Boolean(range));
 const choices=phases.filter(phase=>phase.mode==="choice").map(phase=>toMonths(phase.time)).filter((range):range is [number,number]=>Boolean(range));
 const parallels=phases.filter(phase=>phase.mode==="parallel").map(phase=>toMonths(phase.time)).filter((range):range is [number,number]=>Boolean(range));
 const chosen:[number,number]=choices.length?[Math.min(...choices.map(range=>range[0])),Math.max(...choices.map(range=>range[1]))]:[0,0];
 const parallel:[number,number]=parallels.length?[Math.max(...parallels.map(range=>range[0])),Math.max(...parallels.map(range=>range[1]))]:[0,0];
 const min=Math.max(1,Math.round(core.reduce((sum,range)=>sum+range[0],0)+chosen[0]+parallel[0]));
 const max=Math.max(min,Math.round(core.reduce((sum,range)=>sum+range[1],0)+chosen[1]+parallel[1]));
 return min===max?`约 ${min} 个月`:`约 ${min}–${max} 个月`;
};

const phaseKind=(phase:TimelinePhase,index:number)=>{
 if(phase.mode==="parallel")return"同步进行";
 if(phase.mode==="choice")return"方向任选一";
 if(phase.mode==="ongoing"||phase.time.includes("持续"))return"长期实践";
 return index===0?"起点":"核心必修";
};

export default function LearningTimeline({phases}:{phases:readonly TimelinePhase[]}){
 const hasOngoing=phases.some(phase=>phase.mode==="ongoing"||phase.time.includes("持续"));
 const hasChoice=phases.some(phase=>phase.mode==="choice");
 return <section className="learning-timeline" aria-labelledby="learning-timeline-title">
  <header className="timeline-heading">
   <div><small>LEARNING TIMELINE</small><h3 id="learning-timeline-title">整体时间线</h3></div>
   <div className="timeline-summary"><span>{hasChoice?"核心 + 一个方向":"核心主线"}</span><strong>{totalLabel(phases)}</strong><small>每周 6–10 小时{hasOngoing?" · 实践贯穿其中":""}</small></div>
  </header>
  <div className="timeline-scroll" tabIndex={0} aria-label="横向滚动查看全部学习阶段">
   <ol>
    {phases.map((phase,index)=><li className={phase.time.includes("持续")?"ongoing":""} key={`${phase.title}-${index}`}>
     <span className="timeline-node">{String(index+1).padStart(2,"0")}</span>
     <div><em>{phaseKind(phase,index)}</em><small>{phase.time}</small><b>{phase.title}</b></div>
    </li>)}
   </ol>
  </div>
  <div className="timeline-guidance">
   <p><b>如何理解时间：</b>这是建立核心框架的参考用时，不等同于完整学历。“同步进行”和“长期实践”不重复计时，“方向任选一”只计算其中一条。</p>
   <p><span>轻量节奏 · 每周 3–5 小时</span>可将总时长放宽至约 1.5 倍；<span>集中节奏 · 每周 12–15 小时</span>可缩短至约 0.7 倍。</p>
  </div>
 </section>;
}
