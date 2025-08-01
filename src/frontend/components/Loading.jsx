export default function Loading({ fullScreen = false }) {
  return (
    <div
      className={`flex items-center justify-center ${fullScreen ? "h-screen" : "py-8"}`}
    >
      <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}
