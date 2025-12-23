import React from 'react';

export default function Home() {
  const glassPanel = {
    background: 'rgba(15, 15, 15, 0.6)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(0, 255, 204, 0.15)',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5)',
    position: 'relative' as 'relative',
    overflow: 'hidden'
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#020202', color: '#fff', padding: '40px', fontFamily: '"JetBrains Mono", monospace, sans-serif' }}>
      {/* Dynamic CSS for Animations */}
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 5px rgba(0, 255, 204, 0.2); }
          50% { box-shadow: 0 0 20px rgba(0, 255, 204, 0.5); }
          100% { box-shadow: 0 0 5px rgba(0, 255, 204, 0.2); }
        }
        .glow-value { color: #00ffcc; text-shadow: 0 0 10px rgba(0, 255, 204, 0.5); }
        .grid-bg { background-image: radial-gradient(circle, #111 1px, transparent 1px); background-size: 30px 30px; }
      `}</style>

      <div className="grid-bg" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}></div>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '900', letterSpacing: '-2px' }}>
            XANDEUM<span style={{ color: '#00ffcc', textShadow: '0 0 15px #00ffcc' }}>.OS</span>
          </h1>
          <p style={{ opacity: 0.4, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '4px' }}>
            Decentralized Storage Layer • Analytics Engine v1.0.4
          </p>
        </div>
        <div style={{ padding: '8px 16px', border: '1px solid #00ffcc', borderRadius: '4px', color: '#00ffcc', fontSize: '11px', fontWeight: 'bold' }}>
          <span style={{ animation: 'pulse 2s infinite', display: 'inline-block', width: '8px', height: '8px', backgroundColor: '#00ffcc', borderRadius: '50%', marginRight: '10px' }}></span>
          SYSTEM STATUS: OPTIMAL
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
        {[
          { label: 'ACTIVE pNODES', value: '3', color: '#00ffcc' },
          { label: 'NETWORK LOAD', value: '24.2%', color: '#fff' },
          { label: 'STORAGE LAYER', value: 'V0.8.1', color: '#fff' },
          { label: 'CURRENT EPOCH', value: '722', color: '#00ffcc' }
        ].map((stat, i) => (
          <div key={i} style={glassPanel}>
            <div style={{ fontSize: '10px', opacity: 0.4, fontWeight: 'bold', marginBottom: '12px', letterSpacing: '1px' }}>{stat.label}</div>
            <div className="glow-value" style={{ fontSize: '32px', fontWeight: '800', color: stat.color }}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Main Visuals */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div style={{ ...glassPanel, height: '450px', background: 'rgba(0,0,0,0.4)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', opacity: 0.6 }}>TOPOLOGY VISUALIZATION</span>
            <span style={{ fontSize: '10px', opacity: 0.3 }}>[ 42.029.112ms ]</span>
          </div>
          <div style={{ height: '350px', width: '100%', border: '1px dashed rgba(0, 255, 204, 0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle, rgba(0,255,204,0.03) 0%, transparent 70%)' }}>
             <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '12px', opacity: 0.3 }}>INITIALIZING NEURAL MAP...</p>
                <div style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.05)', marginTop: '10px' }}>
                  <div style={{ width: '40%', height: '100%', background: '#00ffcc' }}></div>
                </div>
             </div>
          </div>
        </div>

        <div style={glassPanel}>
          <h3 style={{ fontSize: '12px', fontWeight: 'bold', opacity: 0.6, marginBottom: '20px' }}>NODE PROPAGATION INDEX</h3>
          <input 
            type="text" 
            placeholder="Search Identity..." 
            style={{ width: '100%', background: '#000', border: '1px solid rgba(0,255,204,0.2)', padding: '12px', borderRadius: '4px', color: '#fff', fontSize: '13px', outline: 'none' }}
          />
          <div style={{ marginTop: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', opacity: 0.3, marginBottom: '10px' }}>
              <span>RECENT ACTIVITY</span>
              <span>TIME</span>
            </div>
            {[1, 2, 3].map(item => (
              <div key={item} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <span style={{ color: '#00ffcc' }}>● <span style={{ color: '#fff' }}>pNode-Alpha_Recv</span></span>
                <span style={{ opacity: 0.4 }}>Just now</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
