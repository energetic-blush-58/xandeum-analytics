"use client";

import React, { useState } from 'react';

export default function EmeraldExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const xandEmerald = '#10b981'; 
  const bgLight = '#f8fafc'; // Clean Slate White

  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '20px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  };

  return (
    <div style={{ backgroundColor: bgLight, minHeight: '100vh', color: '#1e293b', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* HEADER WITH SYSTEM STATUS */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', margin: 0 }}>
            Xandeum <span style={{ color: xandEmerald }}>Storage Explorer</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>pRPC Gossip Discovery Engine</p>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, fontSize: '10px', fontWeight: '800', color: '#94a3b8' }}>NETWORK STATUS</p>
            <p style={{ margin: 0, fontSize: '14px', color: xandEmerald, fontWeight: '700' }}>● 1,204 pNodes Live</p>
          </div>
        </div>
      </header>

      {/* UNIQUE BOX: STORAGE ECONOMICS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
        <div style={cardStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '800' }}>TOTAL STORAGE DEPTH</p>
          <h2 style={{ fontSize: '32px', margin: '10px 0', color: '#0f172a' }}>4.2 <span style={{fontSize: '16px', color: '#94a3b8'}}>PB</span></h2>
          <div style={{ width: '100%', height: '4px', background: '#f1f5f9', borderRadius: '2px' }}>
            <div style={{ width: '65%', height: '100%', background: xandEmerald }}></div>
          </div>
        </div>
        <div style={cardStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '800' }}>AVG STOINC YIELD</p>
          <h2 style={{ fontSize: '32px', margin: '10px 0', color: xandEmerald }}>12.4%</h2>
          <p style={{ fontSize: '12px', color: '#94a3b8' }}>Per Epoch / pNode</p>
        </div>
        <div style={cardStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '800' }}>pRPC SYNC RATE</p>
          <h2 style={{ fontSize: '32px', margin: '10px 0', color: '#0f172a' }}>14ms</h2>
          <p style={{ fontSize: '12px', color: '#94a3b8' }}>Real-time Gossip Tracking</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* THE pNODE DIRECTORY (Required for Scope) */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>pNode Discovery Registry</h3>
            <input 
              placeholder="Search pRPC Nodes..." 
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '13px', outline: 'none', width: '250px' }}
            />
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #f1f5f9', color: '#94a3b8', fontSize: '11px' }}>
                <th style={{ paddingBottom: '15px' }}>NODE IDENTIFIER</th>
                <th style={{ paddingBottom: '15px' }}>WIZ SCORE</th>
                <th style={{ paddingBottom: '15px' }}>GEOLOCATION</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px' }}>
              {[
                { id: 'pNode_US_East_1', score: '99', geo: 'New York, US' },
                { id: 'pNode_EU_West_2', score: '94', geo: 'London, UK' },
                { id: 'pNode_SG_Core_1', score: '88', geo: 'Singapore, SG' }
              ].filter(n => n.id.toLowerCase().includes(searchTerm.toLowerCase())).map((node, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                  <td style={{ padding: '18px 0', fontWeight: '600', color: '#334155' }}>{node.id}</td>
                  <td style={{ color: xandEmerald, fontWeight: '700' }}>{node.score}/100</td>
                  <td style={{ color: '#64748b' }}>{node.geo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* pNODE REWARD CALCULATOR (Unique Feature) */}
        <div style={{ ...cardStyle, background: '#1e293b', color: 'white' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Reward Calculator</h3>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '20px' }}>Estimate your STOINC based on storage contribution.</p>
          
          <label style={{ fontSize: '10px', color: xandEmerald, fontWeight: '800' }}>STORAGE CONTRIBUTION (TB)</label>
          <input type="number" defaultValue="50" style={{ width: '100%', background: '#0f172a', border: '1px solid #334155', color: 'white', padding: '12px', borderRadius: '10px', margin: '10px 0 25px 0' }} />
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
            <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>ESTIMATED MONTHLY EARNINGS</p>
            <h2 style={{ margin: '10px 0 0 0', color: xandEmerald }}>485.20 XAND</h2>
          </div>
          
          <button style={{ width: '100%', background: xandEmerald, color: '#1e293b', border: 'none', padding: '15px', borderRadius: '10px', fontWeight: '800', marginTop: '20px', cursor: 'pointer' }}>
            Simulate pNode
          </button>
        </div>
      </div>
    </div>
  );
}
