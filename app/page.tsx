"use client";
import React, { useState } from 'react';

export default function GalaxyDashboard() {
  const xandGreen = '#10b981';
  const xandPurple = '#a855f7';

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '40px', overflow: 'hidden' }}>
      
      {/* GALAXY VISUAL (Background Layer) */}
      <div style={{ position: 'absolute', top: '15%', right: '5%', width: '500px', height: '500px', zIndex: 0 }}>
        {/* The Sun: xandSOL Core */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100px', height: '100px', background: `radial-gradient(circle, ${xandGreen} 0%, transparent 70%)`, borderRadius: '50%', boxShadow: `0 0 80px ${xandGreen}` }}></div>
        
        {/* Orbit 1: Rewards Star */}
        <div className="orbit-fast" style={{ position: 'absolute', width: '300px', height: '300px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', top: '100px', left: '100px', animation: 'spin 12s linear infinite' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '50%', width: '20px', height: '20px', background: xandPurple, borderRadius: '50%', boxShadow: `0 0 20px ${xandPurple}` }}></div>
        </div>

        {/* Orbit 2: Airdrop Points */}
        <div className="orbit-slow" style={{ position: 'absolute', width: '450px', height: '450px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '50%', top: '25px', left: '25px', animation: 'spin-reverse 25s linear infinite' }}>
          <div style={{ position: 'absolute', bottom: '-15px', left: '50%', width: '15px', height: '15px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 15px #fff' }}></div>
        </div>
      </div>

      {/* FOREGROUND CONTENT */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '0' }}>Xandeum <span style={{ color: xandGreen }}>Galaxy</span></h1>
        <p style={{ color: '#94a3b8', fontSize: '20px', marginBottom: '50px' }}>Community Rewards & xandSOL Liquid Staking</p>

        <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '30px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ color: xandPurple, fontSize: '12px', fontWeight: '800', letterSpacing: '2px' }}>MY TOTAL POINTS</p>
            <h2 style={{ fontSize: '56px', margin: '15px 0' }}>420,690</h2>
            <button style={{ width: '100%', background: xandGreen, color: '#000', fontWeight: '800', padding: '15px', borderRadius: '12px', border: 'none', cursor: 'pointer' }}>Stake for 1.5x Multiplier</button>
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
