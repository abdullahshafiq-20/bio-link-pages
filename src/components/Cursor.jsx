import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  


  useEffect(() => {
    function moveCursor(e) {
      setCursor({ x: e.clientX, y: e.clientY });
    }
    const link=document.getElementsByClassName('link');

    const t1= gsap.timeline({paused:true});
    t1.to('.cursor',{
      scale:1.5,
      duration:0.5,
      ease:'power4.out'
    });
  
    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

     

  const { x, y } = cursor;

  return (
    <div
      className="cursor"
      style={{ left: `${x}px`, top: `${y}px` }}
    ></div>
  );
}
