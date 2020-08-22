import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import * as Icons from '@material-ui/icons';


import './style.css';

const links = [
    {route:"/home",label:"Home"},
    {route:"/graduations",label:"Formações"},
    {route:"/projects",label:"Projetos"},
    {route:"/contact",label:"Contato"}
];
export default function Header()
{
    const history = useHistory();
    const [widthMenuList, setWitdhMenuList] = useState<string>('100vw');
    const [responsiveWidthMenuList, setResponsiveWitdhMenuList] = useState<string>('0');
    useEffect(()=>{
        const lists = document.getElementsByTagName("li");
        for(let i=0;i<lists.length;i++)lists[i].onclick = function(){
            setTimeout(()=>setHoveredTitle(),100);
        }
        setTimeout(()=>setHoveredTitle(), 100);
    },[history]);

    window.addEventListener('resize', function(){
        if(window.screen.width>=600)setWitdhMenuList('100vw');
        else setWitdhMenuList('0');setResponsiveWitdhMenuList('0');
    });

    function setHoveredTitle()
    {
        const lists = document.getElementsByTagName("li");
        for(let i=0;i<lists.length;i++)
        {
            if(lists[i].id === document.title) lists[i].classList.add("hovered")
            else lists[i].classList.remove("hovered")
        }
    }

    const renderLink = ()=>{
        return links.map(link=>{
            
            return (
                <li 
                    id={link.label}
                    key={link.route} 
                    onClick={()=>{
                        setResponsiveWitdhMenuList('0')
                    }}
                >
                    <Link  to={link.route} >{link.label}</Link>
                </li>
            );
        })};
    return(
        <header className="container">
            <nav className="header">
                <span 
                    className="menu" 
                    style={{display:(responsiveWidthMenuList === '0')?'block':'none'}}
                    onClick={()=>{
                        setResponsiveWitdhMenuList((responsiveWidthMenuList==="0")?'90vw':'0');
                        setWitdhMenuList('90vw');
                    }} 
                >
                    <Icons.Menu />
                </span>
                <ul 
                    className="menu-list" 
                    style={{width:(window.screen.width<600)?
                        responsiveWidthMenuList:widthMenuList
                    }}
                >
                    <li 
                        className="btn-close-menu-list"
                        onClick={()=>{
                            setResponsiveWitdhMenuList('0');
                            setWitdhMenuList('0');    
                        }}
                    >
                        X
                    </li>
                    {renderLink()}
                </ul>
            </nav>
        </header>        
    );
}