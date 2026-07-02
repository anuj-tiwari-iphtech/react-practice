

import { useRef } from "react";

function ScrollSection() {
  const sectionRef = useRef();

  return (
    <>
      <button
        onClick={() =>
          sectionRef.current.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Go to Section
      </button>

      <div style={{ height: "100vh" }}></div>

      <div
        ref={sectionRef}
        style={{
          height: "300px",
          background: "skyblue",
        }}
      >
        Target Section
      </div>
    </>
  );
}

export default ScrollSection;