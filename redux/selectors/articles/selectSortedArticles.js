import React from 'react'
import { createSelector } from 'reselect'

import selectAllArticles from './selectAllArticles'
import selectArticlesSortFecha from './selectArticleSortFecha'

  const sortArticlesByDate = (articleData, fecha) => {
    if (articleData && fecha){
        const articleDataSorted = articleData.sort((a, b) => new Date(a.date) - new Date(b.date));
        if(fecha==='Nuevo'){
          articleDataSorted.reverse()
        }
        return articleDataSorted
    }else{
        return []
    }
  
  }

  const selectSortedArticles = createSelector(
    selectAllArticles,
    selectArticlesSortFecha,
    sortArticlesByDate
  )

  export default selectSortedArticles;