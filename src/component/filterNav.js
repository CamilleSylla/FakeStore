import React from 'react';

function FilterNav(props) {

    function test() {
        let inputs = document.getElementsByTagName('input');
        let index;
        let checked = []
        for (index = 0; index < inputs.length; ++index) {
            // deal with inputs[index] element.
            if (inputs[index].checked === true){
                checked.push(inputs[index].value);
                props.checked(checked);
            }
            
        }
    }
    return (
        <div className="filternav">
            <div>
                <input type="checkbox"
                    id="homme"
                    value="homme"
                    onChange={test} 
                    />
                <label for="homme">Homme</label>
            </div>
            <div>
                <input type="checkbox"
                 id="femme" 
                 value="femme"
                 onChange={test} 
                    />
                <label for="femme">Femme</label>
            </div>
            <div>
                <input type="checkbox"
                 id="bijoux" 
                 value="bijoux"
                 onChange={test} 
                    />
                <label for="bijoux">Bijoux</label>
            </div>
            <div>
                <input type="checkbox" 
                id="technologie"
                value="technologie" 
                onChange={test} 
                    />
                <label for="technologie">Technologie</label>
            </div>
        </div>
    )
}

export default FilterNav;