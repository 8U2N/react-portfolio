import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const PortfolioSidebarList = (props) => {
    const portfolioList = props.data.map(portfolioItem => {
        return (
            <div className="portfolio-item-thumb" key={portfolioItem.id}>
                <div className="portfolio-thumb-img">
                    <img src={portfolioItem.thumb_image_url} />
                </div>
                <h1 className="title">{portfolioItem.name}</h1>
                <div className="action">
                    <a onClick={() => props.handleEditClick(portfolioItem)}>
                    <FontAwesomeIcon icon={faEdit} /></a>
                    <a onClick={() => props.handleDeleteClick(portfolioItem)}>
                    <FontAwesomeIcon icon={faDumpsterFire} />
                    </a>
                </div>
            </div>  
        );
    });


    return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>
};

export default PortfolioSidebarList;