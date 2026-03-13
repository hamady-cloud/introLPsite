import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Database, 
  Map as MapIcon, 
  Activity, 
  BarChart3, 
  ArrowUpRight,
  Target,
  FileText,
  Layers,
  CheckCircle2,
  PieChart,
  Users
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const works = [
    {
      title: "都道府県×産業ダッシュボード",
      category: "地域経済・産業政策",
      subtitle: "規模・稼ぐ力・売上を一画面で整理",
      description:
        "都道府県ごとの産業構造を、純付加価値・雇用・売上から比較。重点産業の一次選定や、追加調査の論点整理に使えるダッシュボードです。",
      points: [
        "GDPシェアと雇用シェアのズレから『稼ぐ力』を把握",
        "産業別の規模・売上・構造をまとめて比較",
      ],
      tags: ["地域経済", "産業政策", "可視化"],
      href: "https://hamady-cloud.github.io/pref-gdp-dashboard/",
      cta: "ダッシュボードを見る",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "医療需給データ可視化",
      category: "医療政策・地域比較",
      subtitle: "医療資源と高齢化を年度横断で把握",
      description:
        "医師数・病院数・病床数と高齢化率を、地域比較しやすい形で可視化。医療計画や偏在の初期診断、説明のたたき台に使えるツールです。",
      points: [
        "医療供給と需要側の変化を同一画面で確認",
        "地域差の把握と初期論点の整理を支援",
      ],
      tags: ["医療政策", "地域医療", "高齢化"],
      href: "https://hamady-cloud.github.io/medicaldata/",
      cta: "可視化を見る",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "和歌山県 重点支援候エリア可視化MAP",
      category: "地域政策・支援対象の一次選定",
      subtitle: "複合課題を統合し、『どこを先に支援するか』を可視化",
      description:
        "高齢化率、人口流出、医療アクセスを統合し、市町村ごとの重点支援候補エリアを可視化。寄与内訳も表示し、なぜその地域が高スコアなのかを説明できる設計です。",
      points: [
        "高齢化・人口流出・医療アクセスの複合課題を一体把握",
        "寄与内訳により、施策優先度の説明可能性を確保",
      ],
      tags: ["和歌山", "重点支援", "地図可視化"],
      href: "https://wakayama-map-z2hmhopnqwudkvjvjqj5mr.streamlit.app/",
      cta: "マップを見る",
      icon: <MapIcon className="w-6 h-6" />
    },
    {
      title: "産業構造×事業所密度・雇用密度",
      category: "産業集積・全国比較",
      subtitle: "人口規模に引きずられない地域比較へ",
      description:
        "事業所密度と雇用密度を人口1万人あたりで比較し、市区町村の産業集積を可視化。ランキングと散布図により、県平均との差や産業構造の違いを直感的に把握できます。",
      points: [
        "実数では見えにくい『集積の厚み』を比較",
        "重点産業の仮置きやベンチマーク先の探索に活用",
      ],
      tags: ["産業集積", "雇用分析", "全国比較"],
      href: "https://industrial-density-dashboard-rqyxtcgyutiuucvypbatja.streamlit.app/",
      cta: "アプリを見る",
      icon: <PieChart className="w-6 h-6" />
    },
  ];

  const problems = [
    {
      title: "データの優先順位づけ",
      body: "行政現場では、膨大な統計があっても『どこから手を付けるか』を絞り込むのが困難です。",
      icon: <Target className="text-sky-400" />
    },
    {
      title: "説明コストの削減",
      body: "庁内説明や合意形成では、分析結果以上に『なぜその結論になったか』の根拠が求められます。",
      icon: <FileText className="text-indigo-400" />
    },
    {
      title: "多角的な課題の統合",
      body: "高齢化や産業衰退など、分断されがちな個別論点を複合的な課題として整理します。",
      icon: <Layers className="text-purple-400" />
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-sky-500/20">
              P
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Portfolio</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a href="#works" className="hover:text-sky-400 transition-colors">Works</a>
            <a href="#approach" className="hover:text-sky-400 transition-colors">Approach</a>
            <a href="#profile" className="hover:text-sky-400 transition-colors">Profile</a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-8">
                <Database className="w-3 h-3" />
                Data Visualization × Policy Support
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl mb-8 leading-[1.1]">
                公的データを、<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                  優先順位と説明
                </span><br />
                に繋げる。
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
                地域経済、医療、人口動態などのオープンデータをもとに、
                行政実務で「どこを先に見るべきか」「なぜそう判断したか」を
                可視化し、合意形成を加速させるツールを制作しています。
              </motion.p>
              <motion.div variants={fadeInUp} className="flex gap-4">
                <a href="#works" className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-2xl transition-all shadow-lg shadow-sky-500/25 flex items-center gap-2 group">
                  制作実績を見る
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-[2.5rem] blur-2xl opacity-20" />
              <div className="relative p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs text-sky-400 font-bold uppercase mb-2">Main Theme</div>
                    <div className="text-lg font-bold">地域経済 / 医療</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs text-indigo-400 font-bold uppercase mb-2">Platform</div>
                    <div className="text-lg font-bold">HTML / Streamlit</div>
                  </div>
                  <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-transparent border border-white/10">
                    <div className="text-xs text-slate-400 font-bold uppercase mb-2">Target</div>
                    <div className="text-md font-medium leading-relaxed">
                      行政の重点対象選定、庁内説明資料づくり、政策検討の論点整理
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why This Site */}
        <section className="py-24 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl mb-6">全体像を掴み、判断を速める。</h2>
              <p className="text-lg text-slate-400">
                限られたリソースで最大の効果を出すために、まずはデータで現況を俯瞰し、
                議論の土台となる「説明可能な優先順位」を構築します。
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((p, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-[2rem] border border-white/5 bg-white/5 hover:bg-white/[0.08] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                    {p.icon}
                  </div>
                  <h3 className="text-xl mb-4">{p.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <h2 className="text-4xl md:text-6xl mb-4">Works</h2>
                <p className="text-slate-400 text-lg">制作したダッシュボード・マップの実績</p>
              </div>
              <div className="h-[1px] flex-grow bg-white/10 hidden md:block mx-12 mb-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {works.map((work, i) => (
                <motion.article 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden hover:border-sky-500/30 transition-colors"
                >
                  <div className="absolute top-0 right-0 p-8 text-sky-500/20 group-hover:text-sky-500/40 transition-colors">
                    {work.icon}
                  </div>
                  <div className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-4">
                    {work.category}
                  </div>
                  <h3 className="text-2xl mb-2 group-hover:text-sky-300 transition-colors">{work.title}</h3>
                  <p className="text-sm text-slate-500 mb-6">{work.subtitle}</p>
                  
                  <p className="text-slate-400 mb-8 line-clamp-2 text-sm leading-relaxed">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {work.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-10">
                    {work.points.map(pt => (
                      <li key={pt} className="flex items-start gap-3 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={work.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 group/link"
                  >
                    {work.cta}
                    <ArrowUpRight className="w-4 h-4 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-32 bg-sky-600/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(white,transparent)]" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div>
                <h2 className="text-4xl md:text-6xl mb-8 leading-tight">可視化の設計で<br />重視していること</h2>
                <div className="space-y-6">
                  {[
                    { t: "一次選定に使える", d: "完璧な分析よりも、『どこを先に見るべきか』を短時間で絞るための設計。" },
                    { t: "説明可能性を追求", d: "総合スコアだけでなく、どの指標が効いているか、県平均とどう違うかを明示。" },
                    { t: "実務への接続", d: "e-Stat等の公開データを、政策立案や追加調査の論点づくりに直結させる。" }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-lg mb-2 text-sky-300">{item.t}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-10 rounded-[3rem] bg-slate-950 border border-white/10 shadow-2xl">
                <h3 className="text-2xl mb-10">Data Integration Workflow</h3>
                <div className="space-y-12">
                  {[
                    "公開データの収集・クレンジング",
                    "多角的な可視化（地図・散布図）による全体把握",
                    "外れ値やスコア差からの課題整理",
                    "政策提案や庁内説明資料への落とし込み"
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 items-start relative">
                      {i !== 3 && <div className="absolute left-[15px] top-10 bottom-[-30px] w-[2px] bg-gradient-to-b from-sky-500/50 to-transparent" />}
                      <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-500/50 flex items-center justify-center shrink-0 text-sky-400 font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="text-slate-300 font-medium pt-1">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile / Message */}
        <section id="profile" className="py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-[3rem] border border-white/10 bg-white/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-3xl">Design Philosophy</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                自治体実務、地域行政、病院経営の経験が私の設計の土台です。
              </p>
              <p className="text-slate-400 leading-relaxed italic border-l-2 border-sky-500 pl-6">
                「現場では見栄えよりも、限られた時間で優先順位をつけ、庁内で説明し、次の打ち手に接続できることが何より重要である。」
              </p>
            </div>
            <div className="p-10 rounded-[3rem] border border-white/10 bg-white/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-sky-500/20 text-sky-400">
                  <Activity className="w-6 h-6" />
                </div>
                <h2 className="text-3xl">Expertise</h2>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  "地域経済・産業構造分析",
                  "医療・福祉圏域の需給可視化",
                  "人口動態と地域課題の統合分析",
                  "公的データを用いた政策プロトタイプ制作"
                ].map(item => (
                  <li key={item} className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-300 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-white/10 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-xl flex items-center justify-center font-bold text-white mx-auto mb-6">
              P
            </div>
            <p className="text-slate-500 text-sm mb-4">© Portfolio / Data Visualization × Policy Support</p>
            <div className="flex justify-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span>Tokyo, Japan</span>
              <span>Open Source</span>
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        .bg-grid-white\/\\[0\\.02\\] {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-opacity='0.1'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}