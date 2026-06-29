import Logo from "@/components/Logo";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      aria-live="polite"
      aria-busy="true"
      aria-label="Carregando"
    >
      <Logo className="h-10 w-auto shrink-0 opacity-90" />
    </div>
  );
}
