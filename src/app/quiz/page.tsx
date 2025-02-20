import { SideNavbar } from "@/components/SideNavbar";

export default function Quiz() {
    return (
      <>
        <div className="w-full h-[calc(100vh-3rem)] flex flex-row">
          <SideNavbar />
          <div className="w-full h-full bg-grid "></div>
        </div>
      </>
    );
}