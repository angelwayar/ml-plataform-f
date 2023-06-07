import Navbar from "@/app/(landing)/_components/Navbar"

export default function LandingLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
