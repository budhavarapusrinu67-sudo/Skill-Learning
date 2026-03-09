import { Link } from 'react-router-dom'
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, Globe } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-900 pt-32 pb-12 text-slate-400">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="flex flex-col gap-10 lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 text-white">
                            <div className="bg-indigo-600 p-2 rounded-2xl">
                                <GraduationCap size={32} />
                            </div>
                            <span className="text-3xl font-black tracking-tight">SkillRise</span>
                        </Link>
                        <p className="text-lg leading-relaxed font-medium">
                            Empowering learners worldwide through high-quality, professional, and industry-standard training since 2018.
                        </p>
                        <div className="flex items-center gap-6">
                            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-2">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <h4 className="text-xl font-black text-white underline decoration-indigo-600 underline-offset-8">Explore</h4>
                        <ul className="flex flex-col gap-6 font-bold">
                            {['Browse Courses', 'Certifications', 'Skill Plans', 'Free Content', 'Workplace Solutions'].map(item => (
                                <li key={item}><Link to="/courses" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group"><span className="w-0 h-[2px] bg-indigo-500 group-hover:w-4 transition-all" /> {item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-10">
                        <h4 className="text-xl font-black text-white underline decoration-indigo-600 underline-offset-8">Company</h4>
                        <ul className="flex flex-col gap-6 font-bold">
                            {['About Us', 'Success Stories', 'Affiliate Program', 'Careers', 'Contact Us'].map(item => (
                                <li key={item}><Link to="/about" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group"><span className="w-0 h-[2px] bg-indigo-500 group-hover:w-4 transition-all" /> {item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-10">
                        <h4 className="text-xl font-black text-white underline decoration-indigo-600 underline-offset-8">Contact Info</h4>
                        <ul className="flex flex-col gap-8">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0"><MapPin size={20} className="text-indigo-400" /></div>
                                <span className="font-bold leading-relaxed">24th Street, Downtown Silicon Valley, California, USA</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0"><Phone size={20} className="text-indigo-400" /></div>
                                <span className="font-bold">+1 (555) 792-8800</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0"><Mail size={20} className="text-indigo-400" /></div>
                                <span className="font-bold">hello@skillrise.edu</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold">
                    <p>© 2024 SkillRise Academy. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-10">
                        <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Use</a>
                        <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Settings</a>
                        <div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-xl">
                            <Globe size={16} /> English (US)
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
