import React from 'react'
import '../style/Paggination.css'

function Paggination() {
    return (
        <div className="page">
            <div class="container paggination">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                    <li class="page-item disabled">
                        <a class="page-link" href="/" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" aria-disabled="true" href="/">1</a></li>
                    <li class="page-item"><a class="page-link" href="/">2</a></li>
                    <li class="page-item"><a class="page-link" href="/">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="/">Next</a>
                    </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Paggination
