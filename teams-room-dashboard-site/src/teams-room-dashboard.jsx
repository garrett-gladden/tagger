Here are the contents for the file: /teams-room-dashboard-site/teams-room-dashboard-site/src/teams-room-dashboard.jsx

import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingDown, TrendingUp, MapPin, Monitor } from 'lucide-react';

// Kollective color palette
const colors = {
  primary: '#00A3E0',
  secondary: '#0066A1',
  success: '#00C781',
  warning: '#FFB020',
  danger: '#FF4757',
  bgCard: '#151B2D',
  text: '#E2E8F0',
  textMuted: '#94A3B8'
};

// Sample data for demonstration
const sampleData = [
  { name: 'Manufacturer A', qualityScore: 85, poorCallPct: 5 },
  { name: 'Manufacturer B', qualityScore: 78, poorCallPct: 10 },
  { name: 'Manufacturer C', qualityScore: 90, poorCallPct: 3 },
];

// Dashboard component
const Dashboard = () => {
  return (
    <div style={{ backgroundColor: colors.bgCard, color: colors.text, padding: '20px' }}>
      <h1>Teams Room Device Performance</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sampleData}>
          <Bar dataKey="qualityScore" fill={colors.primary} />
        </BarChart>
      </ResponsiveContainer>
      <h2>Quality Score vs Poor Call Percentage</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={sampleData} dataKey="poorCallPct" nameKey="name" cx="50%" cy="50%" outerRadius={80} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;