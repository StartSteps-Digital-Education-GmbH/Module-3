"use client";
import * as React from 'react'
import { useEffect } from 'react';

type Props = {
    saveArticle: (article: IArticle | any) => void,
    currentArticle: IArticle
}

export const UpdateArticle: React.FC<Props> = ({ saveArticle, currentArticle }) => {
    const [article, setArticle] = React.useState<IArticle | null>(currentArticle) //local state

    //if currentArticle is update, update the artical

    useEffect(() => {
        setArticle(currentArticle);
    }, [currentArticle])

    const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
        setArticle({
            ...article,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const addNewArticle = (e: React.FormEvent) => {
        e.preventDefault()
        saveArticle(article)
    }

    return (
        <form onSubmit={addNewArticle}>
            <input
                type='text'
                id='title'
                placeholder='Title'
                onChange={handleArticleData} //controlled Inputs
                value={article?.title}
            />
            <input
                type='text'
                id='body'
                placeholder='Body'
                onChange={handleArticleData} //controlled Inputs
                value={article?.body}
            />
            <button onClick={addNewArticle}>Update article</button>

        </form>
    )
}