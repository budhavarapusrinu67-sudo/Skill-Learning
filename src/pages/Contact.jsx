import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully.");
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-6xl mx-auto flex flex-col gap-16">
                    <div className="flex flex-col gap-6 text-center max-w-2xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                            Let's Start a <span className="text-indigo-600">Conversation</span>
                        </h1>
                        <p className="text-slate-500 font-medium text-lg">
                            Have questions about our courses or need custom training solutions? We're here to help you 24/7.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1 flex flex-col gap-8">
                            {[
                                { icon: Mail, title: "Emails Us", value: "hello@skillrise.edu", label: "General Response time: 2h" },
                                { icon: Phone, title: "Call Us", value: "+1 (555) 792-8800", label: "Available Mon-Fri 9am-6pm" },
                                { icon: MapPin, title: "Our Office", value: "Silicon Valley, California", label: "Visit us for a coffee!" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col gap-4 group hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                                >
                                    <div className="bg-indigo-50 text-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">{item.title}</h4>
                                        <p className="text-xl font-black text-slate-900">{item.value}</p>
                                        <p className="text-sm font-medium text-slate-400 mt-2">{item.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="lg:col-span-2">
                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                onSubmit={handleSubmit}
                                className="bg-white p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl flex flex-col gap-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-3">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-500 pl-2">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Ex: John Doe"
                                            className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none transition-all font-bold"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-500 pl-2">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none transition-all font-bold"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 pl-2">How can we help?</label>
                                    <textarea
                                        required
                                        rows="6"
                                        placeholder="Tell us about your project or inquiry..."
                                        className="w-full px-8 py-6 bg-slate-50 border border-slate-100 rounded-[2rem] focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none transition-all font-bold resize-none"
                                    ></textarea>
                                </div>

                                <button className="btn-primary w-full py-6 rounded-3xl text-xl font-black flex items-center justify-center gap-4 shadow-2xl shadow-indigo-600/30">
                                    Send Message <Send size={24} />
                                </button>
                            </motion.form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
