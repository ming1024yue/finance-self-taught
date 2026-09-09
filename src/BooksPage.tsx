import {Header,Side} from "./Home";
const books=[
 ["CORE Econ — The Economy 2.0","https://www.core-econ.org/ebooks/","经济学 · 入门","免费的互动式微观与宏观经济学教材，以现实问题和数据组织内容。"],
 ["OpenStax Principles of Economics 3e","https://openstax.org/details/books/principles-economics-3e","经济学 · 入门","体系完整，包含微观、宏观、例题与章节练习，可在线阅读或下载。"],
 ["OpenStax Principles of Finance","https://openstax.org/details/books/principles-finance","金融学 · 入门","覆盖货币时间价值、风险收益、证券与公司金融。"],
 ["OpenStax Financial Accounting","https://openstax.org/details/books/principles-financial-accounting","会计 · 入门","从会计等式、交易记录到三张报表，配有例题与练习。"],
 ["Causal Inference: The Mixtape","https://mixtape.scunning.com/","计量 · 进阶","以直觉、案例和代码介绍因果推断方法。"],
 ["Python Data Science Handbook","https://jakevdp.github.io/PythonDataScienceHandbook/","数据分析 · 入门","系统介绍 NumPy、Pandas、可视化与机器学习工具。"],
 ["Asset Pricing — John Cochrane","https://www.johnhcochrane.com/asset-pricing","资产定价 · 高级","以随机贴现因子统一现代资产定价理论与实证。"]
];
const portals=[
 ["复旦","复旦大学：货币经济学","https://www.icourse163.org/course/FUDAN-1206694808","结合中国与主要经济体的央行实践，系统讲解货币、经济活动与货币政策。"],
 ["MIT","MIT OpenCourseWare — Economics","https://ocw.mit.edu/search/?d=Economics","讲义、视频、习题、考试和答案非常完整。"],
 ["MIT Sloan","MIT Sloan Finance Courses","https://ocw.mit.edu/search/?d=Sloan%20School%20of%20Management&q=finance","查找公司金融、投资、会计和金融理论课程。"],
 ["Yale","Open Yale Courses — Economics","https://oyc.yale.edu/economics","提供 Financial Markets、Financial Theory 和 Game Theory。"],
 ["Harvard","Harvard Free Online Courses","https://pll.harvard.edu/catalog/free","可筛选经济、商业、统计与数据科学课程。"],
 ["Stanford","Stanford Online Free Courses","https://online.stanford.edu/free-courses","适合补充统计、编程、数据科学与政策内容。"],
 ["Princeton","Princeton Online","https://online.princeton.edu/","查找经济、金融、数学和公共政策课程。"]
];
export default function BooksPage(){return <div className="shell"><Header/><Side active="books"/><main><section className="hero"><small>SELF-TAUGHT FINANCE / 书单与资源</small><h1>书单与资源</h1><p>优先收录可免费在线阅读的电子书，以及大学官方公开课平台。先选一本主教材，再用公开课补充讲解和练习。</p></section><section><h2>公开电子书</h2><p className="section-note">以下资源均可通过官方网站免费阅读，部分支持 PDF、EPUB 或离线下载。</p><div className="library-list">{books.map(([n,url,tag,text])=><article key={n}><i className="resource-mark book"/><div><small>{tag}</small><h3><a href={url} target="_blank" rel="noreferrer">{n}</a></h3><p>{text}</p></div></article>)}</div></section><section><h2>名校公开课入口</h2><p className="section-note">中文资源仅选择学科实力突出且课程材料可公开访问的顶尖高校；也可使用 economics、finance、accounting、statistics 等关键词搜索。</p><div className="course-portals">{portals.map(([tag,n,url,text])=><article key={n}><span>{tag}</span><h3><a href={url} target="_blank" rel="noreferrer">{n}</a></h3><p>{text}</p></article>)}</div></section></main></div>}
