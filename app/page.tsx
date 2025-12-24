"use client";

import React, { useState } from 'react';

export default function EmeraldExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const xandEmerald = '#10b981'; 
  const bgLight = '#f8fafc'; 

  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '20px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  };

  return (
    <div style={{ backgroundColor: bgLight, minHeight: '100vh', color: '#1e293b', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* HEADER */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', margin: 0 }}>
            Xandeum <span style={{ color: xandEmerald }}>pNode Explorer</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>pRPC Global Node Discovery</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, fontSize: '10px', fontWeight: '800', color: '#94a3b8' }}>GOSSIP STATUS</p>
          <p style={{ margin: 0, fontSize: '14px', color: xandEmerald, fontWeight: '700' }}>● 1,204 Nodes Discovered</p>
        </div>
      </header>

      {/* METRICS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
        <div style={cardStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '800' }}>TOTAL STORAGE CAPACITY</p>
          <h2 style={{ fontSize: '32px', margin: '10px 0', color: '#0f172a' }}>4.2 PB</h2>
        </div>
        <div style={cardStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '800' }}>pRPC RESPONSE TIME</p>
          <h2 style={{ fontSize: '32px', margin: '10px 0', color: xandEmerald }}>14ms</h2>
        </div>
        <div style={cardStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '800' }}>ACTIVE STOINC YIELD</p>
          <h2 style={{ fontSize: '32px', margin: '10px 0', color: '#0f172a' }}>12.4%</h2>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr', gap: '30px' }}>
        
        {/* THE pNODE LIST (CRITICAL FOR SCOPE) */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Global pNode Registry</h3>
            <input 
              placeholder="Search by Node ID..." 
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '10px', border: '1px solid #e2e8f0', width: '200px' }}
            />
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ textAlign: 'left', color: '#94a3b8', fontSize: '11px', borderBottom: '2px solid #f1f5f9' }}>
              <tr>
                <th style={{ paddingBottom: '15px' }}>IDENTIFIER</th>
                <th style={{ paddingBottom: '15px' }}>WIZ SCORE</th>
                <th style={{ paddingBottom: '15px' }}>LOCATION</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px' }}>
              {[
                { id: 'pNode_Tokyo_01', score: '99', geo: 'Tokyo, JP' },
                { id: 'pNode_Berlin_04', score: '96', geo: 'Berlin, DE' },
                { id: 'pNode_London_09', score: '92', geo: 'London, UK' }
              ].filter(n => n.id.toLowerCase().includes(searchTerm.toLowerCase())).map((node, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                  <td style={{ padding: '15px 0', fontWeight: '600' }}>{node.id}</td>
                  <td style={{ color: xandEmerald, fontWeight: '700' }}>{node.score}%</td>
                  <td style={{ color: '#64748b' }}>{node.geo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* REWARD ESTIMATOR */}
        <div style={{ ...cardStyle, background: '#1e293b', color: 'white' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>STOINC Estimator</h3>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '20px' }}>Calculate potential pNode earnings.</p>
          <input type="number" defaultValue="50" style={{ width: '100%', background: '#0f172a', border: 'none', color: 'white', padding: '15px', borderRadius: '10px', marginBottom: '20px' }} />
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '10px' }}>
            <p style={{ margin: 0, fontSize: '11px', color: xandEmerald }}>ESTIMATED MONTHLY</p>
            <h2 style={{ margin: '5px 0 0 0' }}>485.2 XAND</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
