"use client";

import React, { useState } from 'react';

export default function CommunityGalaxy() {
  const [solAmount, setSolAmount] = useState<number | string>(10);
  const xandGreen = '#10b981';
  const xandPurple = '#a855f7';

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '30px',
  };

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'Inter, sans-serif', position: 'relative', overflow: 'hidden' }}>
      
      {/* GALAXY BACKGROUND ANIMATION */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: '450px', height: '450px', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', background: xandGreen, borderRadius: '50%', boxShadow: `0 0 100px ${xandGreen}`, opacity: 0.6 }}></div>
        <div className="orbit-1" style={{ position: 'absolute', width: '350px', height: '350px', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '50%', animation: 'spin 25s linear infinite' }}>
          <div style={{ position: 'absolute', top: '40px', right: '40px', width: '12px', height: '12px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 15px #fff' }}></div>
        </div>
        <div className="orbit-2" style={{ position: 'absolute', width: '220px', height: '220px', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '50%', top: '65px', left: '65px', animation: 'spin-reverse 15s linear infinite' }}>
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', width: '10px', height: '10px', background: xandPurple, borderRadius: '50%', boxShadow: `0 0 15px ${xandPurple}` }}></div>
        </div>
      </div>

      <header style={{ marginBottom: '50px', position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-1px', margin: 0 }}>
          Xandeum <span style={{ color: xandGreen }}>Galaxy</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '18px', marginTop: '8px' }}>Community Rewards & Liquid Staking Hub</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px', position: 'relative', zIndex: 1 }}>
        
        {/* STAKING INTERFACE */}
        <div style={glassStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '20px', margin: 0 }}>Stake SOL</h3>
            <span style={{ color: xandGreen, fontWeight: '800', fontSize: '14px' }}>8.42% APY + STOINC</span>
          </div>
          
          <div style={{ background: '#0f172a', padding: '20px', borderRadius: '16px', border: '1px solid #1e293b', marginBottom: '20px' }}>
            <p style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#64748b', fontWeight: 'bold' }}>AMOUNT TO STAKE</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <input 
                type="number" 
                value={solAmount}
                onChange={(e) => setSolAmount(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '24px', fontWeight: '700', outline: 'none', width: '60%' }}
              />
              <span style={{ fontWeight: '800' }}>SOL</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '25px', color: '#94a3b8', fontSize: '14px' }}>
            You will receive: <span style={{ color: '#fff', fontWeight: 'bold' }}>{(Number(solAmount) * 1.042).toFixed(3)} xandSOL</span>
          </div>

          <button style={{ width: '100%', background: xandGreen, color: '#020617', border: 'none', padding: '18px', borderRadius: '16px', fontWeight: '900', fontSize: '16px', cursor: 'pointer', transition: 'transform 0.2s' }}>
            Mint xandSOL
          </button>
        </div>

        {/* AIRDROP POINTS SECTION */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ ...glassStyle, background: `linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(2, 6, 23, 0))` }}>
            <p style={{ fontSize: '12px', fontWeight: '800', color: xandPurple, letterSpacing: '1px', marginBottom: '10px' }}>MY AIRDROP POINTS</p>
            <h2 style={{ fontSize: '36px', margin: 0 }}>142,500</h2>
            <p style={{ fontSize: '12px', color: '#22c55e', marginTop: '10px', fontWeight: 'bold' }}>+12% Staking Multiplier Active</p>
          </div>
          
          <div style={glassStyle}>
            <p style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', marginBottom: '10px' }}>NEXT SNAPSHOT</p>
            <h2 style={{ fontSize: '28px', margin: 0 }}>14d : 22h : 04m</h2>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
      `}</style>
    </div>
  );
}
