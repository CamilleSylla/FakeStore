import React from 'react';

export default function Panier() {

    return (
        <div className="bracketCont">

            <div className="itemPan">
                <h1> Mon Panier</h1>
                <div className="connection">
                <p> Veuillez vous connecté pour obtenir des avantages membres</p>
                <p> Connectez Vous</p>
                </div>
                <PanItem/>
            </div>

            <div className="bill">
                <h3> Facture </h3>
                <p> entrez votre code promo !</p>
                <p> Marchandise : </p>
                <h4> Total de marchandise : </h4>
                <p> Procedez a l'achat </p>
            </div>

        </div>
    )
}

class PanItem extends React.Component {


    render () {


        return (
            <div className="panDis">
                <img src="" alt="Mes Articles"/>
                <div className="panTxt">
                    <h1>titre</h1>
                    <p>prix</p>
                    <p>categorie</p>
                </div>
            </div>
        )
    }
}