import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { courses } from '../data/coursesData'
import {
    PlayCircle, CheckCircle2, Lock,
    Menu, ChevronRight, ArrowLeft,
    MessageSquare, FileText, Settings,
    Maximize, SkipForward, Volume2
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CoursePlayer() {
    const { id } = useParams()
    const course = courses.find(c => c.id === parseInt(id))
    const [activeLesson, setActiveLesson] = useState(0)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    if (!course) return <div className="pt-32 p-12 text-center text-4xl font-black">Course not found</div>

    const modules = [
        { title: "Introduction & Setup", lessons: ["Welcome to the course", "Setting up your environment", "Core concepts overview"] },
        { title: "The Fundamentals", lessons: ["Understanding the architecture", "The first implementation", "Data structures & patterns"] },
        { title: "Advanced Techniques", lessons: ["Optimization strategies", "Real-world scaling", "Final project submission"] }
    ];

    return (
        <div className="bg-slate-900 min-h-screen pt-20 flex flex-col md:flex-row h-screen overflow-hidden">
            {/* Sidebar Navigation */}
            <motion.aside
                initial={false}
                animate={{ width: isSidebarOpen ? '380px' : '0px', opacity: isSidebarOpen ? 1 : 0 }}
                className="bg-white border-r border-slate-100 flex flex-col overflow-hidden transition-all duration-300 relative z-40"
            >
                <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h3 className="font-black text-slate-900 text-lg line-clamp-1">{course.name}</h3>
                    <button onClick={() => setIsSidebarOpen(false)} className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <ChevronRight className="rotate-180" size={24} />
                    </button>
                </div>

                <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
                    {modules.map((module, mIdx) => (
                        <div key={mIdx} className="flex flex-col gap-3">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-2">{module.title}</h4>
                            <div className="flex flex-col gap-2">
                                {module.lessons.map((lesson, lIdx) => (
                                    <button
                                        key={lIdx}
                                        onClick={() => setActiveLesson(lIdx)}
                                        className={`p-4 rounded-2xl text-left transition-all flex items-center gap-4 group ${activeLesson === lIdx
                                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-bold'
                                                : 'bg-slate-50 text-slate-600 hover:bg-white hover:shadow-md border border-slate-100'
                                            }`}
                                    >
                                        <div className={`${activeLesson === lIdx ? 'text-indigo-200' : 'text-slate-300'} shrink-0`}>
                                            <PlayCircle size={20} />
                                        </div>
                                        <span className="text-sm line-clamp-1">{lesson}</span>
                                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                            <CheckCircle2 size={16} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.aside>

            {/* Main Player Area */}
            <main className="flex-grow flex flex-col relative overflow-hidden bg-slate-950">
                <div className="flex-grow flex flex-col items-center justify-center p-4">
                    {/* Mock Video Player */}
                    <div className="w-full max-w-5xl aspect-video bg-black rounded-[3rem] shadow-3xl overflow-hidden relative group border border-white/5 ring-4 ring-white/5">
                        <img src={course.image} alt="Video Preview" className="w-full h-full object-cover opacity-40 blur-sm scale-110" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white shadow-2xl"
                            >
                                <PlayCircle size={48} fill="currentColor" />
                            </motion.button>
                            <div className="flex flex-col items-center gap-2 text-center px-4">
                                <h2 className="text-2xl md:text-3xl font-black text-white">Lesson {activeLesson + 1}: {modules[0].lessons[activeLesson]}</h2>
                                <p className="text-slate-400 font-bold">Duration: 12m 45s</p>
                            </div>
                        </div>

                        {/* Player Controls Bar */}
                        <div className="absolute bottom-8 inset-x-8 h-20 bg-white/10 backdrop-blur-2xl rounded-[2rem] border border-white/20 flex items-center justify-between px-10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                            <div className="flex items-center gap-6 text-white">
                                <button className="hover:text-indigo-400 transition-colors"><Volume2 size={24} /></button>
                                <button className="hover:text-indigo-400 transition-colors"><SkipForward size={24} /></button>
                            </div>
                            <div className="grow mx-10 h-1.5 bg-white/20 rounded-full cursor-pointer relative">
                                <div className="absolute top-0 left-0 h-full w-1/3 bg-indigo-500 rounded-full" />
                            </div>
                            <div className="flex items-center gap-6 text-white">
                                <button className="hover:text-indigo-400 transition-colors"><Settings size={24} /></button>
                                <button className="hover:text-indigo-400 transition-colors"><Maximize size={24} /></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Player Bottom Bar */}
                <div className="h-24 bg-slate-900 border-t border-white/5 flex items-center justify-between px-10">
                    <div className="flex items-center gap-6">
                        {!isSidebarOpen && (
                            <button onClick={() => setIsSidebarOpen(true)} className="p-3 bg-white/5 rounded-2xl text-white hover:bg-white/10 transition-all">
                                <Menu size={24} />
                            </button>
                        )}
                        <div className="hidden md:flex flex-col text-white">
                            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Current Progress</span>
                            <span className="font-black text-lg">12% Completed</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-8 py-3.5 bg-white/5 rounded-2xl font-black text-white hover:bg-white/10 transition-all flex items-center gap-3">
                            <MessageSquare size={18} /> Q&A
                        </button>
                        <button className="px-8 py-3.5 bg-white/5 rounded-2xl font-black text-white hover:bg-white/10 transition-all flex items-center gap-3">
                            <FileText size={18} /> Resources
                        </button>
                        <button className="px-10 py-3.5 bg-indigo-600 rounded-2xl font-black text-white hover:bg-indigo-500 shadow-xl shadow-indigo-600/20 active:scale-95 transition-all">
                            Next Lesson
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
