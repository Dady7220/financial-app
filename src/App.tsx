import { 
  ArrowUpRight, 
  Play, 
  Zap, 
  Palette, 
  BarChart3, 
  Shield, 
  Menu, 
  X,
  Globe,
  User,
  Mail,
  Send,
  MessageSquare,
  Youtube,
  Video
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { BlurText } from "./components/BlurText";
import { HLSVideo } from "./components/HLSVideo";
import { cn } from "./lib/utils";

// --- Components ---

const Badge = ({ children, className, variant = "liquid" }: { children: React.ReactNode; className?: string; variant?: "liquid" | "liquid-strong" }) => (
  <div className={cn(
    "rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4", 
    variant === "liquid" ? "liquid-glass" : "liquid-glass-strong",
    className
  )}>
    {children}
  </div>
);

const SectionHeading = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2 className={cn("text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]", className)}>
    {children}
  </h2>
);

const Button = ({ 
  children, 
  variant = "liquid", 
  className,
  icon: Icon
}: { 
  children: React.ReactNode; 
  variant?: "liquid" | "liquid-strong" | "solid"; 
  className?: string;
  icon?: any;
}) => {
  const baseStyles = "font-body rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group";
  const variants = {
    liquid: "liquid-glass hover:bg-white/5",
    "liquid-strong": "liquid-glass-strong hover:bg-white/10",
    solid: "bg-white text-black hover:bg-white/90"
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)}>
      {children}
      {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </button>
  );
};

// --- Sections ---

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-3", className)}>
    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-2xl">
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-6 h-6"
      >
        <path 
          d="M4 4H12C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20H4V4Z" 
          stroke="black" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle cx="10" cy="12" r="2" fill="black" />
        <path 
          d="M10 10V14" 
          stroke="black" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className="font-body font-bold text-white text-xl tracking-tight">Dayom</span>
      <span className="font-body font-light text-white/50 text-[9px] uppercase tracking-[0.3em]">Technologies</span>
    </div>
  </div>
);

