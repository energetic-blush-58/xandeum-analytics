import React from 'react';

export default function Home() {
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '20px'
  };

  return (
    <main style={{ 
      minHeight: '100vh', 
      backgroundColor: '#050505', 
      color: '#fff', 
      padding: '40px',
      fontFamily: 'system-ui, sans-serif' 
    }}>
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-1px', margin: 0 }}>XANDEUM<span style={{ color: '#00ffcc' }}>.OS</span></h1>
          <p style={{ opacity: 0.5, margin: '4px 0 0 0' }}>Multi-Index Analytics Engine</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00ffcc', boxShadow: '0 0 10px #00ffcc' }}></div>
          <span style={{ fontSize: '12px', fontWeight: '600' }}>SYSTEM LIVE — 12/22/2025</span>
        </div>
      </div>

      {/* Top Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
        <div style={glassStyle}>
          <div style={{ fontSize: '12px', opacity: 0.5, marginBottom: '8px' }}>ACTIVE pNODES</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffcc' }}>3</div>
        </div>
        <div style={glassStyle}>
          <div style={{ fontSize: '12px', opacity: 0.5, marginBottom: '8px' }}>NETWORK LOAD</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>24.2%</div>
        </div>
        <div style={glassStyle}>
          <div style={{ fontSize: '12px', opacity: 0.5, marginBottom: '8px' }}>STORAGE LAYER</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>V0.8.1</div>
        </div>
        <div style={glassStyle}>
          <div style={{ fontSize: '12px', opacity: 0.5, marginBottom: '8px' }}>CURRENT EPOCH</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffcc' }}>722</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div style={{ ...glassStyle, minHeight: '400px' }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '14px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>TOPOLOGY VISUALIZATION</h3>
          <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '8px' }}>
            <p style={{ opacity: 0.3 }}>[ Real-time Node Propagation Map ]</p>
          </div>
        </div>
        
        <div style={glassStyle}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '14px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>NODE PROPAGATION INDEX</h3>
          <input 
            type="text" 
            placeholder="Search by Identity or IP..." 
            style={{ width: '100%', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', borderRadius: '4px', color: 'white', marginBottom: '20px' }}
          />
          <div style={{ fontSize: '12px', opacity: 0.5 }}>No nodes selected for trace.</div>
        </div>
      </div>
    </main>
  );
}
