"use client";
import * as React from 'react'

type Props = {
    saveArticle: (article: IArticle | any) => void
}

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
    const [article, setArticle] = React.useState<IArticle | null>() //local state

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
            <button onClick={addNewArticle}>Add article</button>
        </form>
    )
}