const DashboardMockup = () => {
  return (
    <div className="w-full h-full bg-[#050505]/90 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative flex flex-col md:flex-row font-body backdrop-blur-2xl group">
      {/* Sidebar - Hidden on mobile, visible on tablet/desktop */}
      <div className="w-48 border-r border-white/5 p-4 flex flex-col gap-6 bg-black/40 backdrop-blur-md hidden lg:flex">
        <div className="flex items-center gap-2 px-2">
          <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-black" />
          </div>
          <span className="text-white font-bold text-xs tracking-tight">Dayom Alpha</span>
        </div>
        
        <div className="space-y-1">
          <div className="text-[9px] uppercase tracking-widest text-white/20 px-2 mb-2">Portfolio</div>
          {[
            { icon: BarChart3, label: "Performance", active: true },
            { icon: Zap, label: "Live Trades" },
            { icon: Shield, label: "Risk Management" },
            { icon: Globe, label: "Global Macro" },
          ].map((item) => (
            <div key={item.label} className={cn(
              "flex items-center gap-3 px-2 py-1.5 rounded-lg text-[10px] transition-colors cursor-pointer",
              item.active ? "bg-white/10 text-white" : "text-white/40 hover:bg-white/5 hover:text-white"
            )}>
              <item.icon className="w-3 h-3" />
              {item.label}
            </div>
          ))}
        </div>

        <div className="mt-auto p-3 rounded-xl bg-white/5 border border-white/10">
          <div className="text-[9px] text-white/40 uppercase mb-1">Fund Status</div>
          <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Operational
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6 overflow-hidden relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h4 className="text-base md:text-xl font-heading italic text-white">Dayom Alpha Terminal</h4>
            <p className="text-[9px] md:text-[10px] text-white/40">Financial Pair Bot Engine</p>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="text-[9px] md:text-[10px] text-white/40">BTC/USD</span>
              <span className="text-[9px] md:text-[10px] text-emerald-400 font-mono">$64,231.40</span>
            </div>
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {[
            { label: "Total Profit", value: "+$124,502", sub: "+12.4%", color: "text-emerald-400" },
            { label: "Win Rate", value: "74.2%", sub: "Last 30d", color: "text-white" },
            { label: "Active Trades", value: "12", sub: "Risk: Low", color: "text-cyan-400" },
          ].map((stat, i) => (
            <div key={i} className={cn(
              "p-3 md:p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col gap-1",
              i === 2 && "hidden sm:flex" // Hide 3rd stat on very small mobile
            )}>
              <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-white/30">{stat.label}</span>
              <span className={cn("text-xs md:text-lg font-bold tracking-tight", stat.color)}>{stat.value}</span>
              <span className="text-[7px] md:text-[8px] text-white/20">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* Mini Chart Area */}
        <div className="h-24 md:h-32 w-full bg-white/[0.02] rounded-xl border border-white/5 p-4 relative overflow-hidden">
          <div className="absolute inset-0 flex items-end">
            <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d">
              <path 
                d="M0 35 Q 10 30, 20 32 T 40 25 T 60 28 T 80 15 T 100 10" 
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="1.5"
                className="drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col">
            <span className="text-[9px] text-white/40 uppercase">Equity Curve</span>
            <span className="text-xs font-bold text-white">Steady Alpha</span>
          </div>
        </div>

        {/* Recent Wins Table */}
        <div className="flex-1 flex flex-col gap-3 overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-medium text-white/80 uppercase tracking-widest">Recent Wins</div>
            <div className="text-[9px] text-white/40 hover:text-white cursor-pointer transition-colors">History</div>
          </div>
          
          <div className="flex-1 border border-white/5 rounded-xl bg-white/[0.01] overflow-hidden">
            <table className="w-full text-left text-[9px] md:text-[10px]">
              <thead>
                <tr className="border-b border-white/5 text-white/20 uppercase tracking-wider">
                  <th className="px-3 md:px-4 py-2 md:py-3 font-medium">Asset</th>
                  <th className="px-3 md:px-4 py-2 md:py-3 font-medium">Result</th>
                  <th className="px-3 md:px-4 py-2 md:py-3 font-medium hidden sm:table-cell">Strategy</th>
                  <th className="px-3 md:px-4 py-2 md:py-3 font-medium">Profit</th>
                </tr>
              </thead>
              <tbody className="text-white/50">
                {[
                  { asset: "XAU/USD", result: "Win", color: "text-emerald-400", strategy: "Mean Reversion", profit: "+$4,230" },
                  { asset: "TSLA", result: "Win", color: "text-emerald-400", strategy: "Momentum", profit: "+$1,850" },
                  { asset: "EUR/GBP", result: "Win", color: "text-emerald-400", strategy: "Arbitrage", profit: "+$920" },
                  { asset: "BTC/USD", result: "Win", color: "text-emerald-400", strategy: "Trend", profit: "+$12,400" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="px-3 md:px-4 py-2 md:py-3 font-bold text-white">{row.asset}</td>
                    <td className="px-3 md:px-4 py-2 md:py-3">
                      <span className={cn("px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[8px]", row.color)}>
                        {row.result}
                      </span>
                    </td>
                    <td className="px-3 md:px-4 py-2 md:py-3 hidden sm:table-cell">{row.strategy}</td>
                    <td className="px-3 md:px-4 py-2 md:py-3 font-mono text-emerald-400">{row.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Decorative Background (Hero Theme - Organic/Floral Tech) */}
      <div className="absolute inset-0 -z-10 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
        <img 
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover blur-[4px] scale-110 group-hover:scale-100 transition-transform duration-1000"
          alt="Dashboard Background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/60" />
        
        {/* Animated Glows */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-pink-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo />
        
        {/* Nav Links Pill */}
        <div className="liquid-glass rounded-full px-2 py-1.5 flex items-center gap-1">
          <div className="hidden md:flex items-center gap-1 px-4">
            {["Home", "Services", "Team", "Contact"].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-sm font-medium text-white/70 hover:text-white px-3 py-1 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <Button variant="solid" icon={ArrowUpRight}>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[1000px] w-full bg-black overflow-hidden flex flex-col items-center pt-[150px]">
      {/* Background Video */}
      <video 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        className="absolute top-[20%] w-full h-auto object-contain z-0 opacity-80"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/10 z-0" />
      <div className="absolute bottom-0 left-0 right-0 z-[1] h-[300px] bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="flex items-center gap-2">
            <span className="bg-white text-black px-1.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">New</span>
            <span>Introducing the Dayom Financial Pair Bot.</span>
          </Badge>
        </motion.div>

        <BlurText 
          text="Master the Markets with Dayom Alpha" 
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px] mt-6"
          delay={100}
        />

        <motion.p 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body font-light text-white/60 text-lg md:text-xl max-w-2xl mx-auto mt-8"
        >
          Our advanced financial pair bot leverages real-time data and predictive AI to identify 
          high-probability trading opportunities. Experience the future of algorithmic trading.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12"
        >
          <Button variant="liquid-strong" className="px-8 py-4 text-base" icon={ArrowUpRight}>Start Trading</Button>
          
          <div className="flex items-center gap-8">
            <a 
              href="https://youtube.com/@dayomalpha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-white font-body text-sm transition-colors group"
            >
              <div className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Youtube className="w-4 h-4 fill-white" />
              </div>
              YouTube Live
            </a>
            <a 
              href="https://tiktok.com/@dayomalpha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-white font-body text-sm transition-colors group"
            >
              <div className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Video className="w-4 h-4 fill-white" />
              </div>
              TikTok Live
            </a>
          </div>
        </motion.div>
      </div>

      {/* Partners Bar at Hero Bottom */}
      <div className="mt-auto pb-12 pt-16 w-full max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8">
          <Badge variant="liquid">Trusted by the teams behind</Badge>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {["Nile Capital", "Juba Bank", "Alpha Quant", "Equator Fund", "Sahara Trading"].map((partner) => (
              <span key={partner} className="text-2xl md:text-3xl font-heading italic text-white">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="relative min-h-[700px] w-full py-32 px-6 md:px-16 lg:px-24 flex items-center justify-center overflow-hidden">
      {/* Background HLS Video */}
      <HLSVideo 
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Fades */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

      <div className="relative z-10 text-center max-w-3xl">
        <Badge>Our Mission</Badge>
        <SectionHeading className="mt-4">Intelligence at the core of every trade.</SectionHeading>
        <p className="font-body font-light text-white/60 text-lg mt-6">
          Our financial pair bot doesn't just execute trades; it builds competitive advantages. 
          By integrating advanced AI with real-time market analytics, we help you capture alpha that others miss.
        </p>
        <div className="flex justify-center mt-10">
          <Button variant="liquid-strong" className="px-8" icon={ArrowUpRight}>Explore the Bot</Button>
        </div>
      </div>
    </section>
  );
};

const FeaturesChess = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-20">
        <Badge>Capabilities</Badge>
        <SectionHeading className="mt-4">Pro features. Zero complexity.</SectionHeading>
      </div>

      <div className="space-y-32">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white">Advanced Financial Pair Bot Technology</h3>
            <p className="text-white/60 font-body font-light leading-relaxed">
              Leverage institutional-grade algorithmic trading to manage risk and maximize returns. Our 
              Financial Pair Bot provides the backend power you need to scale your investment strategies globally.
            </p>
            <Button variant="liquid-strong">Explore the Bot</Button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-video relative border border-white/10 shadow-2xl">
              <DashboardMockup />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white">AI-Driven Market Analysis</h3>
            <p className="text-white/60 font-body font-light leading-relaxed">
              Step into the future of trading. We build intelligent systems that captivate users 
              and drive results through predictive analytics and state-of-the-art market rendering.
            </p>
            <Button variant="liquid-strong">See AI Demos</Button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                alt="Financial Trading and AI Analysis" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/trading/1200/800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  const cards = [
    {
      icon: BarChart3,
      title: "Algorithmic Trading",
      description: "Advanced data modeling and predictive insights for financial growth."
    },
    {
      icon: Zap,
      title: "Financial Pair Bot",
      description: "Institutional-grade infrastructure for modern investment management."
    },
    {
      icon: Palette,
      title: "AI Market Insights",
      description: "Immersive, data-driven experiences that redefine digital presence."
    },
    {
      icon: Globe,
      title: "Real-time Dashboards",
      description: "Custom-built tools to monitor your trading performance in real-time."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <Badge>Services</Badge>
        <SectionHeading className="mt-4">Solutions for the modern enterprise.</SectionHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-2xl p-8 group hover:bg-white/[0.03] transition-colors"
          >
            <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <card.icon className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-xl font-heading italic text-white mb-3">{card.title}</h4>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    {
      name: "Taban",
      role: "CEO & Co-founder",
      image: "https://lh3.googleusercontent.com/d/1SoreCXzd9LSZFSGSkuW1TJIBwOiKq1EP",
      bio: "Visionary leader driving the intersection of AI and business strategy."
    },
    {
      name: "Dady James Ngunar",
      role: "Co-founder & Founding Engineer",
      image: "https://lh3.googleusercontent.com/d/19isQS7eoshWEuwb1DI_48JncfJuP3Jmm",
      bio: "Architect of our core technology and data analytics infrastructure."
    },
    {
      name: "Majok Tut Wan",
      role: "Software Engineer & Founding Engineer",
      image: "https://lh3.googleusercontent.com/d/1QP88UIPazngrqnrnl0HykQxfPhjmFIuF",
      bio: "Expert in building scalable, high-performance web applications."
    }
  ];

  return (
    <section id="team" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <Badge>About Us</Badge>
        <SectionHeading className="mt-4">The minds behind the tech.</SectionHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((member, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-2xl p-10 group hover:bg-white/[0.03] transition-colors border border-white/5"
          >
            <div className="w-24 h-24 rounded-2xl bg-white/5 mb-8 overflow-hidden border border-white/10 flex items-center justify-center relative group-hover:border-white/20 transition-colors">
              <User className="w-10 h-10 text-white/10 absolute" />
              <img 
                key={member.image}
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 relative z-10"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <h4 className="text-2xl font-heading italic text-white mb-1">{member.name}</h4>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4">{member.role}</p>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: "$500M+", label: "Assets Analyzed" },
    { value: "50+", label: "AI Models Deployed" },
    { value: "100%", label: "Uptime Guaranteed" },
    { value: "Juba", label: "HQ Location" }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <HLSVideo 
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'saturate(0)' }}
      />
      
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-20 backdrop-blur-3xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                  {stat.value}
                </div>
                <div className="text-white/60 font-body font-light text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nyawech Gatluak",
      role: "Head of Trading at Nile Capital",
      quote: "Dayom's algorithmic trading tools transformed how we view risk. Their AI models are incredibly precise and have given us a clear edge in the market."
    },
    {
      name: "Abuk Alaak",
      role: "Founder of South Sudan Fintech Hub",
      quote: "The AI market insights Dayom provides are unlike anything else. It's not just data; it's a strategic experience that truly represents the future of finance."
    },
    {
      name: "Ngundeng Lam",
      role: "Quantitative Analyst",
      quote: "The Financial Pair Bot infrastructure is a game-changer. It allowed us to launch our strategies with institutional-grade tech in record time."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <Badge>What They Say</Badge>
        <SectionHeading className="mt-4">Don't take our word for it.</SectionHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-10 flex flex-col justify-between h-full">
            <p className="text-white/80 font-body font-light text-base italic leading-relaxed mb-8">
              "{t.quote}"
            </p>
            <div>
              <div className="text-white font-body font-medium text-sm">{t.name}</div>
              <div className="text-white/50 font-body font-light text-xs mt-1 uppercase tracking-wider">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <Badge>Get in Touch</Badge>
            <SectionHeading className="mt-4">Let's build the future together.</SectionHeading>
            <p className="text-white/60 font-body font-light text-lg mt-6 leading-relaxed">
              Have a question about our financial pair bot or want to discuss a custom AI solution? 
              Our team in Juba is ready to help you navigate the next generation of finance.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white/40 text-[10px] uppercase tracking-widest">Email Us</div>
                <div className="text-white font-body text-sm">dadybiel96@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white/40 text-[10px] uppercase tracking-widest">Location</div>
                <div className="text-white font-body text-sm">Juba, South Sudan</div>
              </div>
            </div>
          </div>
        </div>

        <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6 relative z-10"
              >
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-white/20 transition-colors"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-white/20 transition-colors"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-white/20 transition-colors resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full liquid-glass-strong rounded-xl py-4 text-white font-body font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-heading italic text-white">Message Received!</h3>
                <p className="text-white/60 font-body font-light text-sm max-w-[240px]">
                  Thanks for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors mt-8"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden mt-24">
      <HLSVideo 
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <footer className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo className="opacity-80 scale-90 origin-left" />
            <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-body">
              Based in Juba, South Sudan
            </p>
          </div>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a key={link} href="#" className="text-white/40 hover:text-white text-xs font-body uppercase tracking-widest transition-colors">
                {link}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-black min-h-screen w-full selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturesChess />
        <FeaturesGrid />
        <Team />
        <Stats />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
