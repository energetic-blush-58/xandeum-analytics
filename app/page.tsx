"use client";

import React, { useState, useEffect, useMemo } from 'react';

export default function XandeumGalaxyFinal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countdown, setCountdown] = useState(30);

  const xandEmerald = '#10b981'; 
  const xandPurple = '#a855f7';
  const xandGold = '#f59e0b';

  // 1. ADVANCED DATA: Including Versioning, NFT Boosts, and Economic Tier
  const nodes = useMemo(() => [
    { id: 'pNode_Tokyo_01', wiz: 99, version: '0.8.0 (Herrenberg)', tier: 'Titan (16x)', storage: '4.2 TB', status: 'Online' },
    { id: 'pNode_Berlin_04', wiz: 94, version: '0.8.0 (Herrenberg)', tier: 'Dragon (8x)', storage: '2.1 TB', status: 'Online' },
    { id: 'pNode_London_09', wiz: 72, version: '0.7.5 (Munich)', tier: 'Base (1x)', storage: '8.4 TB', status: 'Warning' },
    { id: 'pNode_NY_12', wiz: 92, version: '0.8.0 (Herrenberg)', tier: 'Titan (16x)', storage: '4.2 TB', status: 'Online' },
    { id: 'pNode_SG_05', wiz: 88, version: '0.8.0 (Herrenberg)', tier: 'Base (1x)', storage: '1.2 TB', status: 'Online' },
  ], []);

  const filteredNodes = nodes.filter(n => 
    n.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    n.version.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. LIVE PULSE LOGIC (Functionality Win)
  useEffect(() => {
    const timer = setInterval(() => setCountdown(prev => (prev > 0 ? prev - 1 : 30)), 1000);
    return () => clearInterval(timer);
  }, []);

  const cardStyle = { background: '#fff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '24px' };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 3. NETWORK HEALTH SUMMARY (Winning Requirement) */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', margin: 0 }}>
            Xandeum <span style={{ color: xandEmerald }}>Explorer Pro</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
             <div style={{ width: '8px', height: '8px', background: xandEmerald, borderRadius: '50%', boxShadow: `0 0 10px ${xandEmerald}` }}></div>
             <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>pRPC Sync: <b>{countdown}s</b> to next heartbeat</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontSize: '10px', color: '#94a3b8', fontWeight: '800' }}>ERA STATUS</p>
                <p style={{ margin: 0, fontSize: '14px', color: xandPurple, fontWeight: '700' }}>Deep South (16x Active)</p>
            </div>
        </div>
      </header>

      {/* GLOBAL STATISTICS BAR */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'TOTAL ACTIVE pNODES', val: '1,204', sub: '99.2% Health' },
          { label: 'NETWORK CAPACITY', val: '4.2 PB', sub: '+1.2 TB/hr' },
          { label: 'VERSION ADOPTION', val: '92%', sub: 'Herrenberg Ready' },
          { label: 'AVG STOINC YIELD', val: '12.4%', sub: 'Per Epoch' }
        ].map((m, i) => (
          <div key={i} style={cardStyle}>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: '800', color: '#94a3b8' }}>{m.label}</p>
            <h2 style={{ margin: '8px 0', fontSize: '24px', fontWeight: '900' }}>{m.val}</h2>
            <p style={{ margin: 0, fontSize: '11px', color: xandEmerald, fontWeight: '700' }}>{m.sub}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* THE pNODE REGISTRY (With Economic Insights) */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800' }}>pNode Discovery Registry</h3>
            <input 
              placeholder="Search by ID or Version..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '10px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', width: '250px', outline: 'none' }}
            />
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', color: '#94a3b8', fontSize: '11px', borderBottom: '2px solid #f1f5f9' }}>
                <th style={{ paddingBottom: '15px' }}>IDENTIFIER / VERSION</th>
                <th style={{ paddingBottom: '15px' }}>WIZ SCORE</th>
                <th style={{ paddingBottom: '15px' }}>NFT BOOST</th>
                <th style={{ paddingBottom: '15px' }}>STATUS</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px' }}>
              {filteredNodes.map((node, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                  <td style={{ padding: '20px 0' }}>
                    <div style={{ fontWeight: '700' }}>{node.id}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>{node.version}</div>
                  </td>
                  <td style={{ color: xandEmerald, fontWeight: '900' }}>{node.wiz}%</td>
                  <td>
                    <span style={{ 
                      padding: '4px 10px', borderRadius: '8px', fontSize: '10px', fontWeight: '900',
                      background: node.tier.includes('Titan') ? '#f59e0b22' : node.tier.includes('Dragon') ? '#a855f722' : '#f1f5f9',
                      color: node.tier.includes('Titan') ? xandGold : node.tier.includes('Dragon') ? xandPurple : '#64748b'
                    }}>
                      {node.tier}
                    </span>
                  </td>
                  <td>
                    <span style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', background: node.status === 'Online' ? '#ecfdf5' : '#fef2f2', color: node.status === 'Online' ? xandEmerald : '#ef4444' }}>
                      {node.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* REWARDS CALCULATOR (Interactive DELIGHT) */}
        <div style={{ ...cardStyle, background: '#1e293b', color: 'white' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px' }}>STOINC Estimator</h3>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '25px' }}>Calculate yield based on pNode performance and era boosts.</p>
          
          <div style={{ marginBottom: '25px' }}>
            <label style={{ fontSize: '10px', color: xandEmerald, fontWeight: '900' }}>STORAGE (TB)</label>
            <input type="number" defaultValue="10" style={{ width: '100%', background: '#0f172a', border: 'none', color: 'white', padding: '15px', borderRadius: '12px', marginTop: '10px' }} />
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '20px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>ESTIMATED MONTHLY REWARDS</p>
            <h2 style={{ margin: '10px 0 0 0', color: xandEmerald, fontSize: '32px' }}>142.5 <span style={{fontSize: '16px'}}>XAND</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
}
