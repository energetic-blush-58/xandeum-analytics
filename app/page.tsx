"use client";

import React, { useState, useEffect, useMemo } from 'react';

export default function XandeumUnifiedCommand() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [countdown, setCountdown] = useState(30);

  const xandEmerald = '#10b981'; 
  const xandPurple = '#a855f7';
  const xandGold = '#f59e0b';

  // 1. DATA ENGINE (Merged Technical + Economic)
  const nodes = useMemo(() => [
    { id: 'pNode_Tokyo_01', wiz: 99, version: '0.8.0', tier: 'Titan', mult: 176, storage: '4.2 TB', uptime: '99.9%', region: 'Tokyo, JP', lat: '35%', lng: '82%', bio: 'Equinix TY3 cluster. High-performance Herrenberg node.' },
    { id: 'pNode_Berlin_04', wiz: 94, version: '0.8.0', tier: 'Dragon', mult: 64, storage: '2.1 TB', uptime: '98.2%', region: 'Berlin, DE', lat: '30%', lng: '48%', bio: 'EU Central node. Active in Deep South Era phase.' },
    { id: 'pNode_London_09', wiz: 72, version: '0.7.5', tier: 'Coyote', mult: 40, storage: '8.4 TB', uptime: '84.5%', region: 'London, UK', lat: '28%', lng: '42%', bio: 'Legacy node. Upgrade required for 16x boost eligibility.' },
    { id: 'pNode_NY_12', wiz: 92, version: '0.8.0', tier: 'Titan', mult: 176, storage: '12.1 TB', uptime: '99.1%', region: 'New York, US', lat: '36%', lng: '22%', bio: 'US East cluster. Validating 12TB+ of network storage.' },
    { id: 'pNode_SG_05', wiz: 88, version: '0.8.0', tier: 'Base', mult: 16, storage: '1.2 TB', uptime: '97.4%', region: 'Singapore, SG', lat: '55%', lng: '78%', bio: 'SE Asia redundancy cluster for Xandeum Buckets.' },
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
      
      {/* BRANDING HEADER - UPDATED TO XANDEUM.OS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '36px', fontWeight: '950', color: '#0f172a', margin: 0, letterSpacing: '-1px' }}>
            XANDEUM<span style={{ color: xandEmerald }}>.OS</span>
          </h1>
          <p style={{ margin: 0, fontSize: '12px', color: '#64748b', fontWeight: '700' }}>
            UNIFIED COMMAND SUITE • <span style={{ color: xandPurple }}>DEEP SOUTH ERA (16X)</span>
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="pulse-dot" style={{ width: '10px', height: '10px', background: xandEmerald, borderRadius: '50%' }}></div>
              <span style={{ fontSize: '13px', fontWeight: '800' }}>GOSSIP SYNC: {countdown}S</span>
           </div>
        </div>
      </div>

      {/* STRATEGIC SUMMARY CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '25px' }}>
        {[
          { label: 'NETWORK NODES', val: '1,204', sub: '99.2% Online' },
          { label: 'STORAGE CAPACITY', val: '4.2 PB', sub: 'Verifiable' },
          { label: 'HERRENBERG ADOPTION', val: '92%', sub: 'v0.8.0+' },
          { label: 'GLOBAL UPTIME', val: '98.4%', sub: 'Healthy' }
        ].map((stat, i) => (
          <div key={i} style={{ background: '#fff', padding: '20px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: '800', color: '#94a3b8' }}>{stat.label}</p>
            <h2 style={{ margin: '8px 0', fontSize: '24px', fontWeight: '900' }}>{stat.val}</h2>
            <p style={{ margin: 0, fontSize: '11px', color: xandEmerald, fontWeight: '700' }}>{stat.sub}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '25px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* TOPOLOGY MAP */}
          <div style={{ height: '350px', background: '#0f172a', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 2 }}>
               <h3 style={{ color: '#fff', margin: 0, fontSize: '16px' }}>Network Topology</h3>
               <p style={{ color: '#64748b', fontSize: '11px' }}>Geographic pNode Distribution</p>
            </div>
            {nodes.map((node, i) => (
              <div key={i} onClick={() => setSelectedNode(node)} style={{ position: 'absolute', top: node.lat, left: node.lng, cursor: 'pointer', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
                <div style={{ width: '12px', height: '12px', background: xandEmerald, borderRadius: '50%', boxShadow: `0 0 15px ${xandEmerald}`, border: '2px solid #0f172a' }}></div>
                <div className="ping" style={{ position: 'absolute', width: '30px', height: '30px', border: `1px solid ${xandEmerald}`, borderRadius: '50%', top: '-10px', left: '-10px' }}></div>
              </div>
            ))}
          </div>

          {/* PERFORMANCE REGISTRY */}
          <div style={{ background: '#fff', padding: '25px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', alignItems: 'center' }}>
               <h3 style={{ fontSize: '18px', fontWeight: '800', margin: 0 }}>pNode Registry</h3>
               <input 
                 placeholder="Search by ID or Region..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 style={{ padding: '12px 18px', borderRadius: '14px', border: '1px solid #e2e8f0', width: '280px', outline: 'none', fontSize: '13px' }}
               />
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ textAlign: 'left', fontSize: '11px', color: '#94a3b8' }}>
                <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                  <th style={{ paddingBottom: '15px' }}>NODE ID / RELEASE</th>
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
                    <td style={{ fontWeight: '700', fontSize: '13px', color: parseFloat(node.uptime) > 95 ? xandEmerald : xandGold }}>{node.uptime}</td>
                    <td style={{ color: xandPurple, fontWeight: '900' }}>{node.mult}x</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ANALYTICS & REWARD CALCULATOR */}
        <div style={{ background: '#fff', borderRadius: '24px', padding: '30px', border: '1px solid #e2e8f0', height: 'fit-content', position: 'sticky', top: '25px' }}>
          {selectedNode ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '10px', background: '#f1f5f9', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontWeight: '900' }}>v{selectedNode.version} STABLE</span>
                <button onClick={() => setSelectedNode(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: '20px' }}>&times;</button>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: '900', margin: 0 }}>{selectedNode.id}</h2>
              <p style={{ color: '#64748b', fontSize: '13px', marginTop: '5px' }}>{selectedNode.region}</p>
              
              <div style={{ marginTop: '30px', padding: '25px', background: '#0f172a', borderRadius: '20px', textAlign: 'center', color: '#fff' }}>
                <p style={{ fontSize: '11px', color: xandEmerald, fontWeight: '800', margin: 0 }}>EST. MONTHLY REWARD</p>
                <h2 style={{ fontSize: '38px', fontWeight: '900', margin: '10px 0' }}>
                  {calculateReward(selectedNode).toLocaleString()} <span style={{ fontSize: '14px', color: xandEmerald }}>XAND</span>
                </h2>
                <p style={{ fontSize: '10px', color: '#64748b', margin: 0 }}>Incl. 16x Era + {selectedNode.tier} NFT</p>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: '800', color: '#94a3b8', marginBottom: '10px' }}>NODE PERFORMANCE</h4>
                <div style={{ fontSize: '13px', color: '#64748b', background: '#f8fafc', padding: '15px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                  {selectedNode.bio}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>📡</div>
              <h3 style={{ fontSize: '18px', fontWeight: '950' }}>XANDEUM LIVE</h3>
              <p style={{ fontSize: '13px', color: '#64748b' }}>Select a node to inspect pRPC metadata <br/>and projected STOINC yield.</p>
            </div>
          )}
        </div>
      </div>
      <style>{`.ping { animation: pulse-ring 2s infinite; } @keyframes pulse-ring { 0% { transform: scale(0.3); opacity: 0.8; } 100% { transform: scale(1.5); opacity: 0; } } .row-hover:hover { background: #f8fafc; transition: 0.2s; } .pulse-dot { animation: pulse-opacity 2s infinite; } @keyframes pulse-opacity { 0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; } }`}</style>
    </div>
  );
}
