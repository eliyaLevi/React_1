import React from "react";
import Header from "../layout/header/Header";

interface Props {
  title: string;
  subtitle: string;
}

export const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <div>
      <div className="PageHeader">
      <h1 className="header">{title}</h1>
      <h2 className="header">{subtitle}</h2>
      </div>
    </div>
  );
};
