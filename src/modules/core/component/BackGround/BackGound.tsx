import type { ReactNode } from "react";
interface BackgroundProps {
  children: ReactNode; 
}

const BackGround: React.FC<BackgroundProps> = ({children}) =>{
    return(
<div className="min-h-screen w-full bg-white relative">
  {/* Amber Glow Background */}
  <div
    className="absolute inset-0 z-[-99999]"
    style={{
      backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #fa6639 100%)
      `,
      backgroundSize: "100% 100%",
    }}
  />
  {children}
</div>
)
}
export default BackGround;