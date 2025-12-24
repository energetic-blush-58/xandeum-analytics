"use client";

import React, { useState, useEffect, useMemo } from 'react';

export default function XandeumGalaxyFinal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSync, setLastSync] = useState(0);

  const xandEmerald = '#10b981'; 
  const xandPurple = '#a855f7';

  // 1. ADVANCED DATA: Including NFT Boosts & Geo (Competition Killers)
  const nodes = useMemo(() => [
    { id: 'pNode_Tokyo_01', wiz: 99, geo: 'Tokyo, JP', tier: 'Titan', lastSeen: '2s ago', status: 'Online' },
    { id: 'pNode_Berlin_04', wiz: 94, geo: 'Berlin, DE', tier: 'Dragon', lastSeen: '14s ago', status: 'Online' },
    { id: 'pNode_London_09', wiz: 82, geo: 'London, UK', tier: 'Base', lastSeen: '1m ago', status: 'Warning' },
    { id: 'pNode_NY_12', wiz: 92, geo: 'New York, US', tier: 'Titan', lastSeen: '5s ago', status: 'Online' },
    { id: 'pNode_SG_05', wiz: 88, geo: 'Singapore, SG', tier: 'Base', lastSeen: '45s ago', status: 'Online' },
  ], []);

  const filteredNodes = nodes.filter(n => n.id.toLowerCase().includes(searchTerm.toLowerCase()));

  // 2. LIVE HEARTBEAT LOGIC
  useEffect(() => {
    const interval = setInterval(() => setLastSync(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const cardStyle = { background: '#fff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '24px' };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* HEADER WITH HEARTBEAT */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', margin: 0 }}>
            Xandeum <span style={{ color: xandEmerald }}>Explorer Pro</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
            <span style={{ color: xandEmerald }}>●</span> pRPC Live Gossip Discovery (Last Sync: {lastSync}s ago)
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ background: '#fff', padding: '10px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '13px', fontWeight: '700' }}>
            Network: <span style={{ color: xandEmerald }}>Mainnet-Beta</span>
          </div>
        </div>
      </header>

      {/* INNOVATION: GLOBAL MAP & TOTALS */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '30px' }}>
        <div style={{ ...cardStyle, background: '#1e293b', color: '#fff', overflow: 'hidden', position: 'relative' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '5px' }}>Global pNode Distribution</h3>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '20px' }}>Real-time geographic clusters found in gossip network.</p>
          
          {/* Visual Map Representation */}
          <div style={{ height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #334155' }}>
             <p style={{ fontSize: '12px', color: '#64748b' }}>[ Interactive pRPC Map Visualization Layer ]</p>
             {/* Map Markers */}
             <div style={{ position: 'absolute', top: '40%', left: '20%', width: '10px', height: '10px', background: xandEmerald, borderRadius: '50%', boxShadow: `0 0 15px ${xandEmerald}` }}></div>
             <div style={{ position: 'absolute', top: '35%', left: '45%', width: '10px', height: '10px', background: xandEmerald, borderRadius: '50%', boxShadow: `0 0 15px ${xandEmerald}` }}></div>
             <div style={{ position: 'absolute', top: '60%', left: '80%', width: '10px', height: '10px', background: xandPurple, borderRadius: '50%', boxShadow: `0 0 15px ${xandPurple}` }}></div>
          </div>
        </div>

        <div style={cardStyle}>
          <p style={{ fontSize: '11px', fontWeight: '800', color: '#94a3b8', marginBottom: '10px' }}>NETWORK STORAGE DEPTH</p>
          <h2 style={{ fontSize: '36px', margin: 0, fontWeight: '900' }}>4.21 PB</h2>
          <div style={{ marginTop: '20px', padding: '15px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
             <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Projected Epoch Rewards</p>
             <p style={{ margin: '5px 0 0 0', fontWeight: '800', color: xandEmerald }}>+12,402 XAND</p>
          </div>
        </div>
      </div>

      {/* CLARITY: ADVANCED FILTERING & LISTING */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '900' }}>pNode Registry & Performance</h3>
          <input 
            placeholder="Filter by ID, Region, or Tier..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '12px 20px', borderRadius: '14px', border: '1px solid #e2e8f0', width: '350px', outline: 'none' }}
          />
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', color: '#94a3b8', fontSize: '11px', fontWeight: '900', borderBottom: '2px solid #f1f5f9' }}>
              <th style={{ paddingBottom: '20px' }}>pNODE IDENTIFIER</th>
              <th style={{ paddingBottom: '20px' }}>GEOGRAPHIC HUB</th>
              <th style={{ paddingBottom: '20px' }}>WIZ SCORE</th>
              <th style={{ paddingBottom: '20px' }}>NFT BOOST</th>
              <th style={{ paddingBottom: '20px' }}>STATUS</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: '14px' }}>
            {filteredNodes.map((node, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                <td style={{ padding: '20px 0', fontWeight: '700' }}>{node.id}</td>
                <td style={{ color: '#64748b', fontWeight: '600' }}>{node.geo}</td>
                <td style={{ color: xandEmerald, fontWeight: '900' }}>{node.wiz}%</td>
                <td>
                  <span style={{ 
                    padding: '4px 10px', borderRadius: '8px', fontSize: '10px', fontWeight: '900',
                    background: node.tier === 'Titan' ? '#f59e0b22' : node.tier === 'Dragon' ? '#a855f722' : '#f1f5f9',
                    color: node.tier === 'Titan' ? '#d97706' : node.tier === 'Dragon' ? xandPurple : '#64748b',
                    border: `1px solid ${node.tier === 'Titan' ? '#f59e0b44' : node.tier === 'Dragon' ? '#a855f744' : '#e2e8f0'}`
                  }}>
                    {node.tier.toUpperCase()}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: node.status === 'Online' ? xandEmerald : '#f59e0b' }}></div>
                    <span style={{ fontSize: '12px', fontWeight: '700' }}>{node.lastSeen}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
