import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import BodyComponent from './components/BodyComponent/BodyComponent'
import { GetScp } from './models/getScp.interface';
import axios from 'axios';


function App() {
  const [scp, setScp] = useState<GetScp | null>(null);
  async function searchScp(inputScp: string) {
    //TODO adicionar requisição feita pelo axios
    const url = `https://apiscp.azurewebsites.net/api/Scp/${inputScp}`;
    const scp: GetScp = (await axios.get(url)).data;
    setScp(scp);
  }
  return (
    <>
      <HeaderComponent onSearch={searchScp}></HeaderComponent>
      <BodyComponent scpData={scp}></BodyComponent>
    </>
  )
}



export default App
