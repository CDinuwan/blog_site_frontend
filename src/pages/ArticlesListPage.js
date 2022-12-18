import ArticlesList from '../components/ArticlesLists';
import articles from './article-content';
import React from 'react';

const ArticlesListPage = () => {
    return (
        <>
        <h1>Articles</h1>
        <ArticlesList articles={articles} />
        </>
    );
}

export default ArticlesListPage;