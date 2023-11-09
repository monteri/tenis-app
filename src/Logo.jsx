import React from "react";
import Collapse from "./Collapse";




function Logo() {
   return (
      <>
         <div>
            <div className="header-t">
               <h1 className="text-right text-lg text-white px-5 py-3">вулиця Корольова, 2</h1>
               <p className="text-right text-base text-white px-5">Пн-Нд | 09:00 - 23:00</p>
            </div>
            <div className="rate">
               <Collapse/>
               </div>
         </div>
      </>
   );
}

export default Logo