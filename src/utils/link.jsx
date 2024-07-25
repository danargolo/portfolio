import Link from "next/link";

export default function ScrollLink({ children, ...props }) {
  const handleScroll = (e) => {
    if (/^#/.test(props.href)) {
      e.preventDefault();
      const targetId = props.href.replace(/.*#/, "");
      const section = document.getElementById(targetId);
    
      setTimeout(() => {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }, 325);
    }
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};


