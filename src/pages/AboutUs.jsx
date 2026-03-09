import { motion } from 'framer-motion'
import { Award, Target, Users, Sparkles, GraduationCap } from 'lucide-react'

export default function AboutUs() {
    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto flex flex-col gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-6 text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
                            We Are <span className="text-indigo-600">Revolutionizing</span> The Way You Learn.
                        </h1>
                        <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                            SkillRise was born from a simple idea: Knowledge should be accessible, professional, and practical.
                            We've built a platform that bridges the gap between traditional education and industry requirements.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-slate-200/50 flex flex-col gap-8 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[40px] rounded-full" />
                            <div className="bg-indigo-50 text-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center">
                                <Target size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900">Our Mission</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                To empower every professional globally with high-impact skills that drive innovation and personal growth in their respective industries.
                            </p>
                        </div>
                        <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl flex flex-col gap-8 relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 blur-[40px] rounded-full" />
                            <div className="bg-white/10 text-indigo-400 w-16 h-16 rounded-2xl flex items-center justify-center">
                                <Sparkles size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-white">Our Vision</h3>
                            <p className="text-slate-400 font-medium leading-relaxed">
                                A world where anyone, anywhere has the opportunity to master complex skills and transition into their dream career effortlessly.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col gap-12 text-center items-center">
                        <GraduationCap size={64} className="text-indigo-600" />
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h4 className="text-3xl font-black text-slate-900">The Power of Community</h4>
                            <p className="text-slate-500 font-medium text-lg leading-relaxed">
                                Join 150,000+ students and 500+ expert instructors from every corner of the globe.
                                Collaboration and knowledge-sharing are at the heart of everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
