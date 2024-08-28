import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Masnic', lastName: 'Kapten'};
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image 
              src="/icons/Btn_Connect_3.svg"
              width={150}
              height={150}
              alt="menu icon" />
            <div>
              <MobileNav user={loggedIn} />
            </div>

          </div>
        {children}
        </div>
    </main>
  );
}
 