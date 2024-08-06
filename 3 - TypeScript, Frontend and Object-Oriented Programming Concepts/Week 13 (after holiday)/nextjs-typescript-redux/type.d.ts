interface IArticle {
    id: number;
    title: string;
    body: string;
}

interface AddArticleAction {
    type: "ADD_ARTICLE";
    article: IArticle;
}

interface RemoveArticleAction {
    type: "REMOVE_ARTICLE";
    article: IArticle;
}

type ArticleAction = AddArticleAction | RemoveArticleAction;

interface ArticleState {
    articles: IArticle[];
}