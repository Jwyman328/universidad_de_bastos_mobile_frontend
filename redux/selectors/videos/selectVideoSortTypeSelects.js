import React from 'react'
import { createSelector } from 'reselect'
import selectAllVideos from './selectAllVideos'


export const selectVideoDataSort = state => state.videos.fecha

export const selectVideoWatchedSort = state => state.videos.mirado

export const selectVideoTypeSort = state => state.videos.tipo

export const selectVideoInsitutionSort = state => state.videos.institution

function filterInstitution(institution, video){

    if(institution==='Todos'){
      return true
    }

    if(institution==='UFM' && video.categories.includes('UFM')){
        return true
    }

    if(institution === 'Xoan De Lugo' && video.categories.includes('xoanDeLugo')){
        return true
    }

    if(institution === 'Juan De Mariana' && video.categories.includes('juanDeMariana')){
      return true
  }
    return false 
  }

  function filterType(tipo, video){
    if(tipo==='Todos'){
      return true
    }

    if(tipo==='Entrevista' && video.categories.includes('interview')){
        return true
    }

    if(tipo === 'Conferencia' && video.categories.includes('conference')){
        return true
    }

    return false 
  }

  function filterWatched(mirado, video){
    const hasVideoBeenWatched = video.hasBeenWatchedByUser? 'Mirado': "No Mirado"

    if(mirado==='Todos'){
      return true
    }

    if(mirado===hasVideoBeenWatched){
        return true
    }else{
      return false
    }
  }

  function sortByDate(fecha, videoData){
    const videosSortedByData = videoData.sort((a, b) => a.year - b.year);

    if(fecha==='Nuevo'){
      videosSortedByData.reverse()
    }
    return videosSortedByData
  }

  function sortVideoData(allVideos,fecha,institution, tipo, mirado) {
      if (allVideos){
        const sortedInstitutionVideos = allVideos.filter(video=>
            filterInstitution(institution,video)
         )
         const sortTypeVideos = sortedInstitutionVideos.filter(video=>
           filterType(tipo,video)
           )
         const sortWatchedVideos = sortTypeVideos.filter(video=>
           filterWatched(mirado, video)
         )
     
         const sortedByDate = sortByDate(fecha, sortWatchedVideos)
     
         return sortedByDate
      }else{
          return undefined
      }
   
  }

const selectSortedVideos = createSelector(
    selectAllVideos,
    selectVideoDataSort,
    selectVideoInsitutionSort,
    selectVideoTypeSort,
    selectVideoWatchedSort,
    sortVideoData
)

export default selectSortedVideos

