import React from "react";
import Header from "../../components/header/Header";

export default function Dashboard() {
  const title = "Lorem ipsum dolor sit amet.";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto maiores dolor ipsa voluptas sit sequi animi at! Obcaecati, distinctio necessitatibus? Quia veniam qui hic.";

  return (
    <div>
      <Header title={title} description={description} />
    </div>
  );
}
