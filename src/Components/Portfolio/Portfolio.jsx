import { useEffect, useState } from 'react';
import PortfolioList from '../portfoliolist/PortfolioList';
import './Portfolio.css';
import {featuredPortfolio, webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio} from '../../data.js'

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: 'featured',
            title: 'Featured',
        },
        {
            id: 'web',
            title: 'Web App',
        }
        ,
        {
            id: 'mobile',
            title: 'Mobile App',
        },
        {
            id: 'design',
            title: 'Design',
        },
        {
            id: 'content',
            title: 'Content',
        }
    ];

    useEffect(() => {
        switch (selected) {
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            case 'content':
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);

        
        }
    },
        [selected]);


    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} id={item.id} active={item.id === selected} setSelected={setSelected}/>))}
            </ul>
            <div className='container'>
                
                {data.map((data) => (
                    <a href={data.href} target={'_blank'}>
                        <div className='item'>
                          <img src={data.img} alt='' />
                        <h3>{data.title}</h3>
                        
                        </div>
                    </a>
                    ))} 
                

            </div>
            
        </div>
    )
}
