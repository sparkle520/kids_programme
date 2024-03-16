const $=`# 第一章 随机事件及其概率\r
\r
## 随机事件\r
\r
1. 样本点(sample point)：随机试验中每一个可能结果\r
\r
2. 样本空间(sample space)：随机试验所有可能结果组成的集合，记为$\\Omega $\r
3. 随机事件：某些样本点的集合\r
4. 基本事件：单个样本点构成的集合\r
5. 不可能事件：不含任何样本点，记作$\\varnothing $\r
\r
## 事件间的关系、运算\r
\r
1. 吸收率：若$A\\subset B$，则$A\\cup B=B$，$AB=A$ \r
\r
2. 交换律：$A\\cup B=B\\cup A$，$AB=BA$\r
3. 结合律：$(A\\cup B)\\cup C=A\\cup (B\\cup C)$，$ABC=(AB)C=A(BC)$\r
4. 分配律：$A\\cup (BC)=(A\\cup B)(A\\cup C)$，$A(B\\cup C)=AB\\cup AC$，$A(B - C) =AB - AC$\r
5. **对偶律**：$\\overline{A\\cup B}=\\overline{A}\\cap \\overline{B}$，$\\overline{A\\cap B}=\\overline{A}\\cup \\overline{B}$\r
6. 事件的积：$A\\cap B=AB$\r
7. 事件的和：$A\\cup B=A+B$ ($A,B$互不相容)\r
8. 事件的差：$A-B=A\\overline{B}$\r
\r
## 概率和条件概率的概念\r
\r
> 概率与长度、面积、质量...是同一概念，是一种度量。概率是事件 A 出现可能性大小的数值度量，记为$P(A)$。\r
\r
### 概率的公理化定义\r
\r
1. 非负性：对于每一个事件$A$,$P(A)\\geq 0$ \r
\r
2. 规范性：对于必然事件$\\Omega$, $P(\\Omega)=1$\r
3. 可列可加性：设事件$A_{1}$,$\\cdots,A_{n} \\cdots$ 两两互不相容，即对于$i \\neq j$,$A_{i}A_{j}=\\varnothing(i,j=1,2,...)$ 则 $$P\\left(\\bigcup_{i=1}^{\\infty} A_i\\right)=\\sum_{i=1}^{\\infty} P(A_i).$$\r
\r
### 条件概率\r
\r
1. 在事件 $B$ 发生的条件下，事件 $A$ 发生的概率，记为$P(A|B)$，定义$P(A|B)=\\frac{P(AB)}{P(B)}$\r
\r
## 概率的基本性质\r
\r
1. 对于任意事件 $A$，$0≤P(A)≤1$ \r
\r
2. $P(A)=1-P(\\overline{A})$\r
3. 若$A_1,A_2,\\cdots,A_n$**两两互不相容**，则 $$P(A_1\\cup A_2 \\cup \\cdots \\cup A_n)=P(A_1)+P(A_2)+ \\cdots +P(A_n).$$\r
4. $P(\\Omega)=1$，$P(\\varnothing)=0$\r
5. $P(A-B)=P(A)-P(AB)$  \r
   $P($🌼$-$🌻$)$ $=P($🌼$)-P($🌼🌻$)$  \r
    如果 $B \\subset A$，则 $P(A-B)=P(A)-P(B)$，$P(A) \\geq P(B)$\r
6. (1) $P(A\\cup B)=P(A)+P(B)-P(AB)$  \r
   (2) $P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(AB) - P(AC) - P(BC) + P(ABC)$\r
   **加奇减偶**\r
\r
> [注]  \r
> \r
> $P(A)=0$，不能断言$A=\\varnothing$，$P(A)=1$，不能断言$A=\\Omega$\r
\r
## 概率的基本公式\r
\r
1. 乘法公式：$P(AB)=P(A)P(B|A)=P(B)P(A|B)$ \r
\r
   $P(A_1 A_2 \\cdots A_n)=P(A_1)P(A_2|A_1)P(A_3|A_1 A_2) \\cdots P(A_n | A_1 \\cdots A_{n-1}).  (P(A_1 \\cdots A_{n-1}) > 0)$\r
\r
   **当 $A_i$ 先于 $A_{i+1}$ 发生时用乘法公式**\r
\r
2. 全概率公式：如果事件$A_1,\\cdots,A_n$构成一个完备事件组，即它们两两互不相容，其和为 $\\Omega$ ；并且$P(A_i) >0,i=1,2,\\cdots,n$，则对任意事件 $B$，有$$P(B)=\\sum_{i=1}^nP(BA_i)=\\sum_{i=1}^nP(A_i)P(B|A_i).$$ \r
\r
3. 贝叶斯公式：如果事件$A_1,\\cdots,A_n$构成一个完备事件组，且$P(A_i)>0,i=1,\\cdots,n,P(B)>0$，则对正整数 $m$，有$$P(A_m|B)= \\frac{P(BA_m)}{P(B)} =\\frac{P(A_m)P(B|A_m)}{\\sum_{i=1}^nP(A_i)P(B|A_i)} (1≤ m≤ n).$$\r
   **特别地**，上式中取 $n=2$，并将$A_1$记为 $A$，此时$A_2$就是$\\overline{A}$，那么贝叶斯公式成为条件概率公式，即\r
   $$P(A|B)=\\frac{P(AB)}{P(B)}=\\frac{P(B)P(A|B)}{P(A)P(B|A)+P(\\overline{A})P(B|\\overline{A})}.$$\r
\r
> 注意：全概率公式与贝叶斯公式使用的关键是要找到导致事件 $B$ 发生的完备事件组.\r
\r
## 概率的计算\r
\r
### 古典概型\r
\r
如果实验只有 n 个基本事件，并且每一个基本事件发生的可能性相同，对于该试验的事件 A，有\r
$$P(A)=\\frac{A所包含的基本事件个数k}{基本事件的总数n}=\\frac{k}{n}.$$\r
\r
### 几何概型\r
\r
若试验的样本空间是几何区域（直线、面积或体积），其度量大小可用$S_{\\Omega}$表示，且任意点落在度量相同的子区域内是等可能的。当事件 A 为$\\Omega$的某一个子区域，其度量为$S_A$，则事件 A 发生的概率为\r
$$P(A)=\\frac{S_A}{S_{\\Omega}}.$$\r
\r
\`[例]\` 抛掷两枚骰子,在第一枚骰子出现的点数能够被 $3$ 整除的条件下,求两枚骰子出现的点数之和大于 $8$ 的概率.(答案见题库题号\`M5\`)\r
\r
\`[例]\` 在一个盒子中放有 $10$ 个乒乓球,其中 $8$ 个是新球,$2$ 个是用过的球.在第一次比赛时,从该盒子中任取 $2$ 个乒乓球,比赛后仍放回盒子中.在第二次比赛时从这个盒子中任取 $3$ 个乒乓球,则第二次取出的都是新球的概率为$\\underline{~}\\underline{~}\\underline{~}.$(答案见题库题号\`M4\`)\r
\r
## 事件的独立性\r
\r
### 定义\r
\r
若事件 A 和 B **相互独立**,则有\r
$$P(AB)=P(A)P(B).$$\r
\r
> 容易知道，若$P(A)>0$,$P(B)>0$，则$A,B$ **相互独立** 与$A,B$ **互不相容** 不能同时成立。\r
\r
称三个事件$A,B,C$ **相互独立**,如果它们满足四个等式：\r
\r
1. $P(AB)=P(A)P(B)$ \r
\r
2. $P(AC)=P(A)P(C)$\r
3. $P(BC)=P(B)P(C)$\r
4. $P(ABC)=P(A)P(B)P(C)$\r
\r
   如果$A,B,C$仅满足前三个等式，则称它们**两两独立**。\r
\r
称$n$个事件$A_1,\\cdots,A_n$**相互独立**,如果它们中任意$k$个($2≤k≤n$)事件的积事件的概率都等于各事件概率的乘积。\r
\r
称$A_1,\\cdots,A_n,\\cdots$是一个**相互独立**的随机事件序列,如果它们中任意有限个事件都相互独立。\r
\r
### 性质\r
\r
(1)设$A,B$为两个事件，则\r
\r
1. $$\r
   \\begin{align}\r
   A,B 相互独立 & \\Leftrightarrow P(AB)=P(A)P(B) \\hspace{100cm}\\\\\\\\\r
   & \\Leftrightarrow P(A|B)=P(A|\\overline{B})=P(A)\\quad &(0<P(B)<1)\\\\\\\\\r
   & \\Leftrightarrow P(B|A)=P(B|\\overline{A})=P(B)\\quad &(0<P(A)<1)\\\\\\\\\r
   & \\Leftrightarrow P(B|A) + P(\\overline{B}|\\overline{A})=1\\quad &(0<P(A)<1)\\\\\\\\\r
   \\end{align}\r
   $$\r
2. $\\Omega$与$\\varnothing$都与任意事件独立 \r
\r
3. $A$ 与 $B$ 独立 $\\Leftrightarrow A $ 与 $\\overline{B}$ 独立 $\\Leftrightarrow \\overline{A}$ 与 $B$ 独立 $\\Leftrightarrow \\overline{A}$ 与 $\\overline{B}$ 独立\r
\r
(2)若事件$A_1,A_2,\\cdots,A_n$**相互独立**，则\r
\r
1. 其中任意$m(2≤m≤n)$个事件**相互独立** \r
\r
2. 其中任意一个事件与其余任意$m(2≤m≤n)$个事件运算(和、差与交)也独立\r
3. 将任意$m(2≤m≤n)$个事件分别换成其对立事件后所得$n$个事件也独立\r
\r
## 独立重复试验与伯努利公式\r
\r
#### 独立重复试验\r
\r
如果在两个或多个试验中与各试验相联系的事件之间相互独立,且同一事件在各个试验中出现的概率相同,则称这些试验是**独立重复试验**。\r
\r
#### 伯努利试验\r
\r
在**独立重复试验**中,每次试验中只有两种可能的结果,即“成功”和“失败”,并且“成功”与“失败”是相互独立的,则称这种试验为**伯努利试验**。当将一个伯努利试验重复地进行$n$次,则称这$n$次重复试验为**n 重伯努利试验**。\r
\r
### 伯努利公式(二项概率公式)\r
\r
设在每次试验中，$P(A)=p (0<p<1)$，则在$n$重伯努利试验中事件$A$发生$k$次的概率$p(A_k)$为\r
\r
$$\r
P(A_k)=\\binom{n}{k}p^k(1-p)^{n-k} \\quad(k=0,1,\\cdots,n).\r
$$\r
\r
如果用$X$表示$n$重伯努利概型中事件$A$发生的次数，则$X$服从**二项分布**$B(n,p)$。\r
\r
> 伯努利概型的特征是：只论次数，不管顺序。\r
`;export{$ as default};
