// app/devices/page.tsx

export default function DevicesPage() {

    const companies = [
        "CyberNetix", "NeuroShield", "DataFlow", "QuantumGuard", "SkyGate",
        "SecureNode", "VisionAI", "ByteArmor", "CloudVault", "OmniScan",
        "TitanCode", "HexaLogic", "AlphaPulse", "SentinelIT", "IronCrypt",
        "DeepTrace", "ShadowLink", "VoltEdge", "CoreSense", "ZenithOps",
        "BitGuardian", "NovaTech", "AegisSystems", "VectorPoint", "ProxyCore",
        "BlueSphere", "RedTeamOne", "GridLock", "SignalForce", "SyncroBase",
        "InfinityOS", "NanoBolt", "MacroDef", "EagleEye", "SolarisIT",
        "GhostProtocol", "LogicGate", "StreamLine", "CyberCell", "VortexAI",
        "DeltaShield", "NexusPoint", "MatrixOps", "FlashPoint", "SolidState",
        "ApexCloud", "OrbitalData", "PrismLogic", "VeritasIT", "KryptonNet",
        "StealthBit", "FutureProof", "EdgeRunner", "MetaGuard", "TerraForm",
        "AuraScan", "CogniSoft", "RuneTech", "FluxPoint", "GravityIT",
        "BraveNet", "CinderCode", "OasisCyber", "AetherLink", "WildCard",
        "PrimeSource", "ElementIT", "FrostByte", "SolarFlare", "TitaniumAI",
        "ZeroTrust", "MidasTouch", "ElysiumNet", "CyberArc", "VanguardIT",
        "HyperLink", "SonicWall", "StarBase", "CometCode", "ApexLogic",
        "GlobalGuard", "SafeHarbor", "PhoenixIT", "RapidScan", "IronClad",
        "DigitalAegis", "CyberPulse", "NetSentry", "ShieldWall", "DataPoint",
        "CodeMaster", "TechSentinel", "BinaryBase", "SecurePath", "LogicLink",
        "SmartShield", "CyberFlow", "OpenGate", "WebArmor", "SystemCore",
        "BitMelt", "SynapseX", "OrbitalDef", "DarkFiber", "LightSpeed",
        "ShieldOS", "NeuralNode", "AeroSecurity", "BlackBox", "InvisoTech",
        "GridGuard", "CyberHive", "BioLogic", "NanoGuard", "MegaShield",
        "IronSphere", "CryptoWay", "SecureSphere", "TitanCloud", "ByteBack",
        "VisionaryIT", "PulsePoint", "DataDome", "CipherLogic", "CloudSentry",
        "MetaMatrix", "SecureWave", "TechTower", "CyberAnchor", "NetNinja",
        "AlphaGuard", "OmicronIT", "ApexLink", "DeltaFlow", "NexusSecure",
        "SolidLogic", "FlashGuard", "PrismSecurity", "VerityCloud", "KryptonCode",
        "StealthNet", "EdgeSentry", "MacroSecurity", "BlueAnchor", "RedPoint",
        "GridForce", "SignalSecure", "SyncroCloud", "InfinityGuard", "NanoLogic",
        "BraveShield", "CinderNet", "OasisLogic", "AetherSecure", "WildPoint",
        "PrimeGuard", "ElementCloud", "FrostLogic", "SolarSentry", "TitaniumNet",
        "ZeroCloud", "MidasGuard", "ElysiumSecurity", "CyberWave", "VanguardNet",
        "HyperGuard", "SonicSecure", "StarCloud", "CometSecurity", "ApexPoint",
        "GlobalNet", "SafeGuard", "PhoenixCloud", "RapidSecurity", "IronNet",
        "DigitalGuard", "CyberSentry", "NetAegis", "ShieldPoint", "DataGuard",
        "CodeSentry", "TechAegis", "BinaryPoint", "SecureAegis", "LogicSentry",
        "SmartPoint", "CyberAegis", "OpenPoint", "WebSentry", "SystemAegis"
    ];

    return (
        <main className="py-10 px-5">

            {/* Твой новый заголовок */}
            <h1 className="text-4xl font-bold text-center mb-10 text-white">
                Supported devices
            </h1>

            {/* Контейнер с карточками */}
            <div className="flex flex-wrap gap-4 justify-center">
                {companies.map((name, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white/5 border border-white/10 rounded-full text-3xl hover:border-blue-500 
                        transition-all cursor-default"
                    >
                        {name}
                    </div>
                ))}
            </div>
        </main>
    );
}
