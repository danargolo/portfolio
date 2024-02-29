import Link from "next/link";


export default function ScrollLink({ children, ...props }) {
    const handleScroll = (e) => {
    e.preventDefault();
    const targetId = props.href.replace( /.*\#/, "");
    const elem = document.getElementById(targetId);


    setTimeout(()=>{
      window.scrollTo({
        top: elem.offsetTop,
        behavior: "smooth",
      });
    },325)
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};


