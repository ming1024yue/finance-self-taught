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

export default function LearningTimeline({phases}:{phases:readonly TimelinePhase[]}){
 const hasOngoing=phases.some(phase=>phase.mode==="ongoing"||phase.time.includes("持续"));
 const hasChoice=phases.some(phase=>phase.mode==="choice");
 return <section className="learning-timeline" aria-labelledby="learning-timeline-title">
  <header className="timeline-heading">
   <h3 id="learning-timeline-title">整体时间线</h3>
   <p><strong>{totalLabel(phases)}</strong><span>每周 6–10 小时</span></p>
  </header>
  <div className="timeline-scroll" tabIndex={0} aria-label="横向滚动查看全部学习阶段">
   <ol>
    {phases.map((phase,index)=><li className={phase.time.includes("持续")?"ongoing":""} key={`${phase.title}-${index}`}>
     <span className="timeline-node">{String(index+1).padStart(2,"0")}</span>
     <div><b>{phase.title}</b><small>{phase.time}</small></div>
    </li>)}
   </ol>
  </div>
  {(hasChoice||hasOngoing)&&<p className="timeline-note">{hasChoice&&"总时长按一条选修方向计算"}{hasChoice&&hasOngoing&&"；"}{hasOngoing&&"实践贯穿学习过程，不重复计时"}。</p>}
 </section>;
}
