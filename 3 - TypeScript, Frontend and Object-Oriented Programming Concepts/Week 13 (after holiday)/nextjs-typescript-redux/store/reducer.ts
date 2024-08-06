const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: "Post 1",
            body: "Test Text 1"
        },
        {
            id: 2,
            title: "Post 2",
            body: "Test Text 2"
        },
    ]
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
): ArticleState => {
    switch (action.type) {
        case "ADD_ARTICLE":
            const newArticle: IArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle),
            };
        case "REMOVE_ARTICLE":
            const updatedArticles: IArticle[] = state.articles.filter(
                (article) => article.id !== action.article.id
            );
            return {
                ...state, articles: updatedArticles,
            };
    }
    return state;
}

export default reducer