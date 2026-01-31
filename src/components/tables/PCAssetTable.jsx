import React, { useState, useMemo } from 'react';
import pcAssetsData from '../../data/pc_assets.json';

// Buttons & Modals
import EditButton from '../buttons/EditButton';
import ScrapButton from '../buttons/ScrapButton';
import EditAssetModal from '../modals/EditAssetModal';
import ScrapAssetModal from '../modals/ScrapAssetModal';

export default function PCAssetTable() {
  const brandColor = "#005bac";

  // --- STATE ---
  const [sortConfig, setSortConfig] = useState({ key: 'last_update', direction: 'descending' });
  const [selectedAsset, setSelectedAsset] = useState(null);

  // --- SORTING LOGIC ---
  const sortedAssets = useMemo(() => {
    let sortableItems = [...pcAssetsData];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key] || "";
        const bValue = b[sortConfig.key] || "";
        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
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
    if (sortConfig.key !== name) return <span className="text-gray-300 ml-1 opacity-30">↕</span>;
    return sortConfig.direction === 'ascending' ? <span className="text-primary ml-1">↑</span> : <span className="text-primary ml-1">↓</span>;
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'New': return <span className="badge badge-success text-white font-medium badge-sm">New</span>;
      case 'Repaired': return <span className="badge badge-warning text-white font-medium badge-sm">Repaired</span>;
      case 'Scrap': return <span className="badge badge-error text-white font-medium badge-sm">Scrap</span>;
      default: return <span className="badge badge-ghost text-xs">Unknown</span>;
    }
  };

  // --- MODAL HANDLERS ---
  const handleEditClick = (asset) => {
    setSelectedAsset(asset);
    setTimeout(() => document.getElementById('edit_asset_modal').showModal(), 0);
  };

  const handleScrapClick = (asset) => {
    setSelectedAsset(asset);
    setTimeout(() => document.getElementById('scrap_asset_modal').showModal(), 0);
  };

  const handleCloseModal = () => {
    setSelectedAsset(null);
  };

  return (
    <>
      <div className="card bg-base-100 shadow-sm h-[calc(100vh-240px)] flex flex-col border border-base-200 overflow-hidden w-full">
        
        <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
          
          <table className="table table-fixed table-pin-rows table-zebra w-full">
            <thead className="text-gray-600 select-none z-10 text-xs">
              <tr className="bg-base-100 shadow-sm border-b">
                <th onClick={() => requestSort('pc_number')} className="w-[12%] cursor-pointer hover:bg-base-200 truncate" style={{ color: brandColor }}>PC # {getSortIcon('pc_number')}</th>
                <th onClick={() => requestSort('pc_name')} className="w-[12%] cursor-pointer hover:bg-base-200 truncate">PC Name {getSortIcon('pc_name')}</th>
                <th onClick={() => requestSort('model')} className="w-[15%] cursor-pointer hover:bg-base-200 truncate">Model {getSortIcon('model')}</th>
                <th onClick={() => requestSort('user')} className="w-[18%] cursor-pointer hover:bg-base-200 truncate">User {getSortIcon('user')}</th>
                <th onClick={() => requestSort('location')} className="w-[10%] cursor-pointer hover:bg-base-200 truncate">Loc {getSortIcon('location')}</th>
                <th onClick={() => requestSort('status')} className="w-[10%] cursor-pointer hover:bg-base-200 truncate">Status {getSortIcon('status')}</th>
                <th onClick={() => requestSort('last_update')} className="w-[11%] cursor-pointer hover:bg-base-200 truncate">Updated {getSortIcon('last_update')}</th>
                <th className="w-[12%] text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {sortedAssets.map((asset) => (
                <tr key={asset.id} className="hover border-base-100">
                  <td className="font-bold truncate">{asset.pc_number}</td>
                  <td className="font-bold truncate">{asset.pc_name}</td>
                  <td className="truncate" title={asset.model}>{asset.model}</td>
                  <td>
                    <div className="flex items-center gap-2 max-w-full">
                       <div className="avatar placeholder flex-none">
                          <div className="bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-[10px]">
                            {asset.user.charAt(0)}
                          </div>
                       </div>
                       <span className="truncate" title={asset.user}>{asset.user}</span>
                    </div>
                  </td>
                  <td className="truncate">{asset.location}</td>
                  <td>{getStatusBadge(asset.status)}</td>
                  <td className="text-gray-500 font-mono truncate">{asset.last_update}</td>
                  
                  <td className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <EditButton onClick={() => handleEditClick(asset)} />
                      <ScrapButton onClick={() => handleScrapClick(asset)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <EditAssetModal asset={selectedAsset} onClose={handleCloseModal} />
      <ScrapAssetModal asset={selectedAsset} onClose={handleCloseModal} />
    </>
  );
}