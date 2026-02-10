"use client";
import { useState } from 'react';

export default function ScanPage() {
  const [version, setVersion] = useState("v2c");
  // Добавляем состояния для новых полей
  const [community, setCommunity] = useState("");
  const [username, setUsername] = useState("");
  const [securityLevel, setSecurityLevel] = useState("authPriv");
  const [authProtocol, setAuthProtocol] = useState("SHA");

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center font-space">Scan Configuration</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[700px]">
        
        {/* ЛЕВОЕ ОКНО: Настройки */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col shadow-2xl">
          <h2 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Параметры SNMP</h2>
          
          <div className="space-y-5 flex-1 overflow-y-auto pr-2">
            {/* Общее поле для всех (Target IP) */}
            <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
              <label className="text-sm text-gray-400 font-medium">IP адрес цели</label>
              <input 
                type="text" 
                placeholder="192.168.1.1" 
                className="bg-[#0d1117] border border-white/20 text-white p-3 rounded-xl focus:border-blue-500 outline-none"
              />
            </div>
            {/* 1. Выбор версии (Всегда виден) */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 font-medium">Версия протокола</label>
              <select
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                className="bg-[#0d1117] border border-white/20 text-white p-3 rounded-xl focus:border-blue-500 outline-none transition-all"
              >
                <option value="v2c">SNMP v2c</option>
                <option value="v3">SNMP v3</option>
              </select>
            </div>

            {/* 2. Поля для v1 и v2c */}
            {(version === "v1" || version === "v2c") && (
              <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-1">
                <label className="text-sm text-gray-400 font-medium">SNMP Community</label>
                <input 
                  type="text" 
                  value={community}
                  onChange={(e) => setCommunity(e.target.value)}
                  placeholder="public" 
                  className="bg-[#0d1117] border border-white/20 text-white p-3 rounded-xl focus:border-blue-500 outline-none"
                />
              </div>
            )}

            {/* 3. Поля для v3 */}
            {version === "v3" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 font-medium">SNMP Username</label>
                  <input 
                    type="text" 
                    placeholder="admin"
                    className="bg-[#0d1117] border border-white/20 text-white p-3 rounded-xl focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 font-medium">Security Level</label>
                  <select className="bg-[#0d1117] border border-white/20 text-white p-3 rounded-xl outline-none">
                    <option value="noAuthNoPriv">noAuthNoPriv</option>
                    <option value="authNoPriv">authNoPriv</option>
                    <option value="authPriv">authPriv (Most Secure)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">Auth Protocol</label>
                    <select className="bg-[#0d1117] border border-white/20 text-white p-3 rounded-xl outline-none">
                      <option value="MD5">MD5</option>
                      <option value="SHA">SHA</option>
                      <option value="SHA-256">SHA-256</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">Auth Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="bg-[#0d1117] border border-white/20 text-white p-3 rounded-xl focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            
          </div>

          <button className="w-full mt-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all active:scale-95">
            RUN SCAN
          </button>
        </section>

        {/* ПРАВОЕ ОКНО: Оставляем как было */}
        <section className="bg-[#05070a] border border-blue-500/20 rounded-3xl p-6 shadow-2xl">
           <p className="text-green-400 font-mono italic">{"// Console Output Ready..."}</p>
        </section>

      </div>
    </main>
  );
}
