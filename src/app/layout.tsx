import { Footer } from "@/components/Footer";
import { NavigationManu } from "@/components/NavigationMenu";
import "./globals.css";



export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{scrollBehavior:'smooth'}} lang="en">
       
      <body className="app bg-green text-textColor lg:w-full">
      <div className="tutor bg-green ">
          <div>
          <NavigationManu />
          {children}
          <Footer />
          </div>
        </div>
        
      </body>
    </html>
  );
}
