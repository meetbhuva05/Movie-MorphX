import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './store/slice/homeSlice'
import { fetchDataFromApi } from './utils/api'

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Details from "./pages/details";
import SearchResult from "./pages/searchResult";
import Explore from "./pages/explore";
import PageNotFound from "./pages/404";
import { Route, Routes } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const url = useSelector((state) => state.home.url)

  useEffect(() => {
    (async () => {
      await fetchDataFromApi("/configuration")
        .then((res) => {
          console.log(res, "res")

          const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
        };

          dispatch(getApiConfiguration(url))
        })
    })()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
