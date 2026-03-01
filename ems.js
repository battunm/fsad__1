// Data Store - Indian Election Data, Citizens, States
export const EMS = {
  states: [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman & Nicobar Islands', 'Chandigarh', 'Dadra & Nagar Haveli',
    'Daman & Diu', 'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ],

  elections: [
    { id: 1, state: 'Bihar', type: 'State Assembly', date: '2025-04-15', seats: 243, status: 'upcoming', turnout: null, voters: '7.5 Crore' },
    { id: 2, state: 'West Bengal', type: 'State Assembly', date: '2026-03-10', seats: 294, status: 'upcoming', turnout: null, voters: '7.3 Crore' },
    { id: 3, state: 'Tamil Nadu', type: 'By-Election', date: '2025-03-05', seats: 6, status: 'live', turnout: '62%', voters: '4.2 Lakh' },
    { id: 4, state: 'Maharashtra', type: 'Municipal', date: '2025-05-20', seats: 227, status: 'upcoming', turnout: null, voters: '2.1 Crore' },
    { id: 5, state: 'Uttar Pradesh', type: 'Panchayat', date: '2025-04-01', seats: 826, status: 'upcoming', turnout: null, voters: '14.5 Crore' },
    { id: 6, state: 'Delhi', type: 'State Assembly', date: '2025-02-08', seats: 70, status: 'completed', turnout: '58.4%', voters: '1.5 Crore' },
    { id: 7, state: 'Rajasthan', type: 'By-Election', date: '2025-06-12', seats: 5, status: 'upcoming', turnout: null, voters: '5.8 Lakh' },
    { id: 8, state: 'Andhra Pradesh', type: 'Municipal', date: '2025-07-18', seats: 192, status: 'upcoming', turnout: null, voters: '3.2 Crore' },
    { id: 9, state: 'Assam', type: 'Panchayat', date: '2025-03-20', seats: 412, status: 'live', turnout: '71%', voters: '2.3 Crore' },
    { id: 10, state: 'Kerala', type: 'State Assembly', date: '2026-04-01', seats: 140, status: 'upcoming', turnout: null, voters: '2.6 Crore' },
  ],

  tickerNews: [
    '🗳️ Tamil Nadu By-Elections: Polling underway in 6 constituencies — Turnout at 62% by noon',
    '📊 Assam Panchayat Elections: 71% voter turnout recorded till 2 PM | Phase 2 voting begins',
    '🔔 Bihar Assembly Elections 2025: Model Code of Conduct in effect from today',
    '✅ Delhi Assembly Elections 2025 Results: Official count certified by ECI',
    '⚠️ ECI Notice: All election observers to submit field reports by March 1, 2025',
    '🏆 Voter ID update: Aadhaar-Voter ID linking now mandatory for all registered voters',
    '📢 Upcoming: Maharashtra Municipal Elections scheduled for May 20, 2025',
  ],

  accounts: [
    { id: 'A001', name: 'Admin ECI', email: 'admin@eci.gov.in', password: 'Admin@ECI2024!', role: 'admin', status: 'verified', state: 'Delhi' },
    { id: 'A002', name: 'Rahul Sharma', email: 'rahul.sharma@gmail.com', password: 'Citizen@123!', role: 'citizen', status: 'verified', state: 'Uttar Pradesh' },
    { id: 'A003', name: 'Kavita Singh', email: 'observer1@eci.gov.in', password: 'Observer@123!', role: 'observer', status: 'verified', state: 'Bihar' },
    { id: 'A004', name: 'Dr. Anjali Gupta', email: 'analyst@eci.gov.in', password: 'Analyst@123!', role: 'analyst', status: 'verified', state: 'Delhi' },
  ],

  getCurrentUser: () => {
    try { return JSON.parse(sessionStorage.getItem('ems_user')); } catch { return null; }
  },

  setCurrentUser: (user) => {
    sessionStorage.setItem('ems_user', JSON.stringify(user));
  },

  logout: () => {
    sessionStorage.removeItem('ems_user');
  },

  dashboardFor: (role) => {
    const map = { admin: '/admin-dashboard', citizen: '/citizen-dashboard', observer: '/observer-dashboard', analyst: '/analyst-dashboard' };
    return map[role] || '/';
  },
};

export const validatePassword = (pwd) => {
  const result = { score: 0, strength: 'weak', suggestions: [] };
  if (pwd.length >= 8) result.score++;
  if (pwd.length >= 12) result.score++;
  if (/[A-Z]/.test(pwd)) result.score++;
  if (/[a-z]/.test(pwd)) result.score++;
  if (/[0-9]/.test(pwd)) result.score++;
  if (/[^A-Za-z0-9]/.test(pwd)) result.score++;

  if (result.score <= 2) result.strength = 'weak';
  else if (result.score <= 4) result.strength = 'fair';
  else result.strength = 'strong';

  if (pwd.length < 8) result.suggestions.push('At least 8 characters');
  if (!/[A-Z]/.test(pwd)) result.suggestions.push('One uppercase letter');
  if (!/[a-z]/.test(pwd)) result.suggestions.push('One lowercase letter');
  if (!/[0-9]/.test(pwd)) result.suggestions.push('One number');
  if (!/[^A-Za-z0-9]/.test(pwd)) result.suggestions.push('One special character (!@#$%)');
  return result;
};

export const generateStrongPassword = () => {
  const up = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const lo = 'abcdefghjkmnpqrstuvwxyz';
  const nu = '23456789';
  const sp = '!@#$%&*';
  const all = up + lo + nu + sp;
  let pwd = '';
  pwd += up[Math.floor(Math.random() * up.length)];
  pwd += lo[Math.floor(Math.random() * lo.length)];
  pwd += nu[Math.floor(Math.random() * nu.length)];
  pwd += sp[Math.floor(Math.random() * sp.length)];
  for (let i = 4; i < 14; i++) pwd += all[Math.floor(Math.random() * all.length)];
  return pwd.split('').sort(() => Math.random() - 0.5).join('');
};

export const calculateAge = (dob) => {
  const today = new Date();
  const birth = new Date(dob);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
};
