import React, { useState, useMemo } from 'react';

export default function ActiveUsersCard() {
  const brandColor = "#005bac";

  // 2. Sorting State
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  // Sorting Function
  const sortedUsers = useMemo(() => {
    // 1. Updated Mock Data ("Busy" -> "Away")
    const initialUsers = [
      { id: 1, name: "Ralph Vincent Arienza", role: "Cadet Engineer", status: "Online", location: "Building 9" },
      { id: 2, name: "Mary Grace Mariano", role: "Team Lead", status: "Away", location: "Building 2" },
      { id: 3, name: "Orveine Paul Almagro", role: "Application Support", status: "Offline", location: "Building 10" },
      { id: 4, name: "Glenly Calipayan Pernito", role: "Application Support", status: "Online", location: "Building 9" },
      { id: 5, name: "Jumar Cabatuan", role: "Application Support", status: "Online", location: "Building 2" },
      { id: 6, name: "Charlene Pradia", role: "Application Support", status: "Offline", location: "Building 10" },
      { id: 7, name: "Eric de Dios", role: "Application Support", status: "Online", location: "Building 9" },
      { id: 8, name: "Crocil Colipano", role: "Application Support", status: "Online", location: "Building 2" },
      { id: 9, name: "Carl Nariel Bayo", role: "Application Support", status: "Offline", location: "Building 10" },
      { id: 10, name: "Tholl", role: "Application Support", status: "Online", location: "Building 9" },
      { id: 11, name: "Jerick Miranda", role: "Application Support", status: "Away", location: "Building 2" },
      { id: 12, name: "Keith Hermosilla", role: "Application Support", status: "Online", location: "Building 9" },
      { id: 13, name: "Rogin Dale Burgos Lercana", role: "Application Support", status: "Online", location: "Building 9" },
      { id: 14, name: "Karemelite Rosaceña", role: "Application Support", status: "Away", location: "Building 2" },
      { id: 15, name: "Felizardo Ordeniza", role: "Application Support", status: "Offline", location: "Building 10" },
    ];
    let sortableItems = [...initialUsers];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (name) => {
    if (sortConfig.key !== name) return "↕";
    return sortConfig.direction === 'ascending' ? "↑" : "↓";
  };

  return (
    <div className="card w-full bg-base-100 shadow-sm h-full flex flex-col">
      <div className="card-body p-4 flex flex-col h-full">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="card-title text-lg" style={{ color: brandColor }}>
            Active ISD Personnel
          </h2>
          <span className="text-xs text-gray-400">{sortedUsers.length} Members</span>
        </div>
        
        {/* Scrollable Table Container */}
        <div className="overflow-x-auto overflow-y-auto max-h-80 border rounded-lg scrollbar-thin">
          <table className="table table-pin-rows w-full">
            {/* Sticky Header */}
            <thead>
              <tr className="bg-base-200 text-gray-600">
                <th 
                  className="cursor-pointer hover:bg-base-300 transition-colors"
                  onClick={() => requestSort('name')}
                >
                  Name <span className="text-xs ml-1">{getSortIcon('name')}</span>
                </th>
                <th 
                  className="cursor-pointer hover:bg-base-300 transition-colors"
                  onClick={() => requestSort('role')}
                >
                  Role <span className="text-xs ml-1">{getSortIcon('role')}</span>
                </th>
                <th 
                  className="cursor-pointer hover:bg-base-300 transition-colors"
                  onClick={() => requestSort('status')}
                >
                  Status <span className="text-xs ml-1">{getSortIcon('status')}</span>
                </th>
              </tr>
            </thead>
            
            <tbody>
              {sortedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-base-100 border-b border-base-200">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-xs">{user.name.charAt(0)}</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-sm">{user.name}</div>
                        <div className="text-xs opacity-60">{user.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-xs font-medium text-gray-600">
                    {user.role}
                  </td>
                  <td>
                    {user.status === 'Online' && <span className="badge badge-success badge-xs gap-1 text-white px-2">Online</span>}
                    {user.status === 'Offline' && <span className="badge badge-ghost badge-xs gap-1 px-2">Offline</span>}
                    
                    {/* UPDATED: "Away" Status */}
                    {user.status === 'Away' && <span className="badge badge-warning badge-xs gap-1 text-white px-2">Away</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}