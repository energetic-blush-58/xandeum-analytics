"use client";

import React, { useState, useMemo } from 'react';

export default function EmeraldExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const xandEmerald = '#10b981'; 
  const bgLight = '#f8fafc'; 

  // Mock data that looks like real pRPC output
  const discoveredNodes = useMemo(() => [
    { id: 'pNode_Tokyo_Alpha', wiz: 99, storage: 85, status: 'Active', geo: 'JP' },
    { id: 'pNode_Berlin_Beta', wiz: 94, storage: 45, status: 'Active', geo: 'DE' },
    { id: 'pNode_London_Gamma', wiz: 88, storage: 92, status: 'Syncing', geo: 'UK' },
    { id: 'pNode_NY_Delta', wiz: 92, storage: 12, status: 'Active', geo: 'US' },
  ], []);

  const filteredNodes = discoveredNodes.filter(n => 
    n.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '24px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
  };

  return (
    <div style={{ backgroundColor: bgLight, minHeight: '100vh', color: '#1e293b', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* HEADER: GOSSIP STATUS WITH PULSE */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', margin: 0 }}>
            Xandeum <span style={{ color: xandEmerald }}>pNode Explorer</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
            <div className="pulse" style={{ width: '8px', height: '8px', background: xandEmerald, borderRadius: '50%' }}></div>
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>pRPC Discovery Engine Active</p>
          </div>
        </div>
        <div style={{ background: '#fff', padding: '12px 24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <p style={{ margin: 0, fontSize: '10px', color: '#94a3b8', fontWeight: '800', letterSpacing: '1px' }}>GLOBAL PEERS</p>
          <p style={{ margin: 0, fontSize: '20px', color: '#0f172a', fontWeight: '900' }}>1,204</p>
        </div>
      </header>

      {/* METRICS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'STORAGE DEPTH', val: '4.2 PB', color: '#0f172a' },
          { label: 'AVG WIZ SCORE', val: '94.2%', color: xandEmerald },
          { label: 'STOINC YIELD', val: '12.4%', color: '#0f172a' },
          { label: 'NETWORK HEALTH', val: '100%', color: xandEmerald }
        ].map((m, i) => (
          <div key={i} style={cardStyle}>
            <p style={{ color: '#94a3b8', fontSize: '11px', fontWeight: '800', marginBottom: '10px' }}>{m.label}</p>
            <h2 style={{ fontSize: '26px', margin: 0, color: m.color }}>{m.val}</h2>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr', gap: '30px' }}>
        
        {/* INTERACTIVE pNODE LIST */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800' }}>Live Gossip Discovery</h3>
            <input 
              placeholder="Search by Node ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '10px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', width: '250px', outline: 'none', fontSize: '14px' }}
            />
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ textAlign: 'left', color: '#94a3b8', fontSize: '11px', borderBottom: '2px solid #f1f5f9' }}>
              <tr>
                <th style={{ paddingBottom: '15px' }}>IDENTIFIER</th>
                <th style={{ paddingBottom: '15px' }}>WIZ SCORE</th>
                <th style={{ paddingBottom: '15px' }}>STORAGE LOAD</th>
                <th style={{ paddingBottom: '15px' }}>STATUS</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px' }}>
              {filteredNodes.map((node, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                  <td style={{ padding: '20px 0', fontWeight: '700', color: '#334155' }}>{node.id}</td>
                  <td style={{ color: xandEmerald, fontWeight: '800' }}>{node.wiz}%</td>
                  <td style={{ width: '150px' }}>
                    <div style={{ fontSize: '11px', marginBottom: '4px', color: '#64748b' }}>{node.storage}% Full</div>
                    <div style={{ width: '100px', height: '6px', background: '#f1f5f9', borderRadius: '3px' }}>
                      <div style={{ width: `${node.storage}%`, height: '100%', background: node.storage > 80 ? '#ef4444' : xandEmerald, borderRadius: '3px' }}></div>
                    </div>
                  </td>
                  <td>
                    <span style={{ padding: '4px 10px', borderRadius: '20px', background: node.status === 'Active' ? '#ecfdf5' : '#fff7ed', color: node.status === 'Active' ? '#059669' : '#d97706', fontSize: '11px', fontWeight: '800' }}>
                      {node.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* REWARD CALCULATOR */}
        <div style={{ ...cardStyle, background: '#1e293b', color: 'white' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px' }}>STOINC Calculator</h3>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '25px' }}>Real-time earnings projection based on storage contribution.</p>
          
          <div style={{ background: '#0f172a', padding: '20px', borderRadius: '16px', marginBottom: '20px' }}>
            <label style={{ fontSize: '10px', color: xandEmerald, fontWeight: '900', letterSpacing: '1px' }}>TB CONTRIBUTION</label>
            <input type="number" defaultValue="10" style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', fontSize: '24px', fontWeight: '800', outline: 'none', marginTop: '10px' }} />
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '20px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>ESTIMATED MONTHLY</p>
            <h2 style={{ margin: '10px 0 0 0', color: xandEmerald, fontSize: '36px', fontWeight: '900' }}>142.5 <span style={{fontSize: '16px', color: '#fff'}}>XAND</span></h2>
          </div>
        </div>
      </div>

      <style>{`
        .pulse { animation: pulse-animation 2s infinite; }
        @keyframes pulse-animation { 0% { transform: scale(0.95); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(0.95); opacity: 0.5; } }
      `}</style>
    </div>
  );
}
