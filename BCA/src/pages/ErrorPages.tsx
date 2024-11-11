import React from "react";
import { Link } from "react-router-dom";

// במקרה שיזין כתובת שגוייה יקפוץ לו הודעת שגיאה למשתמש
export const ErrorPages = () => {
  return (
    <div className="errorPages">
      <h1>
        Error 404 notfound <Link to={"/users"}>חזרה לדף הבית</Link>
      </h1>
    </div>
  );
};
