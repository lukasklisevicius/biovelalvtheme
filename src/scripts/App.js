import React, { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
// import Home from "./pages/Home"
import About from "./pages/About"
import Grill from "./pages/Grill"
import Snacks from "./pages/Snacks"
// import Contacts from "./pages/Contacts"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import { AnimatePresence } from "framer-motion";
import Policy from "./pages/Policy";

function App() {
  const [graph,setGraph] = useState([])
  const [isLoading, setLoading] = useState(true);

  const qr = {
    query: `query MyQuery2 {
      pages {
        edges {
          node {
            pageId
            title
            slug
          }
        }
      }
      aboutSlides {
        nodes {
          aboutSlides {
            aboutSlide {
              mediaItemUrl
            }
            mobileImg{
              mediaItemUrl
            }
            text
            buttonText
            buttonUrl
          }
        }
      }
      privacyPage: pageBy(pageId: 3) {
				privacyPolicyPage{
          content
        }
      }
      aboutPage: pageBy(pageId: 32) {
        aboutPage {
          logo {
            mediaItemUrl
          }
          content
          showvideo
          video
        }
      }
        grillPage: pageBy(pageId: 34) {
        grillPage {
          header
          content
          showvideo
          video 
        }
      }
      snacksPage: pageBy(pageId: 36) {
        snacksPage {
          header
          content
          showvideo
          video
        }
      }
      homePage: pageBy(pageId: 30) {
        homePage {
          logo {
            mediaItemUrl
          }
          facebookUrl
          instagramUrl
          youtubeUrl
        }
        footer{
          credits
          contacts{
            header
            line1{
              input1
              input2
            }
            line2{
              input1
              input2
            }
            line3{
              input1
              input2
            }
            line4{
              input1
              input2
            }
            line5{
              input1
              input2
            }
            line6{
              input1
              input2
            }
            line7{
              input1
              input2
            }
          }
        }  
      }
      grillProductsPost {
        nodes {
          title
          product {
            description
            imgagePng {
              mediaItemUrl
            }
          }
        }
      }
      snacksProductsPost {
        nodes {
          title
          product {
            imgagePng {
              mediaItemUrl
            }
            description
          }
        }
      }
    }`
  }

  const getData = () =>{
    fetch(' http://localhost/wordpress/graphql',{
      method: 'post',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(qr),
    })
    .then(res => res.json())
    .then(data =>{setGraph(data.data);setLoading(false)})
    .catch((err) => {
      console.log(err);
    });
  }

  console.log(graph)

  useEffect(()=>{
    getData()
  },[])

  if(isLoading){return(<div style={{backgroundColor:'none',width:'100%',height:'100vh'}}></div>)}

  return (
    <>
    <Nav pages={graph.pages} content={graph.homePage} />
    <div className="container">
      <AnimatePresence>
      <Routes>
        <Route path="/wordpress/" element={<About content={graph.aboutPage.aboutPage} slides={graph.aboutSlides.nodes} />} />
        {/* <Route path="/wordpress/about-us" element={<About />} /> */}
        <Route path={`/wordpress/${graph.pages.edges[2].node.slug}`} element={<Grill products={graph.grillProductsPost} content={graph.grillPage.grillPage} slides={graph.aboutSlides.nodes} />} />
        <Route path={`/wordpress/${graph.pages.edges[1].node.slug}`} element={<Snacks products={graph.snacksProductsPost} content={graph.snacksPage.snacksPage} slides={graph.aboutSlides.nodes}/>} />
        <Route path={`/wordpress/${graph.pages.edges[5].node.slug}`} element={<Policy content={graph.privacyPage.privacyPolicyPage} />} />
 
        <Route path='*' element={<NotFound />}/>
        {/* <Route path="/wordpress/contacts" element={<Contacts />}/> */}
      </Routes>
      </AnimatePresence> 
    </div>
    <Footer pages={graph.pages} content={graph.homePage} /> 
    </>
  )
}

export default App
