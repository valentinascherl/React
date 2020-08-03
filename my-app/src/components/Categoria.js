import React from "react";

function Categoria() {
    let Categoria = ["Categorie 01", "Categorie 02", "Categorie 03", "Categorie 04", "Categorie 05", "Categorie 06"];
    return (
        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        {Categoria.map(category =>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                { category }
                                </div>
                            </div>
                        </div>
                         )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categoria;