import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { Mail, Phone, MapPin, Building, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student Resident',
    subject: 'Pilot Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHeader
        badge="GET IN TOUCH"
        title="Contact Us"
        intro="Have questions about the research methodology, mess implementation details, or capstone presentation? Reach out to the student research team and faculty mentors."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form (Left - 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <div className="border-b border-stone-100 pb-4 mb-6">
              <Badge variant="mint">SEND A MESSAGE</Badge>
              <h2 className="text-2xl font-bold text-stone-900 mt-2">
                Project Inquiry &amp; Mess Collaboration
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                We respond within 24 hours during academic weekdays.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3 animate-in fade-in">
                <div className="w-12 h-12 bg-[#1F6F4B] text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Message Dispatched!</h3>
                <p className="text-xs sm:text-sm text-stone-700 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your message regarding "<em>{formData.subject}</em>" has been forwarded to the project coordination desk.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#1F6F4B] underline pt-2 block mx-auto"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="priya@university.edu"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Your Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
                    >
                      <option>Student Resident</option>
                      <option>Mess Catering Staff / Manager</option>
                      <option>Hostel Warden / Dean</option>
                      <option>Campus Nutritionist / Physician</option>
                      <option>Faculty / Academic Researcher</option>
                      <option>External Press / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
                    >
                      <option>Pilot Participation</option>
                      <option>Catering Operations &amp; Scoops</option>
                      <option>Algorithm &amp; Technical Details</option>
                      <option>Waste Audit Data Access</option>
                      <option>Other Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, suggestion, or question regarding campus dining portion guidance..."
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1F6F4B] hover:bg-[#28855a] text-white font-bold text-xs py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Placeholders & Directory Info (Right - 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0E1B14] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center">
                <Building className="w-5 h-5 text-[#6FCF97] mr-2" />
                Campus Contact Directory
              </h3>

              <div className="space-y-4 text-xs">
                <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                  <span className="text-[10px] font-bold text-[#6FCF97] uppercase tracking-wider block">
                    Capstone Engineering Lab
                  </span>
                  <div className="font-bold text-white mt-1">Smart Dining Systems Research Cell</div>
                  <div className="text-stone-300 mt-1 flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>Room 402, Computer Science &amp; Engineering Block, Main Campus</span>
                  </div>
                  <div className="text-stone-400 mt-1">smartmeal-project@university.edu</div>
                </div>

                <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                  <span className="text-[10px] font-bold text-[#6FCF97] uppercase tracking-wider block">
                    Hostel Dining Hall Administration
                  </span>
                  <div className="font-bold text-white mt-1">Central Mess Catering Liaison Office</div>
                  <div className="text-stone-300 mt-1 flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>Dining Complex B, Ground Floor (Counter Staff Office)</span>
                  </div>
                  <div className="text-stone-400 mt-1">mess-liaison@university.edu</div>
                </div>

                <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                  <span className="text-[10px] font-bold text-[#6FCF97] uppercase tracking-wider block">
                    Campus Health &amp; Nutrition Center
                  </span>
                  <div className="font-bold text-white mt-1">Student Preventive Wellness Clinic</div>
                  <div className="text-stone-300 mt-1 flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Explore the Research That Sparked This System"
        description="Review our field observations and survey methodology from over 600 campus diners."
        primaryLink={{ text: 'Read Field Observations', href: '/research/field-observations' }}
        secondaryLink={{ text: 'View Key Numbers & Data', href: '/research/key-numbers' }}
      />
    </div>
  );
};
