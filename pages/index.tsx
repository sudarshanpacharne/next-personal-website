import React from "react";

export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me",
      metadata: {
        title: "Grace Huang",
        description:
          "Discover the work of Grace Huang on her personal website.",
        openGraph: {
          image: "https://example.com/image.png",
          url: "https://example.com",
        },
      },
    },
  };
}

const Home = () => {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">I&apos;m Grace</h1>
      </header>
    </div>
  );
};

export default Home;
