import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useState} from "react";
import Link from 'next/link'
import { useRouter } from 'next/router';
import Identity from "./Identity";
import NewVote from "./NewVote";
import Header from "../components/Header";
import abi from "../helpers/ZkVote.json";
import {useContract,useSigner} from 'wagmi';
import { Input } from '@chakra-ui/react';
const {ethers} = require("ethers"); 
const Home: NextPage = () => {
  const router = useRouter()
  const [Stage,Setstage] = useState(1);
  const [_identity,_Setidentity] = useState();
  const [Event,SetEvent]  = useState();
  const { data: signer, isError, isLoading } = useSigner();
  const [Id,SetId] = useState();
  const contract = new ethers.Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,abi.abi,signer);
  const mainnetprovider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/gDhsVUBEe61W2Q0w40A7Jwr3ZVyJ_Mvo");
  
  return (
    <>
    <div className={styles.container}>
    
      <div className = {styles.main}>
      <Identity></Identity>
      <div>
 
    </div>

      </div>
    </div>
    </>
  );
};

export default Home;
