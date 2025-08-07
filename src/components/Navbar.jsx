// import { useEffect, useState } from "react";
// import { cn } from "../lib/utils";
// import { Menu, X } from "lucide-react";

// const navItems = [
//   { name: "Home", href: "#hero" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
//   { name: "Resume", href: "pdf/resume.pdf" },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.screenY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <nav
//       className={cn(
//         "fixed w-full z-40 transition-all duration-300",
//         isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
//       )}
//     >
//       <div className="container flex items-centre justify-between">
//         <a
//           className="text-xl font-bold text-primary flex items-center"
//           href="#hero"
//         >
//           {/* <span className="relative z-10">
//             <span className="text-glow text-foreground">Rupayan Das</span>{" "}
//             Portfolio
//           </span> */}
//         </a>

//         {/* desktop nav */}
//         {/* <div className="hidden md:flex space-x-8">
//           {navItems.map((item, key) => (
//             <a
//               key={key}
//               href={item.href}
//               className="text-foreground/80 hover:text-primary transition-colors duration-300"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div> */}

//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item, key) =>
//             item.name === "Resume" ? (
//               // <a
//               //   key={key}
//               //   href={item.href}
//               //   target="_blank"

//               //   rel="noopener noreferrer"
//               //   className="text-foreground/80 hover:text-primary transition-colors duration-300"

//               // >
//               //   {item.name}
//               // </a>
//               //------------------------------------------------------------------------------------------
//               <button
//                 key={key}
//                 onClick={() => {
//                   // Open in new tab
//                   window.open(item.href, "_blank");

//                   // Trigger download
//                   const link = document.createElement("a");
//                   link.href = item.href;
//                   link.download = "resume.pdf";
//                   document.body.appendChild(link);
//                   link.click();
//                   document.body.removeChild(link);
//                 }}
//                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
//               >
//                 {item.name}
//               </button>
//             ) : (
//               //---------------------------------------------------------------------------------------------------------------
//               <a
//                 key={key}
//                 href={item.href}
//                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
//               >
//                 {item.name}
//               </a>
//             )
//           )}
//         </div>

//         {/* mobile nav */}
//         <button
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//           className="md:hidden p-2 text-foreground z-50"
//           aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
//         </button>
//         <div
//           className={cn(
//             "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
//             "transition-all duration-300 md:hidden",
//             isMenuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           )}
//         >
//           <div className="flex flex-col space-y-8 text-xl">
//             {navItems.map((item, key) => (
//               <a
//                 key={key}
//                 href={item.href}
//                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "pdf/resume.pdf" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-centre justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          {/* <span className="relative z-10">
            <span className="text-glow text-foreground">Rupayan Das</span>{" "}
            Portfolio
          </span> */}
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) =>
            item.name === "Resume" ? (
              <button
                key={key}
                onClick={() => {
                  window.open(item.href, "_blank");

                  const link = document.createElement("a");
                  link.href = item.href;
                  link.download = "Rupayan_Das_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            ) : (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* mobile nav button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile nav menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) =>
              item.name === "Resume" ? (
                <button
                  key={key}
                  onClick={() => {
                    window.open(item.href, "_blank");
                    const link = document.createElement("a");
                    link.href = item.href;
                    link.download = "Rupayan_Das_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    setIsMenuOpen(false);
                  }}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};