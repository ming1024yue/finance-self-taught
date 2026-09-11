import GlobalHeader from "./GlobalHeader";

export default function PlatformHome(){
 return <div className="platform">
  <GlobalHeader/>
  <main className="platform-main">
   <section className="platform-hero">
    <small>OPEN LEARNING PATHS</small>
    <h1>为每一门学科，<br/>提供一条真正可走的自学路径。</h1>
    <p>本站希望减少优质教育资源与学习者之间的信息差。我们按照知识依赖关系，整理公开课、教材、论文、工具与实践项目，帮助零基础学习者逐步建立完整的知识体系。</p>
   </section>
   <section id="about" className="platform-about">
    <h2>愿景</h2>
    <p className="platform-vision">我们相信，科技终将抹平知识的边界，让每个人都能自由、免费地学习一切。</p>
    <div>
     <p><b>系统</b><br/>沿知识依赖建立完整框架，而非零散积累。</p>
     <p><b>公开</b><br/>善用公开课、开放教材和原始资料，自主获取知识。</p>
     <p><b>实践</b><br/>通过习题、报告、代码和项目，把理解转化为能力。</p>
    </div>
   </section>
   <section className="platform-contact">
    <small>CONTACT</small>
    <p>如果你有建议、想推荐优质资源，或希望参与共建，欢迎发送邮件至 <a href="mailto:mingyueoct24@gmail.com">mingyueoct24@gmail.com</a></p>
   </section>
  </main>
 </div>
}
