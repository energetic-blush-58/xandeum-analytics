"use client";

import React, { useState, useEffect, useMemo } from 'react';

export default function XandeumGalaxyPro() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [countdown, setCountdown] = useState(30);

  const xandEmerald = '#10b981'; 
  const xandPurple = '#a855f7';
  const xandGold = '#f59e0b';

  // 1. DYNAMIC DATA: Based on STOINC Formulas (16x Era * NFT Boost)
  const nodes = useMemo(() => [
    { id: 'pNode_Tokyo_01', wiz: 99, version: '0.8.0', tier: 'Titan', mult: 176, storage: '4.2 TB', region: 'Tokyo, JP', status: 'Online' },
    { id: 'pNode_Berlin_04', wiz: 94, version: '0.8.0', tier: 'Dragon', mult: 64, storage: '2.1 TB', region: 'Berlin, DE', status: 'Online' },
    { id: 'pNode_London_09', wiz: 72, version: '0.7.5', tier: 'Coyote', mult: 40, storage: '8.4 TB', region: 'London, UK', status: 'Warning' },
    { id: 'pNode_NY_12', wiz: 92, version: '0.8.0', tier: 'Titan', mult: 176, storage: '12.1 TB', region: 'New York, US', status: 'Online' },
  ], []);

  const filteredNodes = nodes.filter(n => n.id.toLowerCase().includes(searchTerm.toLowerCase()));

  // CALCULATE ESTIMATED STOINC (Simplified formula based on network metrics)
  const calculateReward = (node: any) => {
    const baseReward = 10000; // XFRP Monthly base
    const storageFactor = parseFloat(node.storage) * 1.5;
    return Math.floor((baseReward + (storageFactor * node.mult)) * (node.wiz / 100));
  };

  useEffect(() => {
    const timer = setInterval(() => setCountdown(prev => (prev > 0 ? prev - 1 : 30)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b', padding: '30px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 2. VISUAL INNOVATION: NETWORK HEALTH BAR */}
      <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '10px', marginBottom: '40px', overflow: 'hidden' }}>
        <div style={{ width: '92%', height: '100%', background: `linear-gradient(90deg, ${xandEmerald}, ${xandPurple})`, borderRadius: '10px' }}></div>
      </div>

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', margin: 0 }}>Xandeum <span style={{ color: xandEmerald }}>Analytics Pro</span></h1>
          <p style={{ color: '#64748b', fontSize: '13px' }}>Network Status: <span style={{color: xandEmerald, fontWeight: 700}}>OPTIMAL</span> ● Heartbeat in {countdown}s</p>
        </div>
        <div style={{ textAlign: 'right' }}>
           <input 
              placeholder="Search by Node ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '12px 20px', borderRadius: '15px', border: '2px solid #e2e8f0', width: '300px', outline: 'none', transition: '0.2s' }}
            />
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
        
        {/* ENHANCED DATA TABLE */}
        <div style={{ background: '#fff', borderRadius: '24px', padding: '24px', border: '1px solid #e2e8f0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', fontSize: '11px', color: '#94a3b8', borderBottom: '2px solid #f1f5f9' }}>
                <th style={{ paddingBottom: '15px' }}>pNODE IDENTITY</th>
                <th>VERSION</th>
                <th>BOOST</th>
                <th>STOINC SCORE</th>
              </tr>
            </thead>
            <tbody>
              {filteredNodes.map((node, i) => (
                <tr key={i} onClick={() => setSelectedNode(node)} style={{ cursor: 'pointer', borderBottom: '1px solid #f8fafc' }} className="row-hover">
                  <td style={{ padding: '20px 0' }}>
                    <div style={{ fontWeight: '800', color: '#1e293b' }}>{node.id}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>{node.region}</div>
                  </td>
                  <td><span style={{ fontSize: '12px', fontWeight: '600' }}>{node.version}</span></td>
                  <td><span style={{ color: xandPurple, fontWeight: '900' }}>{node.mult}x</span></td>
                  <td style={{ color: xandEmerald, fontWeight: '900' }}>{calculateReward(node).toLocaleString()} pts</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3. REWARDS PREDICTOR (The "Winning" Feature) */}
        <div style={{ background: '#0f172a', borderRadius: '24px', padding: '35px', color: '#fff', height: 'fit-content', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: '800' }}>Yield Forecaster</h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '30px' }}>Select a node to calculate Deep South Era rewards.</p>
          
          {selectedNode ? (
            <div>
              <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px' }}>
                  <p style={{ fontSize: '10px', color: xandEmerald, margin: 0 }}>NFT MULTIPLIER</p>
                  <p style={{ fontSize: '18px', fontWeight: '900', margin: '5px 0 0 0' }}>{selectedNode.mult}x</p>
                </div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px' }}>
                  <p style={{ fontSize: '10px', color: xandEmerald, margin: 0 }}>STOINC YIELD</p>
                  <p style={{ fontSize: '18px', fontWeight: '900', margin: '5px 0 0 0' }}>{selectedNode.wiz}%</p>
                </div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: `linear-gradient(135deg, ${xandPurple}22, ${xandEmerald}22)`, borderRadius: '20px', border: `1px solid ${xandEmerald}44` }}>
                <p style={{ fontSize: '11px', color: '#94a3b8' }}>ESTIMATED MONTHLY EARNINGS</p>
                <h2 style={{ fontSize: '36px', fontWeight: '900', margin: '10px 0', color: xandEmerald }}>
                  {calculateReward(selectedNode).toLocaleString()} <span style={{fontSize: '14px'}}>XAND</span>
                </h2>
                <p style={{ fontSize: '10px', color: '#64748b' }}>Includes 16x Deep South Era Boost</p>
              </div>
            </div>
          ) : (
            <div style={{ padding: '40px 0', textAlign: 'center', border: '2px dashed #334155', borderRadius: '20px' }}>
              <p style={{ color: '#475569' }}>Click a node to run analytics</p>
            </div>
          )}
        </div>
      </div>
      <style>{`.row-hover:hover { background: #f1f5f9; transition: 0.2s; }`}</style>
    </div>
  );
}
