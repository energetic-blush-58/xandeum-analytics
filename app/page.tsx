import React from 'react';

export default function Home() {
  const xandYellow = '#FFD700'; // The original Cyberpunk Yellow
  const xandCyan = '#00ffcc';

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', color: '#fff', padding: '30px', fontFamily: '"Inter", sans-serif' }}>
      <style>{`
        @keyframes radar-pulse {
          0% { transform: scale(0.1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .radar-ring {
          position: absolute; border: 1px solid ${xandYellow}; border-radius: 50%;
          animation: radar-pulse 3s infinite;
        }
        .glass-header {
          background: rgba(20, 20, 20, 0.9); border-radius: 20px;
          padding: 20px 40px; border: 1px solid rgba(255,255,255,0.05);
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 30px;
        }
      `}</style>

      {/* Professional Rounded Header */}
      <div className="glass-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: xandYellow, color: '#000', padding: '8px 12px', borderRadius: '8px', fontWeight: '900', fontSize: '20px' }}>X</div>
          <div>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '800', letterSpacing: '1px' }}>XANDEUM<span style={{color: xandYellow}}>.OS</span></h1>
            <p style={{ margin: 0, fontSize: '10px', opacity: 0.5, letterSpacing: '2px' }}>MULTI-INDEX ANALYTICS ENGINE</p>
          </div>
        </div>
        <button style={{ background: 'transparent', border: `1px solid ${xandYellow}`, color: xandYellow, padding: '10px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          CONNECT WALLET
        </button>
      </div>

      {/* Original 4-Column Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
        {[
          { label: 'ACTIVE pNODES', value: '3', color: xandYellow },
          { label: 'NETWORK LOAD', value: '24.2%', color: '#fff' },
          { label: 'STORAGE LAYER', value: 'V0.8.1', color: '#fff' },
          { label: 'EPOCH', value: '722', color: '#4a90e2' }
        ].map((stat, i) => (
          <div key={i} style={{ background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.03)' }}>
            <div style={{ fontSize: '11px', opacity: 0.4, marginBottom: '10px', fontWeight: '600' }}>{stat.label}</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: stat.color }}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Main Sections */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '20px' }}>
        {/* Radar Section */}
        <div style={{ background: '#111', padding: '25px', borderRadius: '15px', position: 'relative', overflow: 'hidden' }}>
          <h3 style={{ fontSize: '12px', opacity: 0.6, marginBottom: '20px' }}>TOPOLOGY VISUALIZATION</h3>
          <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
             <div className="radar-ring" style={{ width: '100px', height: '100px' }}></div>
             <div className="radar-ring" style={{ width: '200px', height: '200px', animationDelay: '1s' }}></div>
             <div style={{ width: '12px', height: '12px', background: xandYellow, borderRadius: '50%', boxShadow: `0 0 15px ${xandYellow}`, zIndex: 2 }}></div>
             <div style={{ position: 'absolute', bottom: '20px', color: xandYellow, fontSize: '10px', fontWeight: 'bold' }}>MAIN</div>
          </div>
        </div>

        {/* Node Propagation Table */}
        <div style={{ background: '#111', padding: '25px', borderRadius: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '12px', opacity: 0.6 }}>NODE PROPAGATION INDEX</h3>
            <input placeholder="Search Identity..." style={{ background: '#000', border: '1px solid #333', padding: '8px 15px', borderRadius: '8px', color: '#fff', fontSize: '12px', width: '250px' }} />
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <thead>
              <tr style={{ textAlign: 'left', opacity: 0.3 }}>
                <th style={{ paddingBottom: '15px' }}>NODE IDENTITY</th>
                <th style={{ paddingBottom: '15px' }}>GOSSIP ENDPOINT</th>
                <th style={{ paddingBottom: '15px' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderTop: '1px solid #222' }}>
                <td style={{ padding: '15px 0', color: xandYellow }}>Xand_Validator_Main_01...</td>
                <td style={{ opacity: 0.7 }}>142.250.190.46</td>
                <td><span style={{ background: 'rgba(0, 255, 204, 0.1)', color: '#00ffcc', padding: '4px 8px', borderRadius: '4px', fontSize: '10px' }}>HEALTHY</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
