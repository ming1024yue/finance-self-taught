export type MathResource={name:string;url:string;level:string;kind:string;pre:string;description:string};
export type MathTopic={title:string;intro:string;resources:MathResource[]};
const R=(name:string,url:string,level:string,kind:string,pre:string,description:string):MathResource=>({name,url,level,kind,pre,description});

export const mathGroups=[
 ["开始之前",[["intro","本站目的"],["how","如何使用本站"],["plan","学习规划"]]],
 ["起点",[["tools","学习工具"],["foundations","数学基础"],["proofs","证明与数学语言"]]],
 ["大学核心",[["calculus","微积分"],["linear-algebra","线性代数"],["probability","概率论"],["statistics","统计学"],["differential-equations","微分方程"]]],
 ["进阶理论",[["discrete","离散数学"],["real-analysis","实分析"],["abstract-algebra","抽象代数"],["cryptography","密码学"]]],
 ["应用与实践",[["optimization","优化"],["numerical","数值计算"],["modeling","数学建模"],["projects","项目与进阶方向"],["books","书单与资源"]]]
] as const;

export const mathTopics:Record<string,MathTopic>={
 tools:{title:"学习工具",intro:"用合适的书写、计算、绘图与编程工具验证直觉，但不让工具代替推理。",resources:[]},
 foundations:{title:"数学基础",intro:"补齐算术、代数、函数、方程和三角学，为大学数学建立稳定起点。",resources:[
  R("OpenStax Prealgebra 2e","https://openstax.org/details/books/prealgebra-2e","入门","开放教材","无需前置","从数与运算开始，适合长期未接触数学或基础薄弱的学习者。"),
  R("OpenStax Algebra and Trigonometry 2e","https://openstax.org/details/books/algebra-and-trigonometry-2e","进阶","开放教材","基础算术","系统覆盖函数、方程、指数对数和三角学，并配有大量练习。"),
  R("MIT 18.01SC Single Variable Calculus — 预备内容","https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/","衔接","公开课","高中代数与三角学","用 MIT 自学型课程检验代数与函数基础是否足以进入微积分。")
 ]},
 proofs:{title:"证明与数学语言",intro:"学习集合、逻辑、量词、归纳和常见证明方法，从“会计算”走向“会论证”。",resources:[
  R("Book of Proof — Richard Hammack","https://richardhammack.github.io/BookOfProof/","入门","开放教材","基础代数","面向第一次接触证明的学习者，例子清楚且可免费下载。"),
  R("MIT 6.042J Mathematics for Computer Science","https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/","进阶","公开课","高中代数","通过逻辑、归纳、图论与计数训练严格证明和问题求解。"),
  R("MIT 18.100A Real Analysis","https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/","高级","公开课","微积分与证明基础","在分析课程中系统检验证明书写、极限语言和抽象推理能力。")
 ]},
 calculus:{title:"微积分",intro:"用极限、导数和积分描述变化与累积，并进入多变量空间。",resources:[
  R("OpenStax Calculus Volume 1","https://openstax.org/details/books/calculus-volume-1","入门","开放教材","代数、函数与三角学","免费教材，适合先建立极限、导数和积分的直觉并完成基础练习。"),
  R("MIT 18.01SC Single Variable Calculus","https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/","进阶","公开课","高中代数与三角学","为独立学习设计，包含视频、讲义、例题、习题及考试答案。"),
  R("MIT 18.02SC Multivariable Calculus","https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/","高级","公开课","单变量微积分","学习向量、偏导、多重积分和向量分析，连接物理、统计与优化。")
 ]},
 "linear-algebra":{title:"线性代数",intro:"用向量、矩阵、线性映射和特征结构理解高维问题。",resources:[
  R("Linear Algebra — Jim Hefferon","https://hefferon.net/linearalgebra/","入门","开放教材","高中代数","可免费获取的完整教材，从消元与向量空间逐步进入抽象概念。"),
  R("MIT 18.06SC Linear Algebra","https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/","进阶","公开课","高中代数","Gilbert Strang 的经典课程，强调列空间、正交、特征值与应用。"),
  R("MIT 18.700 Linear Algebra","https://ocw.mit.edu/courses/18-700-linear-algebra-fall-2013/","高级","公开课","证明基础与初等线性代数","以证明为主，深入线性映射、对偶空间、谱理论和标准形。")
 ]},
 probability:{title:"概率论",intro:"为不确定性建立数学模型，理解随机变量、分布、条件概率与极限定理。",resources:[
  R("Harvard Stat 110: Probability","https://stat110.hsites.harvard.edu/","入门","公开课","单变量微积分与基础计数","完整视频、讲义和习题，以大量例子建立概率直觉。"),
  R("MIT 18.05 Introduction to Probability and Statistics","https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/","进阶","公开课","多变量微积分","同时覆盖概率、贝叶斯推断、假设检验、回归和 R 模拟。"),
  R("MIT 18.440 Probability and Random Variables","https://ocw.mit.edu/courses/18-440-probability-and-random-variables-spring-2014/","高级","公开课","多变量微积分与证明基础","更严格地处理联合分布、条件期望、大数定律和中心极限定理。")
 ]},
 statistics:{title:"统计学",intro:"从数据出发进行描述、估计、检验与建模，并理解结论的边界。",resources:[
  R("OpenIntro Statistics","https://www.openintro.org/book/os/","入门","开放教材","基础代数","免费教材，以真实数据、可视化和练习介绍统计推断。"),
  R("MIT 18.05 Introduction to Probability and Statistics","https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/","进阶","公开课","概率论与多变量微积分","把概率基础连接到贝叶斯与频率学派推断、Bootstrap 和线性回归。"),
  R("MIT 18.650 Statistics for Applications","https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/","高级","公开课","概率论、微积分与线性代数","进入参数估计、假设检验、回归、广义线性模型和主成分分析。")
 ]},
 "differential-equations":{title:"微分方程",intro:"研究变化规律如何决定系统行为，并学习解析、定性和数值方法。",resources:[
  R("MIT 18.03SC Differential Equations","https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/","入门","公开课","单变量微积分","自学型课程，覆盖一阶方程、线性系统、傅里叶级数与拉普拉斯变换。"),
  R("MIT ES.1803 Differential Equations","https://ocw.mit.edu/courses/es-1803-differential-equations-spring-2024/","进阶","公开课","微积分与线性代数","更现代的课程材料，将建模、计算和线性代数贯穿始终。"),
  R("MIT 18.155 Differential Analysis","https://ocw.mit.edu/courses/18-155-differential-analysis-fall-2004/","高级","公开课","实分析、线性代数与常微分方程","进入分布、Sobolev 空间和偏微分方程的分析工具。")
 ]},
 discrete:{title:"离散数学",intro:"研究有限与可数结构，为计算机科学、组合优化和网络分析打基础。",resources:[
  R("MIT 6.042J Mathematics for Computer Science","https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/","入门","公开课","高中代数","覆盖证明、集合、图论、计数、递推与离散概率。"),
  R("Mathematics for Computer Science — Open Textbook","https://courses.csail.mit.edu/6.042/spring18/mcs.pdf","进阶","开放教材","证明基础","MIT 课程配套完整教材，适合系统做题和查漏补缺。"),
  R("MIT 18.200 Principles of Discrete Applied Mathematics","https://ocw.mit.edu/courses/18-200-principles-of-discrete-applied-mathematics-spring-2024/","高级","公开课","离散数学与线性代数","研究计数、生成函数、信息论、编码与离散优化中的应用方法。")
 ]},
 "real-analysis":{title:"实分析",intro:"为微积分建立严格基础，训练极限、连续、紧致与一致收敛的证明能力。",resources:[
  R("Basic Analysis — Jiří Lebl","https://www.jirka.org/ra/","入门","开放教材","微积分与证明基础","可免费阅读的分析教材，结构清晰，适合第一次系统学习严格分析。"),
  R("MIT 18.100A Real Analysis","https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/","进阶","公开课","微积分、线性代数与证明基础","包含视频和完整讲义，从实数、序列进入微分与积分理论。"),
  R("MIT 18.100B Real Analysis","https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/","高级","公开课","成熟的证明能力","更抽象地处理度量空间、紧致性与函数序列，适合理论方向。")
 ]},
 "abstract-algebra":{title:"抽象代数",intro:"通过群、环、域和同态研究结构与对称性。",resources:[
  R("Abstract Algebra: Theory and Applications","https://judsonbooks.org/abstract-algebra-theory-and-applications/","入门","开放教材","线性代数与证明基础","开放教材，用大量例子和练习引入群、环、域及应用。"),
  R("MIT Algebra I Student Notes","https://ocw.mit.edu/courses/res-18-011-algebra-i-student-notes-fall-2021/","进阶","开放讲义","证明基础与线性代数","MIT 18.701 学生讲义，系统覆盖群作用、线性群和表示的起点。"),
  R("MIT 18.703 Modern Algebra","https://ocw.mit.edu/courses/18-703-modern-algebra-spring-2013/","高级","公开课","群论、线性代数与证明能力","更深入学习群、环、模、域扩张和 Galois 理论。")
 ]},
 cryptography:{title:"密码学",intro:"用概率、数论、代数和复杂性理论定义并证明信息系统的安全性。",resources:[
  R("The Joy of Cryptography","https://joyofcryptography.com/","入门","开放教材","离散数学、概率与证明基础","面向高年级本科生的开放教材，从一次一密进入可证明安全、对称加密、公钥密码和零知识证明。"),
  R("Stanford CS255: Introduction to Cryptography","https://crypto.stanford.edu/~dabo/courses/cs255_winter25/","进阶","公开课","概率、模运算、证明与基础编程","系统学习加密、消息完整性、数字签名、认证、密钥管理和零知识协议，并提供作业与编程项目。"),
  R("MIT 18.783 Elliptic Curves","https://ocw.mit.edu/courses/18-783-elliptic-curves-fall-2025/","高级","公开课","抽象代数、数论与算法","从有限域上的椭圆曲线、群结构和计算方法进入椭圆曲线密码学所需的数学理论。")
 ]},
 optimization:{title:"优化",intro:"在约束下寻找最佳决策，连接数学、机器学习、经济学与工程。",resources:[
  R("Convex Optimization — Boyd & Vandenberghe","https://web.stanford.edu/~boyd/cvxbook/","入门","开放教材","微积分与线性代数","Stanford 官方免费教材，以几何直觉和应用建立凸优化框架。"),
  R("Stanford EE364A Convex Optimization","https://web.stanford.edu/class/ee364a/","进阶","公开课","多变量微积分与线性代数","课程资料、作业与软件练习完整，适合系统掌握建模和对偶。"),
  R("MIT 15.093J Optimization Methods","https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/","高级","公开课","线性代数、概率与算法基础","覆盖线性、非线性、离散和动态优化方法。")
 ]},
 numerical:{title:"数值计算",intro:"理解计算机如何近似求解数学问题，并分析误差、稳定性和复杂度。",resources:[
  R("Fundamentals of Numerical Computation","https://fncbook.com/","入门","开放教材","微积分、线性代数与基础编程","可在线阅读并配有 Julia、MATLAB 和 Python 版本代码。"),
  R("MIT 18.330 Introduction to Numerical Analysis","https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/","进阶","公开课","微积分、线性代数与编程","学习插值、数值积分、线性系统、ODE 与误差分析。"),
  R("MIT 18.335J Introduction to Numerical Methods","https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/","高级","公开课","数值分析与成熟编程能力","深入大型线性系统、特征问题、迭代法与高性能计算。")
 ]},
 modeling:{title:"数学建模",intro:"把现实问题转化为变量、假设、方程和可以检验的结论。",resources:[
  R("MIT 18.085 Computational Science and Engineering I","https://ocw.mit.edu/courses/18-085-computational-science-and-engineering-i-fall-2008/","入门","公开课","微积分与线性代数","从网络、平衡方程和微分方程出发连接模型与计算。"),
  R("MIT 18.086 Mathematical Methods for Engineers II","https://ocw.mit.edu/courses/18-086-mathematical-methods-for-engineers-ii-spring-2006/","进阶","公开课","线性代数、微分方程与编程","围绕有限差分、有限元和优化建立计算模型。"),
  R("The Modeling Commons","https://modelingcommons.org/","实践","项目平台","掌握一种编程语言","浏览、运行和改写公开模型，通过复现实验理解建模假设。")
 ]},
 projects:{title:"项目与进阶方向",intro:"用证明、计算和模型形成可检查的成果，并探索纯数学或跨学科方向。",resources:[
  R("MIT OpenCourseWare Mathematics","https://ocw.mit.edu/search/?d=Mathematics","入门","课程库","完成至少两门核心课程","根据兴趣查找数论、几何、拓扑、分析、代数与应用数学课程。"),
  R("Project Euler","https://projecteuler.net/","进阶","项目平台","基础编程与离散数学","用代码解决逐步加深的数学问题，训练建模、算法和验证。"),
  R("MIT PRIMES: Recommended OCW Courses","https://math.mit.edu/research/highschool/primes/YuliasDream/courses.html","高级","学习指南","证明基础和大学核心数学","MIT 数学研究项目整理的高阶课程清单，可用于选择理论方向。")
 ]},
 books:{title:"书单与资源",intro:"集中查看合法公开电子书和大学官方课程入口。",resources:[]}
};
