"use client";

import React, { useState, useEffect, useMemo } from 'react';

export default function XandeumGalaxyFinal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countdown, setCountdown] = useState(30);

  const xandEmerald = '#10b981'; 
  const xandPurple = '#a855f7';
  const xandGold = '#f59e0b';

  // 1. DATA: Added exact Multipliers and "Deep South" Era Status
  const nodes = useMemo(() => [
    { id: 'pNode_Tokyo_01', wiz: 99, version: '0.8.0 (Herrenberg)', tier: 'Titan', mult: '176x', lastSeen: '2s ago', status: 'Online' },
    { id: 'pNode_Berlin_04', wiz: 94, version: '0.8.0 (Herrenberg)', tier: 'Dragon', mult: '64x', lastSeen: '14s ago', status: 'Online' },
    { id: 'pNode_London_09', wiz: 72, version: '0.7.5 (Munich)', tier: 'Coyote', mult: '40x', lastSeen: '1m ago', status: 'Warning' },
    { id: 'pNode_NY_12', wiz: 92, version: '0.8.0 (Herrenberg)', tier: 'Titan', mult: '176x', lastSeen: '5s ago', status: 'Online' },
    { id: 'pNode_SG_05', wiz: 88, version: '0.8.0 (Herrenberg)', tier: 'Base', mult: '16x', lastSeen: '45s ago', status: 'Online' },
  ], []);

  const filteredNodes = nodes.filter(n => n.id.toLowerCase().includes(searchTerm.toLowerCase()));

  // 2. LIVE PULSE LOGIC (Functionality Win)
  useEffect(() => {
    const timer = setInterval(() => setCountdown(prev => (prev > 0 ? prev - 1 : 30)), 1000);
    return () => clearInterval(timer);
  }, []);

  const cardStyle = { background: '#fff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '24px' };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* HEADER WITH ERA STATUS */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', margin: 0 }}>Xandeum <span style={{ color: xandEmerald }}>Explorer Pro</span></h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
             <div className="pulse-dot" style={{ width: '8px', height: '8px', background: xandEmerald, borderRadius: '50%' }}></div>
             <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Live Gossip Sync: <b>{countdown}s</b> to heartbeat</p>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, fontSize: '10px', color: '#94a3b8', fontWeight: '800' }}>CURRENT NETWORK ERA</p>
            <p style={{ margin: 0, fontSize: '16px', color: xandPurple, fontWeight: '800' }}>DEEP SOUTH (16x BOOST)</p>
        </div>
      </header>

      {/* NETWORK METRICS BAR */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'ACTIVE pNODES', val: '1,204', status: 'Healthy' },
          { label: 'STORAGE DEPTH', val: '4.21 PB', status: 'Verifiable' },
          { label: 'ADOPTION RATE', val: '92%', status: 'v0.8.0' },
          { label: 'EST. STOINC APY', val: '14.2%', status: '+ Era Boost' }
        ].map((m, i) => (
          <div key={i} style={cardStyle}>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: '800', color: '#94a3b8' }}>{m.label}</p>
            <h2 style={{ margin: '8px 0', fontSize: '24px', fontWeight: '900' }}>{m.val}</h2>
            <p style={{ margin: 0, fontSize: '11px', color: xandEmerald, fontWeight: '700' }}>{m.status}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: '30px' }}>
        
        {/* ENHANCED TABLE WITH MULTIPLIERS */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800' }}>Network Node Registry</h3>
            <input 
              placeholder="Search pNode ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '10px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', width: '250px' }}
            />
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', color: '#94a3b8', fontSize: '11px', borderBottom: '2px solid #f1f5f9' }}>
                <th style={{ paddingBottom: '15px' }}>pNODE / VERSION</th>
                <th style={{ paddingBottom: '15px' }}>NFT TIER</th>
                <th style={{ paddingBottom: '15px' }}>TOTAL MULTIPLIER</th>
                <th style={{ paddingBottom: '15px' }}>HEARTBEAT</th>
              </tr>
            </thead>
            <tbody>
              {filteredNodes.map((node, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                  <td style={{ padding: '15px 0' }}>
                    <div style={{ fontWeight: '700', fontSize: '14px' }}>{node.id}</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8' }}>{node.version}</div>
                  </td>
                  <td>
                    <span style={{ 
                      padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: '900',
                      background: node.tier === 'Titan' ? '#f59e0b22' : node.tier === 'Dragon' ? '#a855f722' : '#f1f5f9',
                      color: node.tier === 'Titan' ? xandGold : node.tier === 'Dragon' ? xandPurple : '#64748b'
                    }}>{node.tier}</span>
                  </td>
                  <td style={{ fontWeight: '900', color: xandEmerald }}>{node.mult}</td>
                  <td style={{ fontSize: '12px', fontWeight: '600' }}>{node.lastSeen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SIDEBAR: STOINC CALCULATOR (The "Winning" Feature) */}
        <div style={{ ...cardStyle, background: '#1e293b', color: '#fff' }}>
           <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '15px' }}>STOINC Multiplier</h3>
           <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.5' }}>
             During the <b>Deep South Era</b>, all nodes receive a 16x baseline boost. Titan NFTs add an additional 11x (Total 176x).
           </p>
           <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', textAlign: 'center' }}>
              <p style={{ fontSize: '10px', color: xandEmerald, fontWeight: '900', margin: 0 }}>MAX POTENTIAL BOOST</p>
              <h1 style={{ fontSize: '48px', margin: '5px 0', fontWeight: '900' }}>176x</h1>
              <p style={{ fontSize: '11px', color: '#64748b' }}>Era (16x) × Titan (11x)</p>
           </div>
        </div>
      </div>
      <style>{`.pulse-dot { animation: pulse 2s infinite; } @keyframes pulse { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }`}</style>
    </div>
  );
}
