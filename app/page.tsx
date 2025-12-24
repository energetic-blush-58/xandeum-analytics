"use client";

import React, { useState } from 'react';

export default function EmeraldExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const xandEmerald = '#10b981'; 
  const bgLight = '#f8fafc'; 

  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '24px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
  };

  const discoveredNodes = [
    { id: 'pNode_Tokyo_Alpha', wiz: 99, capacity: '4.2TB', uptime: '100%', version: 'v1.18.1' },
    { id: 'pNode_Berlin_Beta', wiz: 94, capacity: '2.1TB', uptime: '98.4%', version: 'v1.18.1' },
    { id: 'pNode_London_Gamma', wiz: 88, capacity: '8.4TB', uptime: '97.2%', version: 'v1.17.5' },
    { id: 'pNode_NY_Delta', wiz: 92, capacity: '4.2TB', uptime: '99.1%', version: 'v1.18.0' },
  ];

  return (
    <div style={{ backgroundColor: bgLight, minHeight: '100vh', color: '#1e293b', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* HEADER: GOSSIP STATUS */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', margin: 0 }}>
            Xandeum <span style={{ color: xandEmerald }}>pNode Explorer</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>Real-time pRPC Gossip Discovery & Analysis</p>
        </div>
        <div style={{ background: '#fff', padding: '10px 20px', borderRadius: '14px', border: '1px solid #e2e8f0', textAlign: 'right' }}>
          <p style={{ margin: 0, fontSize: '10px', color: '#94a3b8', fontWeight: '800' }}>GOSSIP PEERS</p>
          <p style={{ margin: 0, fontSize: '18px', color: xandEmerald, fontWeight: '800' }}>1,204 Active</p>
        </div>
      </header>

      {/* NETWORK METRICS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        <div style={cardStyle}>
          <p style={{ color: '#94a3b8', fontSize: '11px', fontWeight: '800' }}>TOTAL CAPACITY</p>
          <h2 style={{ fontSize: '24px', margin: '5px 0' }}>4.2 PB</h2>
        </div>
        <div style={cardStyle}>
          <p style={{ color: '#94a3b8', fontSize: '11px', fontWeight: '800' }}>SYNC STATUS</p>
          <h2 style={{ fontSize: '24px', margin: '5px 0', color: xandEmerald }}>Synchronized</h2>
        </div>
        <div style={cardStyle}>
          <p style={{ color: '#94a3b8', fontSize: '11px', fontWeight: '800' }}>AVG STOINC</p>
          <h2 style={{ fontSize: '24px', margin: '5px 0' }}>12.4%</h2>
        </div>
        <div style={cardStyle}>
          <p style={{ color: '#94a3b8', fontSize: '11px', fontWeight: '800' }}>pRPC LATENCY</p>
          <h2 style={{ fontSize: '24px', margin: '5px 0' }}>14ms</h2>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* THE pNODE DIRECTORY (THIS FIXES THE SCOPE PROBLEM) */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800' }}>Discovered pNodes</h3>
            <input 
              placeholder="Search Gossip ID..." 
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '10px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', width: '250px', outline: 'none' }}
            />
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ textAlign: 'left', color: '#94a3b8', fontSize: '11px', borderBottom: '2px solid #f1f5f9' }}>
              <tr>
                <th style={{ paddingBottom: '15px' }}>IDENTIFIER</th>
                <th style={{ paddingBottom: '15px' }}>WIZ SCORE</th>
                <th style={{ paddingBottom: '15px' }}>CAPACITY</th>
                <th style={{ paddingBottom: '15px' }}>STATUS</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px' }}>
              {discoveredNodes.filter(n => n.id.toLowerCase().includes(searchTerm.toLowerCase())).map((node, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                  <td style={{ padding: '15px 0', fontWeight: '700', color: '#334155' }}>{node.id}</td>
                  <td style={{ color: xandEmerald, fontWeight: '800' }}>{node.wiz}%</td>
                  <td>{node.capacity}</td>
                  <td style={{ color: '#22c55e', fontWeight: '700', fontSize: '12px' }}>● ONLINE</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* pNODE STOINC CALCULATOR */}
        <div style={{ ...cardStyle, background: '#1e293b', color: 'white' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px' }}>STOINC Estimator</h3>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '25px' }}>Calculate potential pNode earnings via pRPC calls.</p>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '10px', color: xandEmerald, fontWeight: '900' }}>STORAGE CONTRIBUTION (TB)</label>
            <input type="number" defaultValue="10" style={{ width: '100%', background: '#0f172a', border: 'none', color: 'white', padding: '15px', borderRadius: '12px', marginTop: '10px' }} />
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>EST. MONTHLY REWARDS</p>
            <h2 style={{ margin: '10px 0 0 0', color: xandEmerald, fontSize: '32px' }}>142.5 <span style={{fontSize: '14px'}}>XAND</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
}
