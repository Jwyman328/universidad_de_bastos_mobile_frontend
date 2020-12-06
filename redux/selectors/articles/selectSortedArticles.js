import React from 'react'
import { createSelector } from 'reselect'

import selectAllArticles from './selectAllArticles'
import selectArticlesSortFecha from './selectArticleSortFecha'

  const sortArticlesByDate = (articleData, fecha) => {
    if (articleData && fecha){
        const articleDataSortedByOldest = articleData.sort((a, b) => new Date(a.date) - new Date(b.date));
        if(fecha==='Nuevo'){
          const articlesByNewest = articleDataSortedByOldest.reverse()

          return  articlesByNewest

        }else{
            return [...articleDataSortedByOldest]
        }
    }else{
        return undefined
    }
  
  }

  const selectSortedArticles = createSelector(
    selectAllArticles,
    selectArticlesSortFecha,
    sortArticlesByDate
  )

  export default selectSortedArticles;