import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCart from "../../components/HomeLayout/NewsCard";
import NewsCard from "../../components/HomeLayout/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const categoryId = Number(id);
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (categoryId === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCategoryNews(data);
      return;
    } else if (categoryId === 1) {
      const filterData = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filterData);
      return;
    } else {
      const filterData = data.filter((news) => news.category_id === categoryId);
      setCategoryNews(filterData);
    }
  }, [categoryId, data]);

  return (
    <div>
      <h2 className="font-semibold text-xl">
        Total({categoryNews.length}) News Found
      </h2>
      <div className="grid grid-cols-1 gap-5 mt-5">
        {categoryNews.map((news) => (
          <NewsCard news={news} key={news.id}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
