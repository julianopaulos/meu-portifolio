import React from 'react';
import {Link} from 'react-router-dom';


const links = [
    {route:"/home",label:"Home"},
    {route:"/estudos",label:"Formações"},
    {route:"/portifolio",label:"Portifólio"},
    {route:"/contato",label:"Contato"}
];
export default class Header extends React.Component
{
    renderLink = ()=>{
        return links.map(link=>
            <Link key={link.route} to={link.route}>
                {link.label}
            </Link>)
    };
    render()
    {
        return(
            <div>
                <header>
                    <nav className="nav-container text-center">
                        <ul>
                            <li>
                                {this.renderLink()}
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}