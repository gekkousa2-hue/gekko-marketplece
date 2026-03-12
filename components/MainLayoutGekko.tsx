import NavbarGekko from './NavbarGekko'
import FooterGekko from './FooterGekko'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayoutGekko({ children }: MainLayoutProps) {
  return (
    <>
      <NavbarGekko />
      <main className="flex-1">{children}</main>
      <FooterGekko />
    </>
  )
}