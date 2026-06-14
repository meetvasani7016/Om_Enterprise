"use client";

import React, { useState, useEffect } from "react";
import {
  Lock,
  User,
  Phone,
  Clock,
  CheckCircle2,
  AlertCircle,
  LogOut,
  Search,
  RefreshCw,
  FileText,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

interface Submission {
  id: string;
  name: string;
  phone: string;
  service: string;
  businessType: string;
  message: string;
  status: "Pending" | "Contacted";
  createdAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Pending" | "Contacted">("All");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Check sessionStorage for existing authentication on mount
  useEffect(() => {
    const auth = sessionStorage.getItem("om_admin_authenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
      fetchSubmissions();
    }
  }, []);

  // Fetch submissions from secure API route
  const fetchSubmissions = async () => {
    setLoading(true);
    setFetchError("");
    try {
      const response = await fetch("/api/contact", {
        method: "GET",
        headers: {
          "x-admin-username": "admin",
          "x-admin-password": "OmSupport2026!",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSubmissions(data);
      } else {
        setFetchError("Failed to load customer submissions. Please try again.");
      }
    } catch (err) {
      setFetchError("Network error. Check your server connection.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Login submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (username === "admin" && password === "OmSupport2026!") {
      sessionStorage.setItem("om_admin_authenticated", "true");
      setIsAuthenticated(true);
      fetchSubmissions();
    } else {
      setLoginError("Invalid admin credentials. Access Denied.");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem("om_admin_authenticated");
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    setSubmissions([]);
  };

  // Toggle contacted/pending status
  const toggleStatus = async (id: string, currentStatus: "Pending" | "Contacted") => {
    if (updatingId) return; // prevent multiple updates at once
    setUpdatingId(id);

    const nextStatus = currentStatus === "Pending" ? "Contacted" : "Pending";

    try {
      const response = await fetch("/api/contact", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-username": "admin",
          "x-admin-password": "OmSupport2026!",
        },
        body: JSON.stringify({ id, status: nextStatus }),
      });

      if (response.ok) {
        // Update local state
        setSubmissions((prev) =>
          prev.map((sub) => (sub.id === id ? { ...sub, status: nextStatus } : sub))
        );
      } else {
        alert("Failed to update status on server.");
      }
    } catch (err) {
      alert("Error connecting to server to update status.");
    } finally {
      setUpdatingId(null);
    }
  };

  // Filter submissions based on search and status
  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch =
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.businessType.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "All" || sub.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const totalLeads = submissions.length;
  const pendingLeads = submissions.filter((s) => s.status === "Pending").length;
  const contactedLeads = submissions.filter((s) => s.status === "Contacted").length;

  // Format Date and Time
  const formatDateTime = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-[#030712] overflow-y-auto text-slate-100 font-sans min-h-screen">
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      {!isAuthenticated ? (
        /* Login Screen */
        <div className="min-h-screen flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md bg-[#0a1128]/80 backdrop-blur-xl border border-amber-500/20 p-8 rounded-3xl shadow-2xl relative"
          >
            {/* Top gold line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-t-3xl" />

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-4">
                <img src="/om-logo.png" alt="Om Enterprise" className="w-10 h-10 object-contain" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                OM ENTERPRISE
              </h2>
              <p className="text-amber-500/80 text-xs font-semibold uppercase tracking-wider mt-1">
                Admin Control Room
              </p>
            </div>

            {loginError && (
              <div className="bg-red-950/40 border border-red-500/30 text-red-300 p-3 rounded-xl text-sm mb-6 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-[#030712]/60 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                    placeholder="Enter admin ID"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#030712]/60 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                    placeholder="Enter security key"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/10 active:scale-98 cursor-pointer"
              >
                Sign In Securely
              </button>
            </form>

            <p className="text-center text-xs text-slate-500 mt-8">
              Authorized personnel only. Activities are monitored.
            </p>
          </motion.div>
        </div>
      ) : (
        /* Dashboard Screen */
        <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-3">
                <img src="/om-logo.png" alt="Om Enterprise Logo" className="w-8 h-8 object-contain" />
                <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  Om Enterprise <span className="text-amber-500 text-xs px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 uppercase tracking-widest font-mono">Database</span>
                </h1>
              </div>
              <p className="text-sm text-slate-400 mt-1">
                View and manage customer service queries submitted online
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <button
                onClick={fetchSubmissions}
                disabled={loading}
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 transition-colors hover:text-amber-500 text-slate-400 disabled:opacity-50 cursor-pointer"
                title="Refresh submissions list"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-amber-500" : ""}`} />
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-950/20 hover:bg-red-950/50 border border-red-500/30 hover:border-red-500/50 text-red-300 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#0a1128]/40 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Queries</p>
                <p className="text-2xl font-bold text-white mt-0.5">{totalLeads}</p>
              </div>
            </div>

            <div className="bg-[#0a1128]/40 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Pending Action</p>
                <p className="text-2xl font-bold text-amber-400 mt-0.5">{pendingLeads}</p>
              </div>
            </div>

            <div className="bg-[#0a1128]/40 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Contacted / Closed</p>
                <p className="text-2xl font-bold text-emerald-400 mt-0.5">{contactedLeads}</p>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6 bg-slate-900/30 border border-slate-800/50 p-4 rounded-2xl">
            <div className="relative w-full md:flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search by client name, mobile, service, or message content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#030712]/50 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none transition-all text-white"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto shrink-0 justify-end">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mr-2 hidden sm:inline">
                Status:
              </span>
              <button
                onClick={() => setStatusFilter("All")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                  statusFilter === "All"
                    ? "bg-amber-500 border-amber-500 text-slate-950"
                    : "bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-400"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter("Pending")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                  statusFilter === "Pending"
                    ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                    : "bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-400"
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setStatusFilter("Contacted")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                  statusFilter === "Contacted"
                    ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                    : "bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-400"
                }`}
              >
                Contacted
              </button>
            </div>
          </div>

          {/* Error Message */}
          {fetchError && (
            <div className="bg-red-950/20 border border-red-500/20 text-red-300 p-4 rounded-2xl mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                <span>{fetchError}</span>
              </div>
              <button
                onClick={fetchSubmissions}
                className="text-xs font-bold underline hover:text-white cursor-pointer"
              >
                Retry Fetch
              </button>
            </div>
          )}

          {/* Submissions Table / Cards */}
          <div className="bg-[#0a1128]/25 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl">
            {loading ? (
              <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
                <RefreshCw className="w-8 h-8 animate-spin text-amber-500" />
                <p className="text-slate-400 text-sm font-semibold">Synchronizing submissions...</p>
              </div>
            ) : filteredSubmissions.length === 0 ? (
              <div className="py-20 text-center">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mx-auto mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <p className="text-slate-400 font-bold">No submissions found</p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  {submissions.length === 0
                    ? "Database is currently empty. Incoming contact form registrations will show up here."
                    : "Adjust your search parameters or status filters to find matching entries."}
                </p>
              </div>
            ) : (
              /* Table View for larger screens, Card View for mobile */
              <>
                {/* Desktop View */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-900/65 font-mono text-xs uppercase tracking-wider text-slate-400">
                        <th className="py-4 px-6 font-bold">Date & Time</th>
                        <th className="py-4 px-6 font-bold">Client Details</th>
                        <th className="py-4 px-6 font-bold">Service Requested</th>
                        <th className="py-4 px-6 font-bold">Business Context</th>
                        <th className="py-4 px-6 font-bold">Message / Notes</th>
                        <th className="py-4 px-6 text-center font-bold">Action Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {filteredSubmissions.map((sub) => (
                        <tr
                          key={sub.id}
                          className="hover:bg-slate-900/40 transition-colors duration-150"
                        >
                          <td className="py-4 px-6 whitespace-nowrap text-xs text-slate-400 font-mono">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-amber-500/60" />
                              {formatDateTime(sub.createdAt)}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="font-bold text-white text-sm">{sub.name}</div>
                            <div className="mt-1.5 flex items-center gap-2">
                              <span className="text-xs font-mono text-slate-400">{sub.phone}</span>
                              <a
                                href={`tel:${sub.phone}`}
                                className="inline-flex items-center gap-1 bg-amber-500/10 border border-amber-500/25 text-amber-400 px-2 py-0.5 rounded-md text-[10px] font-bold hover:bg-amber-500 hover:text-slate-950 transition-colors active:scale-95"
                                title="Click to Call"
                              >
                                <Phone className="w-3 h-3" />
                                <span>Call</span>
                              </a>
                            </div>
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <span className="inline-flex px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-900 border border-amber-500/20 text-amber-300">
                              {sub.service}
                            </span>
                          </td>
                          <td className="py-4 px-6 max-w-[180px] truncate text-xs text-slate-400">
                            {sub.businessType || "N/A"}
                          </td>
                          <td className="py-4 px-6 max-w-[280px]">
                            <p className="text-xs text-slate-300 leading-relaxed break-words font-light">
                              {sub.message}
                            </p>
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap text-center">
                            <button
                              onClick={() => toggleStatus(sub.id, sub.status)}
                              disabled={updatingId === sub.id}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all active:scale-95 cursor-pointer ${
                                sub.status === "Contacted"
                                  ? "bg-emerald-950/20 border-emerald-500/40 text-emerald-400 hover:bg-emerald-950/40"
                                  : "bg-amber-950/20 border-amber-500/40 text-amber-400 hover:bg-amber-950/40"
                              }`}
                            >
                              {updatingId === sub.id ? (
                                <RefreshCw className="w-3 h-3 animate-spin text-current" />
                              ) : sub.status === "Contacted" ? (
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              ) : (
                                <Clock className="w-3.5 h-3.5" />
                              )}
                              <span>{sub.status}</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile/Tablet Card View */}
                <div className="block lg:hidden divide-y divide-slate-800/80">
                  {filteredSubmissions.map((sub) => (
                    <div key={sub.id} className="p-5 hover:bg-slate-900/10 transition-colors">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-amber-500/60" />
                          {formatDateTime(sub.createdAt)}
                        </span>

                        <button
                          onClick={() => toggleStatus(sub.id, sub.status)}
                          disabled={updatingId === sub.id}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border transition-all active:scale-95 cursor-pointer ${
                            sub.status === "Contacted"
                              ? "bg-emerald-950/20 border-emerald-500/40 text-emerald-400"
                              : "bg-amber-950/20 border-amber-500/40 text-amber-400"
                          }`}
                        >
                          {updatingId === sub.id ? (
                            <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                          ) : sub.status === "Contacted" ? (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          ) : (
                            <Clock className="w-3.5 h-3.5" />
                          )}
                          <span>{sub.status}</span>
                        </button>
                      </div>

                      <div className="font-bold text-white text-base">{sub.name}</div>

                      <div className="mt-1 flex items-center gap-3">
                        <span className="text-sm font-mono text-slate-400">{sub.phone}</span>
                        <a
                          href={`tel:${sub.phone}`}
                          className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-lg text-xs font-bold hover:bg-amber-500 hover:text-slate-950 transition-all active:scale-95 animate-pulse"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Call</span>
                        </a>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-slate-800/60 pt-3 text-xs">
                        <div>
                          <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                            Service
                          </span>
                          <span className="inline-block mt-1 text-amber-300 font-medium bg-amber-950/15 border border-amber-500/15 px-2 py-0.5 rounded">
                            {sub.service}
                          </span>
                        </div>
                        <div>
                          <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                            Business Type
                          </span>
                          <span className="block mt-1 text-slate-400">
                            {sub.businessType || "N/A"}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 bg-slate-950/40 border border-slate-800/40 p-3 rounded-xl">
                        <span className="block text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-1">
                          Message
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed break-words font-light">
                          {sub.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
