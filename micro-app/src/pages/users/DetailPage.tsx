import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Detail from "../../components/Detail";
import Footer from "../../components/Footer";
import  Article  from "../../interface/Article";
import detail from "../../mocks/detail.json"; 

const DetailPage: React.FC = () => {
    const [detailData] = useState<Article[]>(detail); 

    return (
        <>
        <Navbar />
        {detailData && detailData.map((data: Article, id: number) => { 
            return (
                <div key={id}>
                    <Detail
                        id={data.id}
                        image={data.image}
                        date={data.date}
                        title={data.title}
                        author={data.author}
                        detail={data.detail}
                    />
                </div>
            );
        })}
        <Footer />
        </>
        
    );
};

export default DetailPage;
