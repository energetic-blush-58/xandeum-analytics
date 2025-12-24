"use client";

import React, { useState } from 'react';

export default function GalaxyExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const xandGreen = '#10b981';
  const xandPurple = '#a855f7';

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '24px',
    padding: '30px',
  };

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'Inter, sans-serif', position: 'relative', overflow: 'hidden' }}>
      
      {/* GALAXY BACKGROUND (Discovery Layer) */}
      <div style={{ position: 'absolute', top: '5%', right: '5%', width: '400px', height: '400px', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60px', height: '60px', background: xandGreen, borderRadius: '50%', boxShadow: `0 0 60px ${xandGreen}`, opacity: 0.5 }}></div>
        <div style={{ position: 'absolute', width: '100%', height: '100%', border: '1px solid rgba(16, 185, 129, 0.1)', borderRadius: '50%', animation: 'spin 30s linear infinite' }}></div>
      </div>

      <header style={{ marginBottom: '40px', position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '38px', fontWeight: '900', margin: 0 }}>
          Xandeum <span style={{ color: xandGreen }}>pNode Explorer</span>
        </h1>
        <p style={{ color: '#64748b', fontSize: '16px' }}>Gossip Network Discovery & pRPC Analytics</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px', position: 'relative', zIndex: 1 }}>
        
        {/* NEW: THE LISTING (This puts it back in scope!) */}
        <div style={glassStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Active pNodes in Gossip</h3>
            <input 
              placeholder="Search pRPC Registry..." 
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '8px 12px', borderRadius: '8px', color: 'white', fontSize: '12px' }}
            />
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ color: '#475569', textAlign: 'left', borderBottom: '1px solid #1e293b' }}>
                <th style={{ padding: '10px 0' }}>NODE ID</th>
                <th>WIZ SCORE</th>
                <th>VERSION</th>
              </tr>
            </thead>
            <tbody>
              {['Node_Alpha', 'Node_Beta', 'Node_Gamma'].filter(n => n.toLowerCase().includes(searchTerm.toLowerCase())).map((node, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '15px 0', fontWeight: '600' }}>{node}</td>
                  <td style={{ color: xandGreen }}>98%</td>
                  <td style={{ color: '#94a3b8' }}>v1.18.1</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ANALYTICS SIDEBAR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ ...glassStyle, background: `linear-gradient(135deg, ${xandPurple}22, transparent)` }}>
            <p style={{ fontSize: '11px', fontWeight: '800', color: xandPurple, letterSpacing: '1px' }}>NETWORK STORAGE DEPTH</p>
            <h2 style={{ fontSize: '32px', margin: '10px 0' }}>4.2 PB</h2>
            <p style={{ fontSize: '11px', color: '#22c55e' }}>● Gossip Discovery Active</p>
          </div>

          <div style={glassStyle}>
            <p style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', letterSpacing: '1px' }}>pRPC REWARD ESTIMATOR</p>
            <div style={{ marginTop: '15px' }}>
              <input type="number" defaultValue="1000" style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '10px', borderRadius: '8px', color: 'white', width: '80%' }} />
              <p style={{ fontSize: '12px', marginTop: '10px', color: '#94a3b8' }}>Est. Monthly STOINC: <span style={{ color: '#fff' }}>142 XAND</span></p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
