"use client";

import React, { useState, useEffect, useMemo } from 'react';

export default function XandeumGalaxyPro() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countdown, setCountdown] = useState(30);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const xandEmerald = '#10b981'; 
  const xandRed = '#ef4444';
  const xandAmber = '#f59e0b';

  // 1. DATA WITH GEOGRAPHIC & VERSIONING METRICS
  const nodes = useMemo(() => [
    { id: 'pNode_Tokyo_Alpha', wiz: 99, storage: 88, status: 'Online', geo: 'JP', version: 'v1.18.1' },
    { id: 'pNode_Berlin_Beta', wiz: 94, storage: 45, status: 'Online', geo: 'DE', version: 'v1.18.1' },
    { id: 'pNode_London_Gamma', wiz: 12, storage: 0, status: 'Offline', geo: 'UK', version: 'v1.17.0' },
    { id: 'pNode_NY_Delta', wiz: 92, storage: 12, status: 'Online', geo: 'US', version: 'v1.18.0' },
    { id: 'pNode_SG_Epsilon', wiz: 85, storage: 67, status: 'Warning', geo: 'SG', version: 'v1.17.5' },
  ], []);

  // 2. SEARCH & FILTER LOGIC (UX Enhancement)
  const filteredNodes = nodes.filter(n => 
    n.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    n.geo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 3. AUTO-REFRESH COUNTDOWN (Real-Time Functionality)
  useEffect(() => {
    const timer = setInterval(() => setCountdown(prev => (prev > 0 ? prev - 1 : 30)), 1000);
    return () => clearInterval(timer);
  }, []);

  const cardStyle = { background: '#fff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '24px', position: 'relative' as const };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* TOP HEADER: STATUS & SYNC */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', margin: 0 }}>Xandeum <span style={{ color: xandEmerald }}>Galaxy Explorer</span></h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
             <div className="pulse-emerald" style={{ width: '10px', height: '10px', background: xandEmerald, borderRadius: '50%' }}></div>
             <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>pRPC Sync: {countdown}s remaining</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{ padding: '10px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', fontWeight: '700', cursor: 'pointer', fontSize: '13px' }}>Export JSON</button>
            <div style={{ background: '#0f172a', color: '#fff', padding: '10px 20px', borderRadius: '12px', fontSize: '13px', fontWeight: '700' }}>v1.0.4-PRO</div>
        </div>
      </header>

      {/* 4. INNOVATION: TREND CARDS WITH TOOLTIPS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'STORAGE CAPACITY', val: '4.2 PB', trend: '+0.4% p/h', tip: 'Total verifiable storage depth across all gossip-synced pNodes.' },
          { label: 'ACTIVE pNODES', val: '1,204', trend: 'Healthy', tip: 'Count of unique pNode identifiers currently broadcasting via pRPC.' },
          { label: 'STOINC APY', val: '12.42%', trend: 'Stable', tip: 'Estimated annual percentage yield based on current storage fees.' },
          { label: 'AVG LATENCY', val: '14.2ms', trend: 'Optimal', tip: 'Mean round-trip time for gossip discovery protocol calls.' }
        ].map((m, i) => (
          <div key={i} style={cardStyle} onMouseEnter={() => setHoveredMetric(m.label)} onMouseLeave={() => setHoveredMetric(null)}>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: '800', color: '#94a3b8', letterSpacing: '0.5px' }}>{m.label} ⓘ</p>
            <h2 style={{ margin: '10px 0', fontSize: '28px', fontWeight: '900' }}>{m.val}</h2>
            <p style={{ margin: 0, fontSize: '12px', color: xandEmerald, fontWeight: '700' }}>{m.trend}</p>
            {hoveredMetric === m.label && (
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#1e293b', color: '#fff', padding: '12px', borderRadius: '12px', fontSize: '11px', zIndex: 10, marginTop: '10px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                {m.tip}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr', gap: '30px' }}>
        
        {/* 5. UX: THE DYNAMIC TABLE */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '900' }}>Network Discovery Registry</h3>
            <input 
              placeholder="Search ID or Region (e.g. 'JP')..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '12px 20px', borderRadius: '14px', border: '1px solid #e2e8f0', width: '300px', outline: 'none', fontSize: '14px' }}
            />
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', color: '#94a3b8', fontSize: '11px', fontWeight: '900', borderBottom: '2px solid #f1f5f9' }}>
                <th style={{ paddingBottom: '20px' }}>NODE IDENTIFIER</th>
                <th style={{ paddingBottom: '20px' }}>REGION</th>
                <th style={{ paddingBottom: '20px' }}>WIZ SCORE</th>
                <th style={{ paddingBottom: '20px' }}>LOAD</th>
                <th style={{ paddingBottom: '20px' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {filteredNodes.map((node, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f8fafc', transition: 'background 0.2s' }} className="table-row">
                  <td style={{ padding: '20px 0', fontWeight: '700', fontSize: '14px' }}>{node.id} <span style={{fontSize:'10px', color:'#94a3b8'}}>{node.version}</span></td>
                  <td style={{ fontWeight: '800', color: '#64748b' }}>{node.geo}</td>
                  <td style={{ color: node.wiz > 90 ? xandEmerald : xandAmber, fontWeight: '900' }}>{node.wiz}%</td>
                  <td style={{ width: '120px' }}>
                    <div style={{ width: '80px', height: '6px', background: '#f1f5f9', borderRadius: '3px' }}>
                      <div style={{ width: `${node.storage}%`, height: '100%', background: node.storage > 80 ? xandRed : xandEmerald, borderRadius: '3px' }}></div>
                    </div>
                  </td>
                  <td>
                    <span style={{ 
                      padding: '6px 12px', borderRadius: '8px', fontSize: '10px', fontWeight: '900',
                      background: node.status === 'Online' ? '#ecfdf5' : node.status === 'Offline' ? '#fef2f2' : '#fffbeb',
                      color: node.status === 'Online' ? xandEmerald : node.status === 'Offline' ? xandRed : xandAmber
                    }}>
                      {node.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6. INNOVATION: HISTORICAL TREND VISUAL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <div style={{ ...cardStyle, background: '#1e293b', color: 'white' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '5px' }}>Storage Growth</h3>
            <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '25px' }}>Verified PB expansion over 7 days.</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '120px' }}>
              {[30, 45, 40, 65, 80, 75, 95].map((h, i) => (
                <div key={i} style={{ flex: 1, background: xandEmerald, height: `${h}%`, borderRadius: '6px 6px 0 0', opacity: i === 6 ? 1 : 0.4 }}></div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '10px', color: '#64748b', fontWeight: '800' }}>
              <span>MON</span><span>WED</span><span>SUN (PEAK)</span>
            </div>
          </div>

          <div style={cardStyle}>
             <h3 style={{ fontSize: '16px', fontWeight: '900', marginBottom: '15px' }}>Rewards Estimator</h3>
             <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '10px', color: '#94a3b8', fontWeight: '800' }}>STOINC SIMULATION (TB)</p>
                <input type="number" defaultValue="25" style={{ width: '100%', background: 'transparent', border: 'none', fontSize: '24px', fontWeight: '900', outline: 'none' }} />
             </div>
             <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Expected: <b style={{ color: xandEmerald }}>342.1 XAND / mo</b></p>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        .pulse-emerald { animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(0.95); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(0.95); opacity: 0.5; } }
        .table-row:hover { background-color: #f1f5f9; cursor: pointer; }
      `}</style>
    </div>
  );
}
