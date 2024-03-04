import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Aside from '../../components/Aside'
import DummyArticle from "../../mocks/article.json";
import Section from "../../components/Home/Section";
import Header from "../../components/Home/HeaderHome";
import Home from "../../interface/Article";

const HomePage: React.FC = () => {
  const [articles] = useState<Home[]>(DummyArticle);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex flex-wrap justify-center items-center gap-4 mt-12 px-6">
        {articles.map((article: Home) => (
          <div key={article.id}>
            <Section {...article} />
          </div>
        ))}
      </div>
      <Aside />
      <Footer />
    </div>
  );
};

export default HomePage;
