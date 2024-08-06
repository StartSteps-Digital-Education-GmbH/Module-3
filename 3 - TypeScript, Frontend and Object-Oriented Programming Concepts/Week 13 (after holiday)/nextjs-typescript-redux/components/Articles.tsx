"use client"

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";
import { addArticle, removeArticle } from "../store/actionCreators";
import { useCallback } from "react";
import { AddArticle } from "./AddArticle";
import { SingleArticle } from "./SingleArticle";

const Articles: React.FC = () => {
    const articles: readonly IArticle[] = useSelector(
        (state: ArticleState) => state.articles
    );

    const dispatch: Dispatch<any> = useDispatch();

    const saveArticle = useCallback(
        (article: IArticle) => dispatch(addArticle(article)),
        [dispatch]
    )

    return (
        <main>
            <h1>My articles</h1>
            <AddArticle saveArticle={saveArticle} />
            {articles.map((article: IArticle) => (
                <SingleArticle
                    key={article.id}
                    article={article}
                    removeArticle={removeArticle}
                />
            ))}
        </main>
    )
}



export default Articles;