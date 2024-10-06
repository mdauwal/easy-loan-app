import React from 'react';
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar /> {/* Integrated Navbar component */}

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-1/5 bg-white p-6 shadow-md">
          <div className="mb-8">
            {/* Company Logo */}
            <h1 className="text-2xl font-bold text-teal-600">Adroit</h1>
          </div>
          {/* Sidebar Links */}
          <nav className="space-y-4">
            <SidebarLink text="Dashboard" />
            <SidebarLink text="Loan Application" />
            <SidebarLink text="Loan Underwriting" />
            <SidebarLink text="Collection" />
            <SidebarLink text="Staff" />
            <SidebarLink text="CRM" />
            <SidebarLink text="Administration" />
            <SidebarLink text="Debt Management" />
            <SidebarLink text="Bridge Loan" />
            <SidebarLink text="Customer Centric" />
            <SidebarLink text="General Setup" />
            <SidebarLink text="Report" />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-3/5 p-8 bg-gray-50 ml-4">
          {/* Top Greeting Banner */}
          <div className="bg-teal-500 text-white p-6 rounded-lg mb-6">
            <h2 className="text-3xl font-bold">Welcome back Kenny!</h2>
            <p>Your last login was 12:00pm 09 Jul, 2023</p>
          </div>

          {/* Applications Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Applications</h3>
              <a href="#" className="text-teal-500">See More</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <AppCard title="Recovery" date="01/08/2023" status="Active" />
              <AppCard title="Single Sign-on" date="04/08/2023" status="Active" />
            </div>
          </section>
        </main>

      </div>
    </div>
  );
};

// Sidebar Link Component
const SidebarLink = ({ text }) => (
  <a href="#" className="block text-gray-700 hover:text-teal-600 font-medium">{text}</a>
);

// Application Card Component
const AppCard = ({ title, date, status }) => (
  <div className="bg-teal-100 p-4 rounded-lg">
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-sm text-gray-600">{date}</p>
    <span className="text-teal-600 font-bold">{status}</span>
  </div>
);

export default Dashboard;
