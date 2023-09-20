import React from "react";
export async function getStaticProps() {
  return {
    props: {
      pageId: "essays",
      metadata: {
        title: "Essays | Grace Huang",
        description: "Write the essays by Grace Huang",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com",
        },
      },
    },
  };
}

const Essays = () => {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Essays</h1>
      </header>
    </div>
  );
};

export default Essays;
