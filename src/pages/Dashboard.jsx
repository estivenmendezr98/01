import { useState } from 'react';
import { ArrowTrendingUpIcon, UserGroupIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [stats] = useState([
    { name: 'Total Patients', stat: '71', icon: UserGroupIcon, color: 'bg-blue-500' },
    { name: 'Appointments Today', stat: '12', icon: CalendarIcon, color: 'bg-green-500' },
    { name: 'Pending Appointments', stat: '23', icon: ArrowTrendingUpIcon, color: 'bg-purple-500' },
  ]);

  return (
    <div className="py-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="card">
            <div className="flex items-center">
              <div className={`${item.color} p-3 rounded-lg`}>
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{item.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <UserGroupIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">New patient registered</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <CalendarIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Check-up appointment</p>
                  <p className="text-sm text-gray-500">Tomorrow at 10:00 AM</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}