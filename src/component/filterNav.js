import React from 'react';

function FilterNav() {

    return (
        <div className="filternav">
            <div>
                <input type="checkbox" id="homme" name="homme"/>
                    <label for="homme">Homme</label>
                </div>
                <div>
                <input type="checkbox" id="femme" name="femme"/>
                    <label for="femme">Femme</label>
                </div>
                <div>
                <input type="checkbox" id="bijoux" name="bijoux"/>
                    <label for="bijoux">Bijoux</label>
                </div>
                <div>
                <input type="checkbox" id="technologie" name="technologie"/>
                    <label for="technologie">Technologie</label>
                </div>
            </div>
    )
}

export default FilterNav;