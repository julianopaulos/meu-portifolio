import React from 'react';
import axios from 'axios';
export default class Contato extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.state = {
            name : '',
            email : '',
            message : '',
            mailSent : false,
            error : null
        }
    }
    handleSubmit(event)
    {
        event.preventDefault();
        axios({
            method : 'post',
            url : 'http://localhost/ReactJS/meu-portifolio-por-mim/api/contato/',
            data : JSON.stringify(this.state),
            datatype : 'application/json'
        })
            .then((request)=>{
                console.log(request);
                let data  = request.data.indexOf('{"sent":{"data":true}}');
                (data!==-1)?this.setState({mailSent : false}):this.setState({mailSent : true});
            })
            .catch((error)=>{console.log(error)});
    };
    render()
    {
        return(
            <div className="container content" id="contato" data-spy="scroll" data-target="#barraNavegacao">
                <h1>Contato</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-md-2"/>
                        <div className="col-md-4">
                        <form action="" method="post">
                            <label><h4>Seu nome:</h4>
                                <input 
                                    type="text" 
                                    name="name" 
                                    required 
                                    onChange={e=>this.setState({name : e.target.value})}
                                />
                            </label><br/>
                            <label><h4>Seu e-mail:</h4>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required
                                    onChange={e=>this.setState({email : e.target.value})}
                                />
                            </label><br/>
                            <label><h4>Deixe sua mensagem:</h4>
                                <textarea 
                                    rows="5" 
                                    cols="30" 
                                    name="message"
                                    onChange={e=>this.setState({message : e.target.value})}
                                    required
                                />
                            </label><br/>
                            <input type="submit" value="Enviar" onClick={e=>this.handleSubmit(e)} />

                        </form>
                        </div>
                        <div className="col-md-1"/>
                        <div className="col-md-4">
                            <h5>Outros contatos:</h5>
                            <div className="dados">
                                Juliano Paulo da Silva Santos<br/>
                                E-mail: julianopaulo.santos@hotmail.com
                                Celular (WhatsApp): (35) 9 8452-3630
                            </div>
                        </div>
                    </div>
                    <div>
                        {this.state.mailSent && <div className="text-center"><h3>Obrigado por entrar em contato,
                            responderei assim que possível!</h3></div>}
                    </div>
                    
                </div>
            </div>
        );
    }
}