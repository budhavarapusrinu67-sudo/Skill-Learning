import { Link } from 'react-router-dom'
import { Star, Clock, Users, ChevronRight, PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CourseCard({ course }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col h-full group relative"
        >
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/30 flex items-center gap-2">
                        <PlayCircle size={14} /> Course Preview
                    </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg flex items-center gap-1.5 animate-in fade-in zoom-in duration-500">
                    <Star size={16} fill="#f59e0b" className="text-amber-500" />
                    <span className="font-black text-slate-900 text-sm">{course.rating}</span>
                </div>
            </div>

            <div className="p-8 flex flex-col gap-6 flex-grow">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-600">
                        <span className="bg-indigo-50 px-3 py-1 rounded-full">{course.category}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight line-clamp-2">
                        {course.name}
                    </h3>
                    <p className="text-sm font-bold text-slate-500">By {course.instructor}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 group-hover:text-slate-500 transition-colors border-y border-slate-50 py-4 my-1">
                    <div className="flex items-center gap-1.5">
                        <Clock size={16} className="text-indigo-500" /> {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5 border-l border-slate-100 pl-4">
                        <Users size={16} className="text-indigo-500" /> {course.reviews} students
                    </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pricing</span>
                        <span className="text-2xl font-black text-slate-900">${course.price}</span>
                    </div>
                    <Link
                        to={`/course/${course.id}`}
                        className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600/30 transition-all active:scale-90"
                    >
                        <ChevronRight size={20} />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
