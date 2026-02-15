export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    // Центрируем форму логина по центру экрана на темном фоне
    <div className="min-h-screen flex items-center justify-center bg-[#080c0e]">
      {children}
    </div>
  );
}
