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
  Video,
  Search,
  Bell,
  Wallet,
  Star,
  Eye,
  Users,
  LifeBuoy,
  HelpCircle,
  LogOut,
  LayoutDashboard,
  FileText,
  BellRing
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
  <h2 className={cn("text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.1]", className)}>
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarItems = [
    { category: "Portfolio", items: [
      { icon: BarChart3, label: "Performance", active: true },
      { icon: Zap, label: "Live Trades" },
      { icon: Shield, label: "Risk Management" },
      { icon: Globe, label: "Global Macro" },
    ]}
  ];

  return (
    <div className="w-full h-full bg-[#050505] overflow-hidden relative flex flex-col lg:flex-row font-body group">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden flex items-center justify-between p-4 sm:p-5 border-b border-white/5 bg-black/40 backdrop-blur-md relative z-50">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </div>
          <span className="text-white font-heading text-lg sm:text-xl tracking-tight">Dayom Alpha</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 flex items-center justify-center text-white active:scale-95 transition-transform border border-white/10"
        >
          {isSidebarOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar Backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div 
        initial={false}
        animate={{ 
          x: isSidebarOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -320 : 0),
        }}
        transition={{ type: "spring", damping: 28, stiffness: 220 }}
        className={cn(
          "w-[260px] sm:w-[280px] lg:w-[240px] xl:w-[260px] border-r border-white/5 p-6 sm:p-8 flex flex-col gap-8 sm:gap-10 bg-[#080808] lg:flex overflow-y-auto absolute lg:relative inset-y-0 left-0 z-50 lg:z-auto h-full",
          !isSidebarOpen && "pointer-events-none lg:pointer-events-auto"
        )}
      >
        <div className="flex items-center gap-3 px-2 hidden lg:flex">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <BarChart3 className="w-6 h-6 text-black" />
          </div>
          <span className="text-white font-heading text-xl tracking-tight">Dayom Alpha</span>
        </div>
        
        <div className="flex-1 space-y-8 sm:space-y-10 mt-16 lg:mt-4">
          {sidebarItems.map((cat) => (
            <div key={cat.category} className="space-y-4 sm:space-y-6">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/20 px-2 font-bold">{cat.category}</div>
              <div className="space-y-1.5 sm:space-y-2">
                {cat.items.map((item) => (
                  <div 
                    key={item.label} 
                    onClick={() => setIsSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-[13px] sm:text-[14px] transition-all cursor-pointer group/item active:scale-[0.98]",
                      item.active ? "bg-[#1a1a1a] text-white shadow-xl" : "text-white/30 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <item.icon className={cn("w-4 h-4 sm:w-5 h-5", item.active ? "text-white" : "text-white/20 group-hover/item:text-white")} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fund Status */}
        <div className="mt-auto p-4 sm:p-5 rounded-2xl sm:rounded-[2rem] bg-[#111111] border border-white/5">
          <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/20 mb-2 sm:mb-3 font-bold">Fund Status</div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#00ff9d] shadow-[0_0_10px_rgba(0,255,157,0.5)] animate-pulse" />
            <span className="text-[#00ff9d] text-sm sm:text-base font-semibold tracking-tight">Operational</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-5 sm:p-8 md:p-10 lg:p-12 flex flex-col gap-6 sm:gap-10 overflow-y-auto relative z-10 scrollbar-hide bg-[#050505]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-8">
          <div className="space-y-1 sm:space-y-2">
            <h4 className="text-2xl sm:text-4xl lg:text-5xl font-heading text-white tracking-tight leading-[1] sm:leading-[0.9] max-w-xs">Dayom Alpha Terminal</h4>
            <p className="text-white/30 text-xs sm:text-base font-body font-light tracking-wide">Financial Pair Bot Engine</p>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="bg-[#111111] border border-white/5 rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-3 sm:gap-4 shadow-inner">
              <span className="text-[9px] sm:text-[11px] font-bold text-white/30 tracking-[0.2em] uppercase">BTC/USD</span>
              <span className="text-[#00ff9d] text-sm sm:text-lg font-mono font-bold">$64,231.40</span>
            </div>
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-white/10 to-transparent p-[1px]">
              <div className="w-full h-full rounded-full bg-[#111111] flex items-center justify-center overflow-hidden border border-white/5 shadow-2xl">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#1a1a1a] shadow-inner" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Total Profit */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 space-y-4 sm:space-y-6 hover:bg-[#111111] transition-all duration-500 group/card shadow-xl">
            <div className="text-[9px] sm:text-[11px] uppercase tracking-[0.25em] text-white/20 font-bold">Total Profit</div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-4xl lg:text-5xl font-heading text-[#00ff9d] tracking-tight">+$124,502</div>
              <div className="text-[10px] sm:text-sm text-white/10 font-medium">+12.4%</div>
            </div>
          </div>

          {/* Win Rate */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 space-y-4 sm:space-y-6 hover:bg-[#111111] transition-all duration-500 group/card shadow-xl">
            <div className="text-[9px] sm:text-[11px] uppercase tracking-[0.25em] text-white/20 font-bold">Win Rate</div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-4xl lg:text-5xl font-heading text-white tracking-tight">74.2%</div>
              <div className="text-[10px] sm:text-sm text-white/10 font-medium">Last 30d</div>
            </div>
          </div>

          {/* Active Trades */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 space-y-4 sm:space-y-6 hover:bg-[#111111] transition-all duration-500 group/card shadow-xl xs:col-span-2 xl:col-span-1">
            <div className="text-[9px] sm:text-[11px] uppercase tracking-[0.25em] text-white/20 font-bold">Active Trades</div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-4xl lg:text-5xl font-heading text-[#00e5ff] tracking-tight">12</div>
              <div className="text-[10px] sm:text-sm text-white/10 font-medium">Risk: Low</div>
            </div>
          </div>
        </div>

        {/* Equity Curve */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 flex flex-col gap-6 sm:gap-8 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="text-[9px] sm:text-[11px] uppercase tracking-[0.25em] text-white/20 font-bold">Equity Curve</div>
          </div>
          <div className="h-24 sm:h-32 w-full relative group/chart">
            <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00ff9d" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#00ff9d" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#00ff9d" stopOpacity="1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <path 
                d="M0,85 C40,88 80,95 120,75 C160,55 200,85 240,70 C280,55 320,20 400,15" 
                fill="none" 
                stroke="url(#chartGradient)" 
                strokeWidth="3" 
                strokeLinecap="round"
                filter="url(#glow)"
                className="transition-all duration-1000"
              />
            </svg>
          </div>
        </div>
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
    <section className="relative min-h-screen lg:h-[1000px] w-full bg-black overflow-hidden flex flex-col items-center pt-32 md:pt-40 lg:pt-[150px]">
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
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading text-white leading-[1.1] tracking-tight mt-6"
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
      <div className="mt-auto pb-12 pt-20 w-full max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <Badge variant="liquid">Trusted by the teams behind</Badge>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {["Nile Capital", "Juba Bank", "Alpha Quant", "Equator Fund", "Sahara Trading"].map((partner) => (
              <span key={partner} className="text-2xl md:text-3xl font-heading text-white">
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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white leading-tight">Advanced Financial Pair Bot Technology</h3>
            <p className="text-white/60 font-body font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Leverage institutional-grade algorithmic trading to manage risk and maximize returns. Our 
              Financial Pair Bot provides the backend power you need to scale your investment strategies globally.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button variant="liquid-strong">Explore the Bot</Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-3xl mx-auto">
            <div className="liquid-glass rounded-3xl overflow-hidden aspect-[4/5] xs:aspect-square sm:aspect-video lg:aspect-[4/3] xl:aspect-video relative border border-white/10 shadow-2xl">
              <DashboardMockup />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-heading text-white">AI-Driven Market Analysis</h3>
            <p className="text-white/60 font-body font-light leading-relaxed">
              Our proprietary AI models process millions of data points across global financial pairs. 
              We provide institutional-grade predictive analytics that identify high-probability 
              setups before they materialize on standard charts.
            </p>
            <Button variant="liquid-strong">View Analytics</Button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative border border-white/10 shadow-2xl group/video">
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
                className="w-full h-full object-cover opacity-90 group-hover/video:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center pointer-events-none">
                <p className="text-white/90 text-sm md:text-base font-body font-light tracking-wider max-w-[80%] leading-relaxed drop-shadow-lg">
                  Empowering businesses with data, AI and modern technology solutions
                </p>
              </div>
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
            <h4 className="text-xl font-heading text-white mb-3">{card.title}</h4>
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
    },
    {
      name: "Kai Ramkel",
      role: "Marketing Lead & SEO Strategist",
      image: "https://lh3.googleusercontent.com/d/1ItTHFC_biIeYZh_RVm5Bid6XZZFKHq8a",
      bio: "Expert in digital growth, SEO optimization, and strategic market positioning."
    }
  ];

  return (
    <section id="team" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <Badge>About Us</Badge>
        <SectionHeading className="mt-4">The minds behind the tech.</SectionHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h4 className="text-2xl font-heading text-white mb-1">{member.name}</h4>
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
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading text-white">
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
                <h3 className="text-2xl font-heading text-white">Message Received!</h3>
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
