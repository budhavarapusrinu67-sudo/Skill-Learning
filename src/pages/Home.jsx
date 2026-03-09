import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    Play, Search, GraduationCap, Users,
    Target, Award, BookOpen, ExternalLink,
    ChevronRight, Sparkles, Star, CheckCircle2,
    Zap, ShieldCheck, Heart, Globe
} from 'lucide-react'
import { courses } from '../data/coursesData'
import CourseCard from '../components/CourseCard'

export default function Home() {
    const featuredCourses = courses.slice(0, 3);

    return (
        <div className="bg-white overflow-hidden">
            {/* 🚀 Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 lg:pt-48">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-500/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-10"
                        >
                            <div className="flex flex-col gap-6">
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-indigo-50 text-indigo-700 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] self-start border border-indigo-100 flex items-center gap-3"
                                >
                                    <Sparkles size={16} /> Empowering Future Leaders
                                </motion.span>
                                <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight">
                                    Upgrade Your <span className="text-indigo-600 block">Skills</span> Shape Your Future
                                </h1>
                                <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
                                    Join 150k+ students worldwide and learn from industry experts. Master the tools and strategies that define professional success.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-6">
                                <Link to="/courses" className="btn-primary px-10 py-5 rounded-3xl text-lg font-black shadow-2xl shadow-indigo-600/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                                    Start Learning Now <ChevronRight size={24} />
                                </Link>
                                <button className="flex items-center gap-4 text-slate-900 group font-black text-lg p-2">
                                    <div className="w-16 h-16 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                        <Play fill="currentColor" size={24} className="ml-1" />
                                    </div>
                                    Watch Promo
                                </button>
                            </div>

                            <div className="flex items-center gap-12 pt-10 border-t border-slate-100 mt-4">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-black text-slate-900">12K+</span>
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Active Courses</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-black text-slate-900">150K+</span>
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Global Students</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-black text-slate-900">4.9/5</span>
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Average Rating</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-3xl shadow-slate-900/10 border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                                    alt="Students learning"
                                    className="w-full aspect-[4/5] object-cover"
                                />
                            </div>

                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-12 -right-12 z-20 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-50 hidden md:block"
                            >
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-emerald-50 text-emerald-600 p-3 rounded-2xl">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-900 text-2xl">Success!</p>
                                            <p className="text-sm font-bold text-slate-400">Course completed 2m ago</p>
                                        </div>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-full bg-emerald-500" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                                className="absolute -bottom-12 -left-12 z-20 bg-slate-900 text-white p-8 rounded-[3rem] shadow-2xl overflow-hidden hidden md:block"
                            >
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden">
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} className="w-full h-full" alt="student" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="font-bold text-sm">Join +2k students online</span>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[40px] rounded-full" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 🧩 Partners Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 mb-12">Trusted by industry leaders worldwide</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        {['Google', 'Microsoft', 'Amazon', 'Facebook', 'Netflix', 'Airbnb'].map(brand => (
                            <span key={brand} className="text-3xl md:text-4xl font-black text-slate-400 font-serif italic">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 💎 Key Features */}
            <section className="py-32">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col items-center text-center gap-16">
                        <div className="flex flex-col gap-6 max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Everything You Need To <span className="text-indigo-600">Succeed</span></h2>
                            <p className="text-slate-500 font-medium text-lg">We provide the structure, tools, and expertise. You provide the curiosity and ambition.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                            {[
                                { icon: Zap, title: "Self-Paced Learning", desc: "No rigid schedules. Learn at your own speed anywhere.", color: "bg-amber-50 text-amber-600" },
                                { icon: Award, title: "Industry Certificate", desc: "Showcase your skills with verified certifications.", color: "bg-indigo-50 text-indigo-600" },
                                { icon: Heart, title: "Expert Support", desc: "24/7 priority support from our dedicated mentor team.", color: "bg-rose-50 text-rose-600" },
                                { icon: Globe, title: "Global Community", desc: "Connect with students from over 120+ countries.", color: "bg-blue-50 text-blue-600" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center gap-8 group transition-all"
                                >
                                    <div className={`${item.color} w-20 h-20 rounded-[2rem] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                        <item.icon size={36} />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h4 className="text-2xl font-black text-slate-900 underline decoration-slate-100 underline-offset-8">{item.title}</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 📚 Featured Courses */}
            <section className="py-32 bg-slate-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20 px-2 text-white">
                        <div className="flex flex-col gap-6 max-w-2xl">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Featured Pick for 2024</span>
                            <h2 className="text-4xl md:text-6xl font-black leading-tight">Master The <span className="text-indigo-400">Most</span> In-Demand <span className="text-indigo-400">Skills</span></h2>
                        </div>
                        <Link to="/courses" className="text-lg font-black flex items-center gap-3 px-10 py-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-300">
                            Browse All Courses <ExternalLink size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {featuredCourses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 📢 CTA Section */}
            <section className="py-40">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="bg-linear-to-br from-indigo-600 to-indigo-900 rounded-[5rem] p-16 md:p-32 text-white text-center flex flex-col items-center gap-12 relative overflow-hidden shadow-3xl shadow-indigo-600/30">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/10 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />

                        <div className="relative z-10 flex flex-col gap-8 max-w-4xl">
                            <h2 className="text-5xl md:text-8xl font-black leading-tight">Ready to <span className="text-indigo-300">Transform</span> Your Entire Life?</h2>
                            <p className="text-xl md:text-2xl text-indigo-100 font-medium opacity-80 leading-relaxed">Join 150k+ students and start building a career you love. No commitment, just progress.</p>
                        </div>

                        <div className="relative z-10 flex flex-wrap justify-center items-center gap-8">
                            <Link to="/signup" className="bg-white text-indigo-700 px-16 py-6 rounded-4xl text-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Join for Free
                            </Link>
                            <Link to="/login" className="px-12 py-6 rounded-4xl text-xl font-black border-2 border-white/20 hover:bg-white/10 transition-all">
                                Log In Instead
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
