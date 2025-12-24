"use client";

import React, { useState, useEffect, useMemo } from 'react';

export default function EmeraldExplorerPro() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countdown, setCountdown] = useState(30);
  const xandEmerald = '#10b981'; 
  const xandRed = '#ef4444';

  // 1. Data with "Error States" and "Health Metrics"
  const nodes = useMemo(() => [
    { id: 'pNode_Tokyo_Alpha', wiz: 99, storage: 88, status: 'Online', version: 'v1.18.1' },
    { id: 'pNode_Berlin_Beta', wiz: 94, storage: 45, status: 'Online', version: 'v1.18.1' },
    { id: 'pNode_London_Gamma', wiz: 12, storage: 0, status: 'Offline', version: 'v1.17.0' },
    { id: 'pNode_NY_Delta', wiz: 92, storage: 12, status: 'Online', version: 'v1.18.0' },
    { id: 'pNode_SG_Epsilon', wiz: 85, storage: 67, status: 'Warning', version: 'v1.17.5' },
  ], []);

  // 2. Real-time Filtering
  const filteredNodes = nodes.filter(n => n.id.toLowerCase().includes(searchTerm.toLowerCase()));

  // 3. Live Countdown Logic
  useEffect(() => {
    const timer = setInterval(() => setCountdown(prev => (prev > 0 ? prev - 1 : 30)), 1000);
    return () => clearInterval(timer);
  }, []);

  const cardStyle = { background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px' };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* HEADER: Functionality & Visual Feedback */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', margin: 0 }}>Xandeum <span style={{ color: xandEmerald }}>pNode Explorer</span></h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
             <span style={{ fontSize: '12px', color: '#64748b' }}>Next pRPC Sync in: <b>{countdown}s</b></span>
             <div style={{ width: '100px', height: '4px', background: '#e2e8f0', borderRadius: '2px' }}>
                <div style={{ width: `${(countdown/30)*100}%`, height: '100%', background: xandEmerald, transition: 'width 1s linear' }}></div>
             </div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
           <span style={{ padding: '6px 12px', background: '#ecfdf5', color: xandEmerald, borderRadius: '20px', fontSize: '12px', fontWeight: '800' }}>● GOSSIP CONNECTED</span>
        </div>
      </header>

      {/* INNOVATION: Visual Trends / Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'NETWORK STORAGE', val: '4.2 PB', sub: '+12% this week' },
          { label: 'ACTIVE NODES', val: '1,204', sub: '99.2% Uptime' },
          { label: 'STOINC APY', val: '12.4%', sub: 'Compounding' },
          { label: 'AVG LATENCY', val: '14ms', sub: 'Ultra-fast pRPC' }
        ].map((m, i) => (
          <div key={i} style={cardStyle}>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: '800', color: '#94a3b8' }}>{m.label}</p>
            <h2 style={{ margin: '8px 0', fontSize: '24px' }}>{m.val}</h2>
            <p style={{ margin: 0, fontSize: '11px', color: xandEmerald }}>{m.sub}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* CLARITY: Interactive Table */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800' }}>pNode Registry</h3>
            <input 
              placeholder="Search by Node ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '10px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', width: '250px', outline: 'none' }}
            />
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', color: '#94a3b8', fontSize: '11px', borderBottom: '2px solid #f1f5f9' }}>
                <th style={{ paddingBottom: '15px' }}>NODE IDENTIFIER</th>
                <th style={{ paddingBottom: '15px' }}>WIZ SCORE</th>
                <th style={{ paddingBottom: '15px' }}>STORAGE LOAD</th>
                <th style={{ paddingBottom: '15px' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {filteredNodes.map((node, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                  <td style={{ padding: '15px 0', fontWeight: '700' }}>{node.id}</td>
                  <td style={{ color: node.wiz > 90 ? xandEmerald : '#f59e0b', fontWeight: '800' }}>{node.wiz}%</td>
                  <td>
                    <div style={{ width: '80px', height: '6px', background: '#f1f5f9', borderRadius: '3px', display: 'inline-block', marginRight: '8px' }}>
                      <div style={{ width: `${node.storage}%`, height: '100%', background: xandEmerald, borderRadius: '3px' }}></div>
                    </div>
                    <span style={{ fontSize: '10px', color: '#94a3b8' }}>{node.storage}%</span>
                  </td>
                  <td>
                    <span style={{ 
                      padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: '900',
                      background: node.status === 'Online' ? '#ecfdf5' : node.status === 'Offline' ? '#fef2f2' : '#fffbeb',
                      color: node.status === 'Online' ? xandEmerald : node.status === 'Offline' ? xandRed : '#d97706'
                    }}>
                      {node.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* UX: Innovative Storage Heatmap / Trend */}
        <div style={{ ...cardStyle, background: '#1e293b', color: 'white' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px' }}>Storage Utilization</h3>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '30px' }}>Global pNode distribution across epochs.</p>
          
          {/* Simple Visual Trend Component */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '120px', marginBottom: '30px' }}>
            {[40, 60, 45, 90, 55, 70, 85].map((h, i) => (
              <div key={i} style={{ flex: 1, background: xandEmerald, height: `${h}%`, borderRadius: '4px 4px 0 0', opacity: i === 6 ? 1 : 0.4 }}></div>
            ))}
          </div>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px' }}>
             <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>Network Peak Today</p>
             <h2 style={{ margin: '5px 0', color: xandEmerald }}>+1.2 TB/hr</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
