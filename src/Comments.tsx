import {useEffect,useRef} from "react";

const repo="ming1024yue/finance-self-taught";
const repoId="R_kgDOUOOwiQ";
const categoryId=import.meta.env.VITE_GISCUS_CATEGORY_ID?.trim()||"DIC_kwDOUOOwic4DFG11";

export default function Comments({discussionKey}:{discussionKey:string}){
 const container=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  if(!categoryId||!container.current)return;
  const target=container.current;
  target.replaceChildren();
  const script=document.createElement("script");
  script.src="https://giscus.app/client.js";
  script.async=true;
  script.crossOrigin="anonymous";
  script.dataset.repo=repo;
  script.dataset.repoId=repoId;
  script.dataset.category="Announcements";
  script.dataset.categoryId=categoryId;
  script.dataset.mapping="specific";
  script.dataset.term=`自学坊页面：${discussionKey}`;
  script.dataset.strict="1";
  script.dataset.reactionsEnabled="1";
  script.dataset.emitMetadata="0";
  script.dataset.inputPosition="top";
  script.dataset.theme="noborder_light";
  script.dataset.lang="zh-CN";
  script.dataset.loading="lazy";
  target.append(script);
  return()=>target.replaceChildren();
 },[discussionKey]);
 return <section className="comments-section" aria-labelledby="comments-title">
  <div className="comments-heading"><small>COMMUNITY</small><h2 id="comments-title">留言与讨论</h2><p>分享学习心得、补充资源或提出问题。留言由 GitHub Discussions 保存，登录 GitHub 后即可留言和回复。</p></div>
  {categoryId?<div className="giscus" ref={container}/>:<div className="comments-pending"><b>留言区等待连接 GitHub Discussions</b><p>站点结构已经就绪；仓库完成 Discussions 与 giscus 配置后，留言框会自动出现在这里。</p></div>}
 </section>;
}
