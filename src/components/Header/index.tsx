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
    const [responsiveWidthMenuList, setResponsiveWitdhMenuList] = useState<string>('100vw');

    
    useEffect(()=>{
        document.querySelectorAll("a").forEach((item)=>{
            if(item.toString() === document.title)
            {
                
                item.setAttribute("id","hovered");
            }
            console.log(item.name);
        })
    },[history]);

    window.addEventListener('resize', function(){
        if(window.screen.width>=600)
        {
            setWitdhMenuList('100vw');
        }
    });

    const renderLink = ()=>{
        return links.map(link=>{
            
            return (
                <li 
                    key={link.route} 
                    onClick={()=>setResponsiveWitdhMenuList((responsiveWidthMenuList==="0")?'block':'0')}
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
                        setResponsiveWitdhMenuList((responsiveWidthMenuList==="0")?'100vw':'0');
                        setWitdhMenuList('100vw');
                    }} 
                >
                    <Icons.Menu />
                </span>
                <ul 
                    className="menu-list" 
                    style={{width:(document.querySelector("span.menu[style]")===null)?
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