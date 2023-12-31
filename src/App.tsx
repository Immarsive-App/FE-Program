// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import axios from "axios"


import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"

import ListMentee from "./Pages/ListMentee/indexMentee"
import ClassPage from "./Pages/ClassPage/ClassPage"
import NewClassPage from "./Pages/ClassPage/NewClassPage"
import TeamPage from "./Pages/TeamPage/TeamPage"
import TambahMentee from "./Pages/ListMentee/tambahMentee"

import DetailMentee from "./Pages/ListMentee/DetailMentee"
import TambahFeedback from './Pages/ListMentee/TambahFeedback'

import NewTeamPage from "./Pages/TeamPage/NewTeamPage"
import Adduser from "./Pages/ListUser/Adduser"
import Userlist from "./Pages/ListUser/Userlist"
import EditClassPage from './Pages/ClassPage/EditClassPage'
import EditMentee from './Pages/ListMentee/EditMentee'


const App = () => {

  axios.defaults.baseURL = "http://54.252.240.166/"

  return (
    <div className="bg-gray-300">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ListMentee" element={<ListMentee />} />
          <Route path="/Class" element={<ClassPage />} />
          <Route path="/NewClass" element={<NewClassPage />} />
          <Route path="/EditClass" element={<EditClassPage />} />
          <Route path="/Team" element={<TeamPage />} />
          <Route path="/NewTeam" element={<NewTeamPage />} />
          <Route path="/TambahMentee" element={<TambahMentee />} />

          <Route path="/Userlist" element={<Userlist />} />
          <Route path="/Adduser" element={<Adduser />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path='/detailmentee/:id' element={<DetailMentee />} />
          <Route path='/tambahfeedback' element={<TambahFeedback />} />
          <Route path='/editmentee/:id' element={<EditMentee />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App