"use client";

import React, { useState, useEffect, useMemo } from 'react';

export default function XandeumUnifiedCommand() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [countdown, setCountdown] = useState(30);

  const xandEmerald = '#10b981'; 
  const xandPurple = '#a855f7';
  const xandGold = '#f59e0b';

  // 1. UNIFIED DATA ENGINE: Raw Tech Specs + Strategic Economic Data
  const nodes = useMemo(() => [
    { id: 'pNode_Tokyo_01', wiz: 99, version: '0.8.0', tier: 'Titan', mult: 176, storage: '4.2 TB', uptime: '99.9%', region: 'Tokyo, JP', lat: '35%', lng: '82%', bio: 'Equinix TY3. Optimized for Herrenberg storage queries.' },
    { id: 'pNode_Berlin_04', wiz: 94, version: '0.8.0', tier: 'Dragon', mult: 64, storage: '2.1 TB', uptime: '98.2%', region: 'Berlin, DE', lat: '30%', lng: '48%', bio: 'Strategic EU cluster. Active in Deep South Era phase.' },
    { id: 'pNode_London_09', wiz: 72, version: '0.7.5', tier: 'Coyote', mult: 40, storage: '8.4 TB', uptime: '84.5%', region: 'London, UK', lat: '28%', lng: '42%', bio: 'Munich legacy node. Update to v0.8.0 required for era boost.' },
    { id: 'pNode_NY_12', wiz: 92, version: '0.8.0', tier: 'Titan', mult: 176, storage: '12.1 TB', uptime: '99.1%', region: 'New York, US', lat: '36%', lng: '22%', bio: 'Verified Titan node. Hosting critical verifiable storage data.' },
    { id: 'pNode_SG_05', wiz: 88, version: '0.8.0', tier: 'Base', mult: 16, storage: '1.2 TB', uptime: '97.4%', region: 'Singapore, SG', lat: '55%', lng: '78%', bio: 'Baseline node providing SE Asia data redundancy.' },
  ], []);

  const filteredNodes = nodes.filter(n => 
    n.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    n.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateReward = (node: any) => {
    if (!node) return 0;
    return Math.floor((1000 * node.mult) * (node.wiz / 100));
  };

  useEffect(() => {
    const timer = setInterval(() => setCountdown(prev => (prev > 0 ? prev - 1 : 30)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh', color: '#1e293b', padding: '25px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 2. STRATEGIC SUMMARY (From Dashboard 2) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '25px' }}>
        {[
          { label: 'TOTAL pNODES', val: '1,204', trend: '+12% this Epoch' },
          { label: 'NETWORK STORAGE', val: '4.21 PB', trend: 'Verifiable' },
          { label: 'AVG UPTIME', val: '98.4%', trend: 'Healthy' },
          { label: 'ERA MULTIPLIER', val: '16.0x', trend: 'Deep South Active' }
        ].map((stat, i) => (
          <div key={i} style={{ background: '#fff', padding: '20px', borderRadius: '18px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: '800', color: '#94a3b8' }}>{stat.label}</p>
            <h2 style={{ margin: '8px 0', fontSize: '24px', fontWeight: '900', color: '#0f172a' }}>{stat.val}</h2>
            <p style={{ margin: 0, fontSize: '11px', color: xandEmerald, fontWeight: '700' }}>{stat.trend}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '25px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* 3. INNOVATION: TOPOLOGY MAP (From Dashboard 1) */}
          <div style={{ height: '350px', background: '#0f172a', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 2 }}>
               <h3 style={{ color: '#fff', margin: 0, fontSize: '16px', fontWeight: '800' }}>Live Network Topology</h3>
               <p style={{ color: '#64748b', fontSize: '11px' }}>pRPC Gossip Sync: {countdown}s</p>
            </div>
            {nodes.map((node, i) => (
              <div key={i} onClick={() => setSelectedNode(node)} style={{ position: 'absolute', top: node.lat, left: node.lng, cursor: 'pointer', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
                <div style={{ width: '12px', height: '12px', background: xandEmerald, borderRadius: '50%', boxShadow: `0 0 15px ${xandEmerald}`, border: '2px solid #0f172a' }}></div>
                <div className="ping" style={{ position: 'absolute', width: '30px', height: '30px', border: `1px solid ${xandEmerald}`, borderRadius: '50%', top: '-10px', left: '-10px' }}></div>
              </div>
            ))}
          </div>

          {/* 4. PRECISION REGISTRY (From Dashboard 1 & 2 Combined) */}
          <div style={{ background: '#fff', padding: '25px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', alignItems: 'center' }}>
               <h3 style={{ fontSize: '18px', fontWeight: '800', margin: 0 }}>Network Registry</h3>
               <input 
                 placeholder="Search Node ID, Region, or Version..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 style={{ padding: '12px 18px', borderRadius: '14px', border: '1px solid #e2e8f0', width: '300px', outline: 'none', fontSize: '13px' }}
               />
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ textAlign: 'left', fontSize: '11px', color: '#94a3b8' }}>
                <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                  <th style={{ paddingBottom: '15px' }}>IDENTIFIER / RELEASE</th>
                  <th>STORAGE</th>
                  <th>UPTIME</th>
                  <th>BOOST</th>
                </tr>
              </thead>
              <tbody>
                {filteredNodes.map((node, i) => (
                  <tr key={i} onClick={() => setSelectedNode(node)} className="row-hover" style={{ cursor: 'pointer', borderBottom: '1px solid #f8fafc' }}>
                    <td style={{ padding: '18px 0' }}>
                      <div style={{ fontWeight: '800', fontSize: '14px' }}>{node.id}</div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>v{node.version} • {node.region}</div>
                    </td>
                    <td style={{ fontWeight: '600', fontSize: '13px' }}>{node.storage}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: parseFloat(node.uptime) > 95 ? xandEmerald : xandGold }}></div>
                        <span style={{ fontWeight: '700', fontSize: '13px' }}>{node.uptime}</span>
                      </div>
                    </td>
                    <td style={{ color: xandPurple, fontWeight: '900' }}>{node.mult}x</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. STRATEGIC ANALYTICS PANEL (Economic Multiplier from Dash 2) */}
        <div style={{ background: '#fff', borderRadius: '24px', padding: '30px', border: '1px solid #e2e8f0', height: 'fit-content', position: 'sticky', top: '25px' }}>
          {selectedNode ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '10px', background: '#f1f5f9', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontWeight: '900' }}>OFFLINE DIAGNOSTICS</span>
                <button onClick={() => setSelectedNode(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: '20px' }}>&times;</button>
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: '900', margin: 0 }}>{selectedNode.id}</h2>
              <p style={{ color: '#64748b', fontSize: '13px', marginTop: '5px' }}>{selectedNode.region}</p>
              
              <div style={{ marginTop: '30px', padding: '25px', background: '#0f172a', borderRadius: '20px', textAlign: 'center', color: '#fff' }}>
                <p style={{ fontSize: '11px', color: xandEmerald, fontWeight: '800', margin: 0 }}>PROJECTED EPOCH REWARDS</p>
                <h2 style={{ fontSize: '38px', fontWeight: '900', margin: '10px 0', color: '#fff' }}>
                  {calculateReward(selectedNode).toLocaleString()} <span style={{ fontSize: '14px', color: xandEmerald }}>XAND</span>
                </h2>
                <div style={{ height: '1px', background: '#1e293b', margin: '15px 0' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                  <span style={{ color: '#64748b' }}>WIZ: {selectedNode.wiz}%</span>
                  <span style={{ color: xandGold }}>TIER: {selectedNode.tier}</span>
                </div>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: '800', color: '#94a3b8', marginBottom: '10px' }}>TECHNICAL BIO</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', background: '#f8fafc', padding: '15px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                  {selectedNode.bio}
                </p>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>📡</div>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>Global Network Live</h3>
              <p style={{ fontSize: '13px', color: '#64748b' }}>Select a node marker or registry entry <br/>to run deep-dive analytics.</p>
            </div>
          )}
        </div>
      </div>
      <style>{`.ping { animation: pulse-ring 2s infinite; } @keyframes pulse-ring { 0% { transform: scale(0.3); opacity: 0.8; } 100% { transform: scale(1.5); opacity: 0; } } .row-hover:hover { background: #f8fafc; transition: 0.2s; }`}</style>
    </div>
  );
}
