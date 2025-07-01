import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const HIGH_CIRCLE_THRESHOLD = 100;

const Home = () => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Animated background with DJI-style elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
    
    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        {/* Animated logo/brand element */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-300 mb-6 tracking-tight animate-fade-in">
          National Math Circle Network
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 mx-auto mb-8 rounded-full shadow-lg"></div>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
          Connecting math circles nationwide through <span className="text-blue-400 font-semibold">innovative resources</span>, 
          <span className="text-cyan-400 font-semibold"> shared experiences</span>, and 
          <span className="text-purple-400 font-semibold"> collaborative outreach</span> opportunities.
        </p>
      </div>
      
      {/* Enhanced Stats with DJI-style cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="text-5xl font-black text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-300">50+</div>
            <div className="text-gray-300 font-medium text-lg">Active Circles</div>
            <div className="text-gray-500 text-sm mt-2">Growing daily</div>
          </div>
        </div>
        <div className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="text-5xl font-black text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors duration-300">1000+</div>
            <div className="text-gray-300 font-medium text-lg">Students Reached</div>
            <div className="text-gray-500 text-sm mt-2">And counting</div>
          </div>
        </div>
        <div className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="text-5xl font-black text-purple-400 mb-3 group-hover:text-purple-300 transition-colors duration-300">25+</div>
            <div className="text-gray-300 font-medium text-lg">States Covered</div>
            <div className="text-gray-500 text-sm mt-2">Nationwide impact</div>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="mt-16">
        <button className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:via-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
          Join the Network
        </button>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Mission</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Empowering Math Education</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We are a non-profit organization dedicated to fostering mathematical excellence through collaborative learning communities. Our network connects math circles across the nation, providing resources, mentorship, and opportunities for students to explore advanced mathematics.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Through innovative programs and shared experiences, we inspire the next generation of mathematicians, scientists, and problem solvers.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h4 className="text-xl font-bold text-white mb-4">Our Values</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              Excellence in mathematical education
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
              Collaborative learning communities
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
              Innovation in teaching methods
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              Accessibility for all students
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-400">info@nationalmathcircles.org</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">Address</div>
                <div className="text-gray-400">123 Math Lane, Numbers City, USA</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const ProblemSets = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Problem Sets</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Access our curated collection of mathematical problems designed to challenge and inspire students at all levels.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Elementary Level", count: "50+ problems", color: "blue" },
          { title: "Middle School", count: "75+ problems", color: "cyan" },
          { title: "High School", count: "100+ problems", color: "purple" },
          { title: "Advanced", count: "60+ problems", color: "green" },
          { title: "Competition", count: "40+ problems", color: "orange" },
          { title: "Research", count: "25+ problems", color: "pink" }
        ].map((set, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <div className={`w-12 h-12 bg-${set.color}-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <svg className={`w-6 h-6 text-${set.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{set.title}</h3>
            <p className="text-gray-400 mb-4">{set.count}</p>
            <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
              View Problems →
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Experiences = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experiences & Stories</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover inspiring stories from math circles across the country and share your own experiences.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Building Community", author: "Sarah Chen", excerpt: "How our math circle transformed from 5 students to 50..." },
          { title: "Competition Success", author: "Marcus Rodriguez", excerpt: "Our journey to the national mathematics competition..." },
          { title: "Innovative Teaching", author: "Dr. Emily Watson", excerpt: "Using technology to make advanced math accessible..." },
          { title: "Student Leadership", author: "Alex Thompson", excerpt: "Empowering students to lead their own math sessions..." },
          { title: "Outreach Impact", author: "Maria Garcia", excerpt: "Bringing math education to underserved communities..." },
          { title: "Research Projects", author: "David Kim", excerpt: "High school students conducting original research..." }
        ].map((story, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{story.title}</h3>
              <p className="text-gray-400 text-sm">By {story.author}</p>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">{story.excerpt}</p>
            <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Register = () => {
  const [form, setForm] = React.useState({ name: '', location: '', email: '', description: '' });
  const [status, setStatus] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch('https://your-backend-url.com/api/circles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Registration successful! Welcome to the network.');
        setForm({ name: '', location: '', email: '', description: '' });
      } else {
        const data = await res.json();
        setStatus(data.error || 'Registration failed. Please try again.');
      }
    } catch {
      setStatus('Registration failed. Please check your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Network</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300">
            Register your math circle and become part of our growing community of mathematical excellence.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Circle Name *</label>
              <input 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your math circle name"
              />
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2">City/State *</label>
              <input 
                type="text" 
                name="location" 
                value={form.location} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., San Francisco, CA"
              />
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2">Contact Email *</label>
              <input 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your-email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2">Description</label>
              <textarea 
                name="description" 
                value={form.description} 
                onChange={handleChange} 
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell us about your math circle (optional)"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Register Circle
            </button>
          </form>
          
          {status && (
            <div className={`mt-6 p-4 rounded-xl text-center font-semibold ${
              status.includes('successful') 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Outreach = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Outreach Opportunities</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover ways to make a difference in your community through mathematics education and outreach programs.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "School Partnerships", description: "Partner with local schools to provide math enrichment programs", icon: "🏫" },
          { title: "Community Workshops", description: "Host workshops for students and families in your community", icon: "👨‍👩‍👧‍👦" },
          { title: "Competition Hosting", description: "Organize local math competitions and tournaments", icon: "🏆" },
          { title: "Online Tutoring", description: "Provide virtual math tutoring to students worldwide", icon: "💻" },
          { title: "Research Mentorship", description: "Guide students through mathematical research projects", icon: "🔬" },
          { title: "Resource Sharing", description: "Share your math circle's resources with other organizations", icon: "📚" }
        ].map((opportunity, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <div className="text-4xl mb-4">{opportunity.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{opportunity.title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{opportunity.description}</p>
            <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LiveTracker = ({ count }: { count: number }) => (
  count > HIGH_CIRCLE_THRESHOLD ? (
    <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded-2xl shadow-2xl text-center font-bold animate-pulse border border-white/20 backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
        <span>Live: {count} circles connected!</span>
      </div>
    </div>
  ) : null
);

function App() {
  const [circleCount, setCircleCount] = React.useState(0);

  React.useEffect(() => {
    fetch('https://your-backend-url.com/api/circles/count')
      .then(res => res.json())
      .then(data => setCircleCount(data.count || 0))
      .catch(() => setCircleCount(0));
  }, []);

  return (
    <Router>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-xl border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-12">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                  MathCircles
                </span>
              </Link>
              <div className="hidden lg:flex items-center space-x-8">
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group">
                  About
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
                </Link>
                <Link to="/problem-sets" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group">
                  Problem Sets
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
                </Link>
                <Link to="/experiences" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group">
                  Experiences
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
                </Link>
                <Link to="/outreach" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group">
                  Outreach
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                Contact
              </Link>
              <Link to="/register" className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white px-8 py-3 rounded-2xl font-bold hover:from-blue-600 hover:via-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25">
                Join Network
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <LiveTracker count={circleCount} />
      
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/problem-sets" element={<ProblemSets />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
