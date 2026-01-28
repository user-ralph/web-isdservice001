import React from 'react';
import AssetToolbar from '../../../components/features/AssetToolbar';
import PCAssetTable from '../../../components/tables/PCAssetTable';

export default function Computers() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-neutral">Personal Computers Registry</h1>
      
      {/* 1. Feature: Search & Add Button */}
      <AssetToolbar />

      {/* 2. Layout: Table Format */}
      <PCAssetTable />
    </div>
  );
}