"use client";

import React, { useState, useEffect, useMemo } from 'react';

export default function XandeumGalaxyFinal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [countdown, setCountdown] = useState(30);

  const xandEmerald = '#10b981'; 
  const xandPurple = '#a855f7';
  const xandGold = '#f59e0b';

  // 1. DATA: Added Coordinates & Detailed Bios for Click Actions
  const nodes = useMemo(() => [
    { id: 'pNode_Tokyo_01', wiz: 99, version: '0.8.0', tier: 'Titan', mult: '176x', lastSeen: '2s ago', lat: '35%', lng: '82%', region: 'Tokyo, JP', bio: 'High-performance storage cluster located in Equinix TY3.' },
    { id: 'pNode_Berlin_04', wiz: 94, version: '0.8.0', tier: 'Dragon', mult: '64x', lastSeen: '14s ago', lat: '30%', lng: '48%', region: 'Berlin, DE', bio: 'Community-run node with dedicated 10Gbps uplink.' },
    { id: 'pNode_London_09', wiz: 72, version: '0.7.5', tier: 'Coyote', mult: '40x', lastSeen: '1m ago', lat: '28%', lng: '42%', region: 'London, UK', bio: 'Strategic gateway node for European storage traffic.' },
    { id: 'pNode_NY_12', wiz: 92, version: '0.8.0', tier: 'Titan', mult: '176x', lastSeen: '5s ago', lat: '36%', lng: '22%', region: 'New York, US', bio: 'Verified Titan node with 16x Deep South Era priority.' },
    { id: 'pNode_SG_05', wiz: 88, version: '0.8.0', tier: 'Base', mult: '16x', lastSeen: '45s ago', lat: '55%', lng: '78%', region: 'Singapore, SG', bio: 'Standard pNode contributing to SE Asia data redundancy.' },
  ], []);

  const filteredNodes = nodes.filter(n => n.id.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    const timer = setInterval(() => setCountdown(prev => (prev > 0 ? prev - 1 : 30)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh', color: '#1e293b', padding: '30px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* HEADER */}
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#0f172a', margin: 0 }}>Xandeum <span style={{ color: xandEmerald }}>Global Command</span></h1>
          <p style={{ color: '#64748b', fontSize: '13px' }}>● Live Gossip Sync: {countdown}s</p>
        </div>
        <div style={{ background: xandPurple, color: '#fff', padding: '10px 20px', borderRadius: '12px', fontWeight: '800', fontSize: '12px' }}>DEEP SOUTH 16x ACTIVE</div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '25px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* INTERACTIVE MAP (The Visual Hook) */}
          <div style={{ height: '350px', background: '#1e293b', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid #334155' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 2 }}>
               <h3 style={{ color: '#fff', margin: 0, fontSize: '16px' }}>Network Topology</h3>
               <p style={{ color: '#94a3b8', fontSize: '11px' }}>Click a pulse to inspect pNode details</p>
            </div>
            {/* Markers */}
            {nodes.map((node, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedNode(node)}
                className="map-marker"
                style={{ position: 'absolute', top: node.lat, left: node.lng, cursor: 'pointer', transform: 'translate(-50%, -50%)' }}
              >
                <div style={{ width: '12px', height: '12px', background: xandEmerald, borderRadius: '50%', boxShadow: `0 0 20px ${xandEmerald}` }}></div>
                <div className="ping" style={{ position: 'absolute', width: '30px', height: '30px', border: `2px solid ${xandEmerald}`, borderRadius: '50%', top: '-9px', left: '-9px' }}></div>
              </div>
            ))}
          </div>

          {/* TABLE */}
          <div style={{ background: '#fff', padding: '24px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ textAlign: 'left', fontSize: '11px', color: '#94a3b8' }}>
                <tr><th style={{ paddingBottom: '15px' }}>NODE ID</th><th>BOOST</th><th>SYNC</th></tr>
              </thead>
              <tbody>
                {filteredNodes.map((node, i) => (
                  <tr key={i} onClick={() => setSelectedNode(node)} style={{ cursor: 'pointer', borderBottom: '1px solid #f1f5f9' }} className="row-hover">
                    <td style={{ padding: '15px 0', fontWeight: '700' }}>{node.id}</td>
                    <td style={{ color: xandEmerald, fontWeight: '900' }}>{node.mult}</td>
                    <td style={{ fontSize: '12px' }}>{node.lastSeen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* INFO PANEL (The "Click Action" Feature) */}
        <div style={{ background: '#fff', borderRadius: '24px', padding: '30px', border: '1px solid #e2e8f0', height: 'fit-content' }}>
          {selectedNode ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '10px', background: '#ecfdf5', color: xandEmerald, padding: '4px 8px', borderRadius: '6px', fontWeight: '900' }}>ACTIVE NODE</span>
                <button onClick={() => setSelectedNode(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#94a3b8' }}>✕</button>
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 5px 0' }}>{selectedNode.id}</h2>
              <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '25px' }}>{selectedNode.region}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '25px' }}>
                <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '12px' }}>
                  <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>WIZ SCORE</p>
                  <p style={{ fontWeight: '900', margin: '5px 0 0 0' }}>{selectedNode.wiz}%</p>
                </div>
                <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '12px' }}>
                  <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>NFT TIER</p>
                  <p style={{ fontWeight: '900', margin: '5px 0 0 0', color: xandGold }}>{selectedNode.tier}</p>
                </div>
              </div>

              <h4 style={{ fontSize: '12px', fontWeight: '800', marginBottom: '10px' }}>NODE MISSION</h4>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>{selectedNode.bio}</p>
              
              <button style={{ width: '100%', marginTop: '30px', padding: '15px', borderRadius: '12px', background: '#0f172a', color: '#fff', fontWeight: '700', border: 'none', cursor: 'pointer' }}>
                View on Xandeum Scan
              </button>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '100px 0', color: '#94a3b8' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔍</div>
              <p style={{ fontSize: '14px' }}>Select a node to view <br/>performance details</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .ping { animation: pulse-ring 2s infinite; }
        @keyframes pulse-ring { 0% { transform: scale(0.3); opacity: 0.8; } 100% { transform: scale(1.5); opacity: 0; } }
        .row-hover:hover { background: #f8fafc; }
        .map-marker:hover .ping { border-color: white; }
      `}</style>
    </div>
  );
}
