import { Outlet } from "react-router-dom";
import MainNavbar from "@/components/common/MainNavbar";
import { useRef } from "react";
import useScrollOnTop from "@/hooks/useScrollOnTop";

function App() {
  const pageRenderDivRef = useRef<HTMLDivElement>(null);

  useScrollOnTop(pageRenderDivRef);

  return (
    // wrapper
    <div className="h-screen w-screen min-w-minContent bg-black">
      {/* ===== main nav bar ===== */}
      <MainNavbar />

      {/* ===== all pages will be rendered below ===== */}
      <main
        ref={pageRenderDivRef}
        className="mx-auto h-[calc(100vh-4rem)] w-full min-w-minContent max-w-maxContent overflow-y-auto overflow-x-hidden scroll-smooth"
      >
        <Outlet />
      </main>
    </div>
  );
}

export default App;
