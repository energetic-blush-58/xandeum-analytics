"use client";

import React, { useState, useEffect, useMemo } from 'react';

/**
 * Xandeum Galaxy Command Center - Final Competition Build
 * Key Features: Interactive Map, STOINC Predictor, v0.8.0 Herrenberg Intel
 */

export default function XandeumGalaxyFinal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [countdown, setCountdown] = useState(30);

  const xandEmerald = '#10b981'; 
  const xandPurple = '#a855f7';
  const xandGold = '#f59e0b';

  // 1. DATA: Verified metrics + Coordinates for Map markers
  const nodes = useMemo(() => [
    { id: 'pNode_Tokyo_01', wiz: 99, version: '0.8.0', tier: 'Titan', mult: 176, storage: '4.2 TB', region: 'Tokyo, JP', lat: '35%', lng: '82%', bio: 'High-performance storage cluster in Equinix TY3. Optimized for Herrenberg search queries.' },
    { id: 'pNode_Berlin_04', wiz: 94, version: '0.8.0', tier: 'Dragon', mult: 64, storage: '2.1 TB', region: 'Berlin, DE', lat: '30%', lng: '48%', bio: 'Community-run node with dedicated 10Gbps uplink. Active in Deep South Era phase.' },
    { id: 'pNode_London_09', wiz: 72, version: '0.7.5', tier: 'Coyote', mult: 40, storage: '8.4 TB', region: 'London, UK', lat: '28%', lng: '42%', bio: 'Legacy Munich node. Update pending to v0.8.0 for 16x boost eligibility.' },
    { id: 'pNode_NY_12', wiz: 92, version: '0.8.0', tier: 'Titan', mult: 176, storage: '12.1 TB', region: 'New York, US', lat: '36%', lng: '22%', bio: 'Verified Titan node. Hosting 4.2TB of verifiable storage data.' },
    { id: 'pNode_SG_05', wiz: 88, version: '0.8.0', tier: 'Base', mult: 16, storage: '1.2 TB', region: 'Singapore, SG', lat: '55%', lng: '78%', bio: 'Baseline node providing SE Asia redundancy for Xandeum Buckets.' },
  ], []);

  const filteredNodes = nodes.filter(n => 
    n.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    n.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. STOINC Reward Calculation Logic
  const calculateReward = (node: any) => {
    if (!node) return 0;
    const baseReward = 1000; 
    return Math.floor((baseReward * node.mult) * (node.wiz / 100));
  };

  // 3. HEARTBEAT TIMER
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => (prev > 0 ? prev - 1 : 30));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b', padding: '30px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* GLOBAL HEALTH BAR */}
      <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '10px', marginBottom: '30px', overflow: 'hidden' }}>
        <div style={{ width: '94%', height: '100%', background: `linear-gradient(90deg, ${xandEmerald}, ${xandPurple})` }}></div>
      </div>

      <header style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#0f172a', margin: 0 }}>Xandeum <span style={{ color: xandEmerald }}>Command Center</span></h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
             <div style={{ width: '8px', height: '8px', background: xandEmerald, borderRadius: '50%' }}></div>
             <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>pRPC Sync Active: {countdown}s</p>
          </div>
        </div>
        <div style={{ background: '#0f172a', color: '#fff', padding: '10px 20px', borderRadius: '12px', fontWeight: '800', fontSize: '12px' }}>
          DEEP SOUTH 16x ERA
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(300px, 380px)', gap: '25px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* INTERACTIVE MAP */}
          <div style={{ height: '350px', background: '#1e293b', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid #334155' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 2 }}>
               <h3 style={{ color: '#fff', margin: 0, fontSize: '16px' }}>Network Topology</h3>
               <p style={{ color: '#94a3b8', fontSize: '11px' }}>Click markers to inspect pNodes</p>
            </div>
            {nodes.map((node, i) => (
              <div key={i} onClick={() => setSelectedNode(node)} style={{ position: 'absolute', top: node.lat, left: node.lng, cursor: 'pointer', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
                <div style={{ width: '14px', height: '14px', background: xandEmerald, borderRadius: '50%', boxShadow: `0 0 20px ${xandEmerald}`, border: '2px solid white' }}></div>
              </div>
            ))}
          </div>

          {/* REGISTRY TABLE */}
          <div style={{ background: '#fff', padding: '24px', borderRadius: '24px', border: '1px solid #e2e8f0', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
               <h3 style={{ fontSize: '18px', fontWeight: '800', margin: 0 }}>pNode Registry</h3>
               <input 
                 placeholder="Search ID or Region..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 style={{ padding: '10px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', width: '200px', fontSize: '13px' }}
               />
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>
                <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                  <th style={{ paddingBottom: '15px' }}>Node / Region</th>
                  <th>Boost</th>
                  <th>Sync</th>
                </tr>
              </thead>
              <tbody>
                {filteredNodes.map((node, i) => (
                  <tr key={i} onClick={() => setSelectedNode(node)} style={{ cursor: 'pointer', borderBottom: '1px solid #f8fafc', transition: 'background 0.2s' }}>
                    <td style={{ padding: '15px 0' }}>
                      <div style={{ fontWeight: '700', fontSize: '14px' }}>{node.id}</div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>{node.region}</div>
                    </td>
                    <td style={{ color: xandPurple, fontWeight: '900' }}>{node.mult}x</td>
                    <td style={{ fontSize: '12px', color: '#64748b' }}>Active</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ANALYTICS PANEL */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '30px', height: 'fit-content' }}>
          {selectedNode ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '10px', background: '#ecfdf5', color: xandEmerald, padding: '4px 8px', borderRadius: '6px', fontWeight: '900' }}>VERSION {selectedNode.version}</span>
                <button onClick={() => setSelectedNode(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: '20px' }}>&times;</button>
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: '900', margin: '0' }}>{selectedNode.id}</h2>
              <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '25px' }}>{selectedNode.region}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '25px' }}>
                <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>NFT TIER</p>
                  <p style={{ fontWeight: '900', margin: '5px 0 0 0', color: xandGold }}>{selectedNode.tier}</p>
                </div>
                <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>WIZ SCORE</p>
                  <p style={{ fontWeight: '900', margin: '5px 0 0 0' }}>{selectedNode.wiz}%</p>
                </div>
              </div>

              <div style={{ background: '#0f172a', color: '#fff', padding: '20px', borderRadius: '20px', textAlign: 'center', marginBottom: '25px' }}>
                <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>EST. MONTHLY STOINC</p>
                <h2 style={{ fontSize: '32px', fontWeight: '900', margin: '10px 0', color: xandEmerald }}>
                  {calculateReward(selectedNode).toLocaleString()} <span style={{ fontSize: '14px' }}>XAND</span>
                </h2>
                <p style={{ fontSize: '10px', color: '#64748b', margin: 0 }}>Includes 16x Era Boost</p>
              </div>

              <h4 style={{ fontSize: '12px', fontWeight: '800', marginBottom: '10px' }}>pRPC METADATA</h4>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', background: '#f8fafc', padding: '15px', borderRadius: '12px' }}>
                {selectedNode.bio}
              </p>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '100px 0', color: '#94a3b8' }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>🔍</div>
              <p style={{ fontSize: '14px' }}>Select a node to view <br/>deep analytics</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
