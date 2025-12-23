import React from 'react';

export default function Home() {
  const yellowNeon = '#FFD700'; // The original Cyberpunk Yellow
  const cyanNeon = '#00ffcc';   // Xandeum Green

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#020202', color: '#fff', padding: '40px', fontFamily: '"JetBrains Mono", monospace' }}>
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(15px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(15px) rotate(-360deg); }
        }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 5px ${yellowNeon}; }
          50% { box-shadow: 0 0 20px ${yellowNeon}; }
          100% { box-shadow: 0 0 5px ${yellowNeon}; }
        }
        .node-circle {
          width: 40px; height: 40px; border-radius: 50%;
          border: 2px solid ${yellowNeon}; position: relative;
          display: flex; align-items: center; justify-content: center;
          animation: pulse-glow 2s infinite;
        }
        .mini-node {
          width: 6px; height: 6px; background: ${cyanNeon};
          border-radius: 50%; position: absolute;
          animation: orbit 4s linear infinite;
        }
      `}</style>

      {/* Header with Wallet Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
        <div>
          <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '900', letterSpacing: '-2px' }}>
            XANDEUM<span style={{ color: cyanNeon }}>.OS</span>
          </h1>
          <p style={{ opacity: 0.5, color: yellowNeon, fontSize: '12px', letterSpacing: '2px' }}>MULTI-INDEX ANALYTICS ENGINE</p>
        </div>
        
        <button style={{ 
          background: 'transparent', border: `1px solid ${yellowNeon}`, color: yellowNeon,
          padding: '12px 24px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold',
          transition: 'all 0.3s', boxShadow: `0 0 10px rgba(255, 215, 0, 0.2)`
        }}>
          CONNECT WALLET
        </button>
      </div>

      {/* Stats Row with Yellow Accents */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'ACTIVE pNODES', value: '3', highlight: yellowNeon },
          { label: 'NETWORK LOAD', value: '24.2%', highlight: '#fff' },
          { label: 'STORAGE LAYER', value: 'V0.8.1', highlight: '#fff' },
          { label: 'CURRENT EPOCH', value: '722', highlight: yellowNeon }
        ].map((stat, i) => (
          <div key={i} style={{ background: 'rgba(20,20,20,0.8)', padding: '24px', borderLeft: `4px solid ${stat.highlight}`, borderRadius: '4px' }}>
            <div style={{ fontSize: '10px', opacity: 0.4, marginBottom: '10px' }}>{stat.label}</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: stat.highlight }}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Main Grid: Map & Index */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div style={{ background: 'rgba(10,10,10,0.5)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '30px', minHeight: '400px' }}>
          <h3 style={{ fontSize: '14px', marginBottom: '30px', opacity: 0.7 }}>TOPOLOGY VISUALIZATION</h3>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
            {/* The Glowing Circular Node Animation */}
            <div className="node-circle">
              <div className="mini-node"></div>
              <div style={{ color: yellowNeon, fontSize: '10px', fontWeight: 'bold' }}>MAIN</div>
            </div>
            {/* Connection Lines simulation */}
            <div style={{ width: '100px', height: '1px', background: `linear-gradient(to right, ${yellowNeon}, transparent)` }}></div>
          </div>
        </div>

        <div style={{ background: 'rgba(10,10,10,0.5)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '30px' }}>
          <h3 style={{ fontSize: '14px', marginBottom: '20px', opacity: 0.7 }}>NODE PROPAGATION INDEX</h3>
          <input 
            type="text" 
            placeholder="Search Identity..." 
            style={{ width: '100%', background: '#000', border: `1px solid ${yellowNeon}`, padding: '12px', borderRadius: '4px', color: '#fff', marginBottom: '20px' }}
          />
          <div style={{ fontSize: '12px', opacity: 0.4 }}>No nodes selected for trace.</div>
        </div>
      </div>
    </main>
  );
}
